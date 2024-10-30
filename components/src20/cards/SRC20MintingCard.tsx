import { SRC20Row } from "globals";
import { convertToEmoji } from "$lib/utils/util.ts";

interface SRC20MintingCardProps {
  src20: SRC20Row;
  onImageClick?: (imgSrc: string) => void;
  variant?: "desktop" | "mobile";
  onMintClick?: (tick: string) => void;
}

export function SRC20MintingCard({
  src20,
  onImageClick,
  variant = "desktop",
  onMintClick,
}: SRC20MintingCardProps) {
  const href = `/src20/${convertToEmoji(src20.tick)}`;
  const progress = src20.progress || "0";
  const progressWidth = `${progress}%`;

  if (variant === "mobile") {
    return (
      <div class="text-[#F5F5F5] bg-gradient-to-br from-[#0A000F00] via-[#14001FFF] to-[#1F002EFF] p-2 rounded-md">
        <div class="w-full flex items-center gap-2">
          <img
            src={`/content/${src20.tx_hash}.svg`}
            class="w-[74px] h-[74px] rounded-[3px] cursor-pointer"
            onClick={() => onImageClick?.(`/content/${src20.tx_hash}.svg`)}
          />
          <div class="w-full">
            <a href={href} class="text-xl uppercase">
              {convertToEmoji(src20.tick)}
            </a>
            <ProgressBar progress={progress} progressWidth={progressWidth} />
            <MintStats src20={src20} variant="mobile" />
          </div>
        </div>
        <MintButton tick={src20.tick} onMintClick={onMintClick} />
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
            class="text-2xl text-[#666666] font-bold hover:text-[#AA00FF]"
          >
            {convertToEmoji(src20.tick)}
          </a>
          <ProgressBar progress={progress} progressWidth={progressWidth} />
        </div>
      </div>
      <MintStats src20={src20} />
      <MintButton tick={src20.tick} onMintClick={onMintClick} />
    </div>
  );
}

function ProgressBar(
  { progress, progressWidth }: { progress: string; progressWidth: string },
) {
  return (
    <div class="flex flex-col gap-1">
      <p class="text-lg font-light text-[#999999]">
        PROGRESS{" "}
        <span class="font-bold">
          {progress.toString().match(/^-?\d+(?:\.\d{0,2})?/)?.[0] || "0"}%
        </span>
      </p>
      <div class="min-w-[260px] h-1 bg-[#999999] relative rounded-full">
        <div
          class="absolute left-0 top-0 h-1 bg-[#660099] rounded-full"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
}

function MintStats(
  { src20, variant = "desktop" }: {
    src20: SRC20Row;
    variant?: "desktop" | "mobile";
  },
) {
  const className = variant === "mobile" ? "text-sm" : "text-lg";

  return (
    <div class="p-3 text-center">
      <p class={`${className} text-[#666666] font-light`}>
        SUPPLY{" "}
        <span class="font-bold text-[#999999]">
          {Number(src20.max).toLocaleString()}
        </span>
      </p>
      <p class={`${className} text-[#666666] font-light`}>
        LIMIT{" "}
        <span class="font-bold text-[#999999]">
          {Number(src20.lim).toLocaleString()}
        </span>
      </p>
    </div>
  );
}

function MintButton(
  { tick, onMintClick }: { tick: string; onMintClick?: (tick: string) => void },
) {
  return (
    <div class="p-3 text-center">
      <button
        onClick={() => onMintClick?.(tick)}
        class="bg-[#8800CC] rounded-md text-[#080808] text-sm font-black w-[84px] h-[48px]"
      >
        Mint
      </button>
    </div>
  );
}
