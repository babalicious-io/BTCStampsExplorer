import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { SwiperType } from "swiper";

type CarouselElement = HTMLElement | null;

const CAROUSEL_CONFIG = {
  // Base dimensions
  SLIDES: {
    COUNT: 5, // Always show 5 slides
    MAX_WIDTH: 408, // Maximum width of center slide
    BASE_HEIGHT: 408, // Base height to maintain aspect ratio
  },

  // Scale factors for each position
  SCALE: {
    CENTER: 1.0, // Center slide at 100%
    ADJACENT: 0.8, // Adjacent slides at 80%
    OUTER: 0.6, // Outer slides at 60%
  },

  // Overlap percentages
  OVERLAP: {
    ADJACENT: 0.5, // Adjacent slides overlap center by 50%
    OUTER: 0.6, // Outer slides overlap adjacent by 60%
  },

  // Visual effects
  EFFECTS: {
    BLUR: {
      CENTER: 0, // No blur on center
      ADJACENT: 1, // Slight blur on adjacent
      OUTER: 2, // More blur on outer
    },
    OPACITY: {
      CENTER: "1", // Full opacity for center
      ADJACENT: "0.8", // Reduced for adjacent
      OUTER: "0.6", // Most reduced for outer
    },
  },

  // Animation settings
  ANIMATION: {
    SPEED: 600,
    AUTOPLAY: 3000,
  },

  DEBUG: {
    ENABLED: true,
  },
} as const;

const validateLayout = (
  containerWidth: number,
  dimensions: {
    baseWidth: number;
    translations: { adjacent: number; outer: number };
    centerOffset: number;
  },
) => {
  const { baseWidth, translations, centerOffset } = dimensions;
  const adjacentWidth = baseWidth * CAROUSEL_CONFIG.SCALE.ADJACENT;
  const outerWidth = baseWidth * CAROUSEL_CONFIG.SCALE.OUTER;

  // Calculate exact positions and overlaps
  const positions = {
    center: {
      left: centerOffset,
      right: centerOffset + baseWidth,
      width: baseWidth,
    },
    adjacent: {
      left: {
        start: centerOffset - (adjacentWidth * 0.5), // Should overlap center by 50%
        end: centerOffset + (adjacentWidth * 0.5),
      },
      right: {
        start: centerOffset + baseWidth - (adjacentWidth * 0.5),
        end: centerOffset + baseWidth + (adjacentWidth * 0.5),
      },
      width: adjacentWidth,
    },
    outer: {
      left: {
        start: centerOffset - adjacentWidth - (outerWidth * 0.4), // Should overlap adjacent by 60%
        end: centerOffset - adjacentWidth + (outerWidth * 0.6),
      },
      right: {
        start: centerOffset + baseWidth + adjacentWidth - (outerWidth * 0.6),
        end: centerOffset + baseWidth + adjacentWidth + (outerWidth * 0.4),
      },
      width: outerWidth,
    },
  };

  debug("Position Validation:", {
    containerWidth,
    positions,
    overlaps: {
      adjacentWithCenter: (baseWidth -
        (positions.adjacent.right.start - positions.adjacent.left.end)) /
        baseWidth,
      outerWithAdjacent: (adjacentWidth -
        (positions.outer.right.start - positions.outer.left.end)) /
        adjacentWidth,
    },
  });

  return {
    positions,
    isValid: {
      scaling: {
        adjacent: Math.abs(adjacentWidth / baseWidth - 0.8) < 0.01,
        outer: Math.abs(outerWidth / baseWidth - 0.6) < 0.01,
      },
      overlaps: {
        adjacent: Math.abs(
          (baseWidth -
                (positions.adjacent.right.start -
                  positions.adjacent.left.end)) / baseWidth - 0.5,
        ) < 0.01,
        outer: Math.abs(
          (adjacentWidth -
                (positions.outer.right.start - positions.outer.left.end)) /
              adjacentWidth - 0.6,
        ) < 0.01,
      },
      centering: Math.abs(
        positions.center.left -
          (containerWidth -
              (positions.outer.right.end - positions.outer.left.start)) / 2,
      ) < 1,
      containerFit: positions.outer.right.end <= containerWidth &&
        positions.outer.left.start >= 0,
    },
  };
};

const calculateDimensions = (containerWidth: number) => {
  // Base width calculation (35% of container)
  const baseWidth = Math.min(
    CAROUSEL_CONFIG.SLIDES.MAX_WIDTH,
    containerWidth * 0.35,
  );

  // Calculate scaled widths
  const adjacentWidth = baseWidth * CAROUSEL_CONFIG.SCALE.ADJACENT;
  const outerWidth = baseWidth * CAROUSEL_CONFIG.SCALE.OUTER;

  // Calculate visible portions after overlap
  const adjacentVisible = adjacentWidth *
    (1 - CAROUSEL_CONFIG.OVERLAP.ADJACENT);
  const outerVisible = outerWidth * (1 - CAROUSEL_CONFIG.OVERLAP.OUTER);

  // Calculate total width needed for all slides
  const totalWidth = baseWidth + // Center
    (2 * adjacentVisible) + // Two adjacent slides
    (2 * outerVisible); // Two outer slides

  // Center offset
  const centerOffset = (containerWidth - totalWidth) / 2;

  // Calculate translations for proper overlap
  const adjacentTranslate = (baseWidth / 2) -
    (adjacentWidth * CAROUSEL_CONFIG.OVERLAP.ADJACENT);
  const outerTranslate = adjacentTranslate +
    (adjacentWidth / 2) - (outerWidth * CAROUSEL_CONFIG.OVERLAP.OUTER);

  debug("Precise Calculations:", {
    container: {
      width: containerWidth,
      centerOffset,
    },
    dimensions: {
      base: baseWidth,
      adjacent: adjacentWidth,
      outer: outerWidth,
    },
    overlaps: {
      adjacentVisible,
      outerVisible,
    },
    translations: {
      adjacent: adjacentTranslate,
      outer: outerTranslate,
    },
    totalWidth,
  });

  return {
    baseWidth,
    translations: {
      adjacent: adjacentTranslate,
      outer: outerTranslate,
    },
    centerOffset,
  };
};

const calculateTranslateX = (
  distance: number,
  baseWidth: number,
): number => {
  if (distance === 0) return 0;

  const direction = distance > 0 ? 1 : -1;

  // Calculate positions based on base width
  if (Math.abs(distance) === 1) {
    // Adjacent slides: move by base width * 0.75 (creates 50% overlap)
    return direction * (baseWidth * 0.75);
  }

  if (Math.abs(distance) === 2) {
    // Outer slides: move by base width * 1.25 (creates 60% overlap with adjacent)
    return direction * (baseWidth * 1.25);
  }

  return 0;
};

const debug = (message: string, data?: unknown) => {
  console.log(`Carousel Debug: ${message}`, data);
};

export default function createCarouselSlider(
  el: CarouselElement,
): SwiperType | undefined {
  if (!el) return undefined;

  const swiperEl = el.querySelector(".swiper") as HTMLElement;
  if (!swiperEl) return undefined;

  const swiper = new Swiper(swiperEl, {
    modules: [Autoplay, Pagination],
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    speed: CAROUSEL_CONFIG.ANIMATION.SPEED,
    watchSlidesProgress: true,
    allowTouchMove: true,

    // Disable Swiper's default positioning
    cssMode: false,
    virtualTranslate: true, // Prevent Swiper's translations

    on: {
      beforeInit: function (swiper: SwiperType) {
        // Force wrapper to stay centered
        swiper.wrapperEl.style.transform = "translate3d(0, 0, 0)";
        swiper.wrapperEl.style.width = "100%";
        swiper.wrapperEl.style.display = "flex";
        swiper.wrapperEl.style.justifyContent = "center";
      },

      setTranslate: function (swiper: SwiperType) {
        // Prevent Swiper's default translation
        swiper.wrapperEl.style.transform = "translate3d(0, 0, 0)";
      },

      progress: function (swiper: SwiperType) {
        const containerWidth = el.offsetWidth;
        const { baseWidth } = calculateDimensions(containerWidth);
        const centerX = containerWidth / 2;

        const slides = swiper.slides;
        for (let i = 0; i < slides.length; i++) {
          const slideEl = slides[i] as HTMLElement;

          let distance = i - swiper.activeIndex;
          if (distance > slides.length / 2) distance -= slides.length;
          if (distance < -slides.length / 2) distance += slides.length;

          const isCenter = distance === 0;
          const isAdjacent = Math.abs(distance) === 1;
          const isOuter = Math.abs(distance) === 2;
          const shouldShow = Math.abs(distance) <= 2;

          if (!shouldShow) {
            slideEl.style.visibility = "hidden";
            slideEl.style.opacity = "0";
            slideEl.style.zIndex = "-1";
            continue;
          }

          // Set base styles
          slideEl.style.visibility = "visible";
          slideEl.style.width = `${baseWidth}px`;
          slideEl.style.position = "absolute";

          // Calculate transforms
          const scale = isCenter ? 1 : isAdjacent ? 0.8 : 0.6;
          const translateX = calculateTranslateX(distance, baseWidth);

          // Position from center of container
          const finalTranslateX = translateX - (baseWidth / 2);
          slideEl.style.left = `${centerX}px`;
          slideEl.style.transform =
            `translateX(${finalTranslateX}px) scale(${scale})`;

          slideEl.style.zIndex = isCenter ? "3" : isAdjacent ? "2" : "1";
          slideEl.style.opacity = isCenter ? "1" : isAdjacent ? "0.8" : "0.6";
          slideEl.style.filter = isCenter
            ? "none"
            : isAdjacent
            ? "blur(1px)"
            : "blur(2px)";

          debug(`Slide ${i} Position:`, {
            distance,
            baseWidth,
            translateX,
            finalTranslateX,
            centerX,
            scale,
            visible: shouldShow,
          });
        }
      },
    },
  });

  return swiper;
}

// Let me clearly state the design requirements and then propose a solution:
// Design Requirements:
// Center Image (Active):
// Maximum width/height of 408px and should scale up and down responsively
// Centered in the container/viewport
// Full opacity, no blur
// Scale: 1.0 (100%)
// Adjacent Images (Left and Right of Center):
// Scale: 0.8 (80% of center = ~326px)
// 50% overlapped behind the center image
// Slight blur effect
// Reduced opacity (0.8)
// One on each side of center image
// Outer Images (Furthest Left and Right):
// Scale: 0.6 (60% of center = ~245px)
// 60% overlapped behind adjacent images
// More blur effect
// More reduced opacity (0.6)
// One on each side of adjacent images
// Layout:
// Always show exactly 5 images
// Images should be arranged: Outer -> Adjacent -> Center -> Adjacent -> Outer
// Center image should be truly centered in the container
// Container should respect page margins and max-width
