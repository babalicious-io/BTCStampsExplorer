import { SRC20Row } from "globals";
import { abbreviateAddress, convertToEmoji } from "$lib/utils/util.ts";

interface SRC20MintedCardProps {
  src20: SRC20Row;
  onImageClick?: (imgSrc: string) => void;
  variant?: "desktop" | "mobile";
}

export function SRC20MintedCard(
  { src20, onImageClick, variant = "desktop" }: SRC20MintedCardProps,
) {
  const href = `/src20/${convertToEmoji(src20.tick)}`;

  if (variant === "mobile") {
    return (
      <div class="text-[#F5F5F5] bg-gradient-to-br from-[#0A000F00] via-[#14001FFF] to-[#1F002EFF] p-2 rounded-md">
        <div class="w-full flex items-center gap-2 mb-2">
          <img
            src={`/content/${src20.tx_hash}.svg`}
            class="w-[74px] h-[74px] rounded-[3px] cursor-pointer"
            onClick={() => onImageClick?.(`/content/${src20.tx_hash}.svg`)}
          />
          <div class="w-full">
            <div class="flex justify-between">
              <a href={href} class="text-xl uppercase">
                {convertToEmoji(src20.tick)}
              </a>
              <p class="text-sm">
                {new Date(src20.block_time).toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-sm text-[#666666] font-light">
                PRICE{" "}
                <span class="font-bold text-[#999999]">
                  {Number(src20.floor_unit_price).toFixed(10).toLocaleString()}
                </span>
              </p>
              <p class="text-sm text-[#666666] font-light">
                MARKETCAP{" "}
                <span class="font-bold text-[#999999]">
                  {Number(src20.mcap).toFixed(2).toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="bg-gradient-to-br from-[#0A000F00] via-[#14001FFF] to-[#1F002EFF] text-sm flex justify-between items-center rounded-md hover:border-[#9900EE] hover:shadow-[0px_0px_20px_#9900EE]">
      <div class="p-3 uppercase cursor-pointer flex gap-6">
        <img
          src={`/content/${src20.tx_hash}.svg`}
          class="w-[65px] h-[65px] cursor-pointer"
          onClick={() => onImageClick?.(`/content/${src20.tx_hash}.svg`)}
        />
        <div class="flex flex-col justify-between">
          <a
            href={href}
            class="text-2xl text-[#666666] font-bold hover:text-[#AA00FF] flex gap-4"
          >
            {convertToEmoji(src20.tick)}
            <SocialLinks src20={src20} />
          </a>
          <div class="flex flex-col gap-2">
            <p class="text-lg text-[#666666] font-light">
              PRICE{" "}
              <span class="font-bold text-[#999999]">
                {Number(src20.floor_unit_price).toFixed(10).toLocaleString()}
              </span>
            </p>
            <p class="text-lg text-[#666666] font-light">
              MARKETCAP{" "}
              <span class="font-bold text-[#999999]">
                {Number(src20.mcap).toFixed(2).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <StatsSection src20={src20} />
    </div>
  );
}

function SocialLinks({ src20 }: { src20: SRC20Row }) {
  return (
    <div class="flex gap-2">
      {src20.email && (
        <img width="25px" src="/img/src20/details/EnvelopeSimple.svg" />
      )}
      {src20.web && <img width="25px" src="/img/src20/details/Globe.svg" />}
      {src20.tg && (
        <img width="25px" src="/img/src20/details/TelegramLogo.svg" />
      )}
      {src20.x && <img width="25px" src="/img/src20/details/XLogo.svg" />}
    </div>
  );
}

function StatsSection({ src20 }: { src20: SRC20Row }) {
  return (
    <div class="p-3 text-center">
      <p class="text-lg text-[#666666] font-light">
        HOLDERS{" "}
        <span class="font-bold text-[#999999]">
          {Number(src20.holders).toLocaleString()}
        </span>
      </p>
      <p class="text-lg text-[#666666] font-light">
        DEPLOY{" "}
        <span class="font-bold text-[#999999]">
          {new Date(src20.block_time).toLocaleString("default", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </p>
      <p class="text-lg text-[#666666] font-light">
        CREATOR{" "}
        <span class="font-bold text-[#999999]">
          {src20.destination_name || abbreviateAddress(src20.destination)}
        </span>
      </p>
    </div>
  );
}
