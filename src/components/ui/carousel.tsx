import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperProps, SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type CarouselProps = {
  modules: SwiperProps["modules"];
  children: React.ReactNode;
  opts?: SwiperProps;
  withPagination?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  modules,
  children,
  opts,
  withPagination,
}) => {
  const carouselRef = React.useRef<SwiperRef>(null);

  const handlePrev = React.useCallback(() => {
    if (!carouselRef.current) return;

    return carouselRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!carouselRef.current) return;

    return carouselRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="relative w-full">
        <Swiper
          modules={modules}
          pagination={withPagination}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          {...opts}
          ref={carouselRef}
        >
          {children}
        </Swiper>
        <div className="absolute -inset-x-6 inset-y-0 flex items-center justify-between md:-inset-x-8">
          <ChevronLeft className="relative z-50" onClick={handlePrev} />
          <ChevronRight className="relative z-50" onClick={handleNext} />
        </div>
      </div>
    </>
  );
};

export { Carousel };
