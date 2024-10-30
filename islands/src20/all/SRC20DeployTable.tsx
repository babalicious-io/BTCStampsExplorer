import { useState } from "preact/hooks";
import { SRC20Row } from "globals";
import { SRC20MintedCard } from "$components/src20/cards/SRC20MintedCard.tsx";
import { SRC20MintingCard } from "$components/src20/cards/SRC20MintingCard.tsx";
import { ImageModal } from "$components/modals/ImageModal.tsx";

export function SRC20DeployTable({ data }: { data: SRC20Row[] }) {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = (imgSrc: string) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };

  const handleMintClick = (tick: string) => {
    const mintUrl = `/stamping/src20/mint?tick=${
      encodeURIComponent(tick)
    }&trxType=olga`;
    window.location.href = mintUrl;
  };

  return (
    <>
      <ImageModal
        imgSrc={modalImg}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div class="relative overflow-x-auto shadow-md">
        {/* Desktop View */}
        <div class="hidden xl:flex flex-col gap-6 p-2">
          {data.map((src20) => (
            src20.progress === "100"
              ? (
                <SRC20MintedCard
                  src20={src20}
                  onImageClick={handleImageClick}
                />
              )
              : (
                <SRC20MintingCard
                  src20={src20}
                  onImageClick={handleImageClick}
                  onMintClick={handleMintClick}
                />
              )
          ))}
        </div>

        {/* Mobile View */}
        <div class="flex xl:hidden flex-col gap-3 p-2">
          {data.map((src20) => (
            src20.progress === "100"
              ? (
                <SRC20MintedCard
                  src20={src20}
                  onImageClick={handleImageClick}
                  variant="mobile"
                />
              )
              : (
                <SRC20MintingCard
                  src20={src20}
                  onImageClick={handleImageClick}
                  variant="mobile"
                  onMintClick={handleMintClick}
                />
              )
          ))}
        </div>
      </div>
    </>
  );
}
