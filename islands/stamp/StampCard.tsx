import dayjs from "$dayjs/";
import relativeTime from "$dayjs/plugin/relativeTime";
import { StampRow } from "globals";
import TextContentIsland from "$islands/stamp/details/StampTextContent.tsx";

import {
  abbreviateAddress,
  formatSatoshisToBTC,
  getFileSuffixFromMime,
  getSupply,
} from "$lib/utils/util.ts";

dayjs.extend(relativeTime);

interface StampCardSizes {
  container: string;
  card: string;
  image: string;
  blur: string;
}

const cardSizes: Record<"large" | "default" | "small", StampCardSizes> = {
  large: {
    container: "w-[330px] h-[330px]",
    card: "w-[318px] h-[318px]",
    image: "w-[294px] h-[294px]",
    blur: "blur-[24px]",
  },
  default: {
    container: "w-[318px] h-[318px]",
    card: "w-[318px] h-[318px]",
    image: "w-[294px] h-[294px]",
    blur: "blur-[24px]",
  },
  small: {
    container: "w-[204px] h-[204px]",
    card: "w-[204px] h-[204px]",
    image: "w-[180px] h-[180px]",
    blur: "blur-[16px]",
  },
};

export function StampCard({
  stamp,
  kind = "stamp",
  isRecentSale = false,
  showInfo = true,
  abbreviationLength = 6,
  showDetails = false,
  variant = "default",
}: {
  stamp: StampRow & {
    sale_data?: { btc_amount: number; block_index: number; tx_hash: string };
  };
  kind: "cursed" | "stamp" | "named";
  isRecentSale?: boolean;
  showInfo?: boolean;
  abbreviationLength?: number;
  showDetails?: boolean;
  variant?: keyof typeof cardSizes;
}) {
  const sizes = cardSizes[variant];

  let src: string;
  const suffix = getFileSuffixFromMime(stamp.stamp_mimetype);
  src = `/content/${stamp.tx_hash}.${suffix}`;
  if (suffix === "unknown") {
    src = `/not-available.png`;
  }

  const renderContent = () => {
    if (stamp.stamp_mimetype === "text/plain" || suffix === "txt") {
      return <TextContentIsland src={src} />;
    } else if (suffix === "html") {
      return (
        <iframe
          scrolling="no"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          src={src}
          className="h-full w-fit max-w-full object-contain items-center pointer-events-none"
        />
      );
    } else {
      return (
        <img
          src={src}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `/not-available.png`;
          }}
          alt={`Stamp No. ${stamp.stamp}`}
          className="h-full w-full object-contain items-center pixelart"
        />
      );
    }
  };

  const renderPrice = () => {
    if (isRecentSale && stamp.sale_data) {
      return `${formatSatoshisToBTC(stamp.sale_data.btc_amount)}`;
    } else if (Number.isFinite(stamp.floorPrice)) {
      return `${stamp.floorPrice} BTC`;
    } else {
      return "NOT LISTED";
    }
  };

  const shouldDisplayHash = Number(stamp.stamp ?? 0) >= 0 ||
    (stamp.cpid && stamp.cpid.charAt(0) === "A");

  const supplyDisplay = stamp.ident !== "SRC-20" && stamp.balance
    ? `${getSupply(Number(stamp.balance), stamp.divisible)}/${
      stamp.supply < 100000 && !stamp.divisible
        ? getSupply(stamp.supply, stamp.divisible)
        : "+100000"
    }`
    : `1/${getSupply(stamp.supply, stamp.divisible)}`;

  const creatorDisplay = stamp.creator_name
    ? stamp.creator_name
    : abbreviateAddress(stamp.creator, abbreviationLength);

  return (
    <div className="relative flex justify-center">
      <div className={`relative ${sizes.container} flex flex-col`}>
        {/* Blur effect background */}
        <div
          className={`absolute inset-0 bg-[rgba(170,0,255,0.75)] rounded-[6px] ${sizes.blur} shadow-[24px_24px_24px]`}
        />

        <a
          href={`/stamp/${stamp.tx_hash}`}
          target="_top"
          f-partial={`/stamp/${stamp.tx_hash}`}
          className={`
            relative z-10 flex flex-col ${sizes.card} rounded-[6px] 
            border-2 border-[#8800CC] hover:border-[#aa00ff] 
            hover:shadow-[0px_0px_30px_#aa00ff] transition-all
          `}
          style={{
            background:
              "linear-gradient(141deg, #0A000F 0%, #14001F 50%, #1F002E 100%)",
          }}
        >
          {/* Image Container */}
          <div
            className={`${sizes.image} mx-auto my-auto p-3 overflow-hidden image-rendering-pixelated`}
          >
            {renderContent()}
          </div>

          {/* Info Section */}
          {showInfo && (
            <div className="flex flex-col font-medium px-[6px] xl:px-3">
              {/* Conditionally render the additional text */}
              {showDetails && (
                <>
                  {/* Stamp Number */}
                  <div className="pt-1 text-center">
                    {shouldDisplayHash && (
                      <span className="text-[#666666] text-3xl font-light font-work-sans">
                        #
                      </span>
                    )}
                    <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-black bg-gradient-to-r from-[#666666] to-[#999999] bg-clip-text text-transparent">
                      {Number(stamp.stamp ?? 0) >= 0 ||
                          (stamp.cpid && stamp.cpid.charAt(0) === "A")
                        ? `${stamp.stamp}`
                        : `${stamp.cpid}`}
                    </span>
                  </div>

                  {/* Creator Name or Abbreviated Address */}
                  <div className="text-center text-[#999999] text-base md:text-base xl:text-lg 2xl:text-xl font-bold font-work-sans break-words truncate">
                    {creatorDisplay}
                  </div>

                  {/* Price and Supply */}
                  <div className="flex justify-between mt-2">
                    {/* Render Price on the Left */}
                    <div>
                      <span className="text-[#999999] text-xs md:text-sm xl:text-base 2xl:text-lg font-medium font-work-sans">
                        {renderPrice()}
                      </span>
                    </div>

                    {/* Supply on the Right */}
                    <div className="text-right text-[#666666] text-xs md:text-sm xl:text-base 2xl:text-lg font-bold font-work-sans">
                      {supplyDisplay}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </a>
      </div>
    </div>
  );
}
