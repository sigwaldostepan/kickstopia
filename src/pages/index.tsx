import Link from "next/link";
import Image from "next/image";
import * as React from "react";

import { cn } from "~/lib/utils";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { buttonVariants } from "~/components/ui/button";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Carousel } from "~/components/ui/carousel";
import { FaArrowRight } from "react-icons/fa6";
import { PageLayout } from "~/components/layout/page-layout";

const Home = () => {
  return (
    <>
      <PageLayout>
        {/* hero section */}
        <section className="relative py-6 md:w-full md:pb-14 md:pt-28 lg:pt-0">
          <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 py-6 md:h-1/2 md:flex-row md:items-start md:justify-normal md:py-0 lg:h-[calc(100dvh-64px)] lg:items-center">
            <div className="flex flex-col items-center justify-center gap-y-6 text-center md:max-w-[26rem] md:items-start md:justify-start md:text-start lg:max-w-md">
              <h2 className="text-5xl font-bold md:text-6xl">
                Where the Best Kicks Exist
              </h2>
              <h3 className="text-balance text-lg leading-tight text-primary/60 md:text-xl">
                Find your dream sneakers in a place where only the best kicks
                exist.
              </h3>
              <Link
                aria-label="View Collection"
                href="/"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "font-semibold md:text-lg",
                )}
              >
                View Collection
              </Link>
            </div>
            <div className="relative -z-10 w-full md:absolute md:right-2 md:top-1/2 md:max-w-[400px] md:-translate-y-1/2 lg:max-w-[650px]">
              <AspectRatio className="relative" ratio={4 / 3}>
                <Image
                  alt="Hero image"
                  src="/images/hero.webp"
                  fill
                  priority
                  className="object-cover"
                />
                {/* shadow overlay for image.*/}
                {/* added negative margin and 6px for height and width, 
                since the shadow doesn't cover the entire image */}
                <div className="absolute z-10 -mt-1 h-[calc(100%+6px)] w-[calc(100%+6px)] bg-gradient-to-t from-background from-[0.5%] via-transparent to-background to-[99.5%]"></div>
                <div className="absolute z-10 -ml-1 h-[calc(100%+6px)] w-[calc(100%+6px)] bg-gradient-to-l from-background from-[0.5%] via-transparent to-background to-[99.5%]"></div>
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* popular items */}
        <section className="relative mt-8 w-full">
          <div className="flex flex-col items-start py-4">
            <div className="flex w-full items-center justify-between">
              <span className="py-2">
                <h4 className="text-2xl font-semibold md:text-3xl">
                  Popular Items
                </h4>
              </span>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                View more
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="mt-2 flex w-full flex-col items-center justify-center">
              <Carousel modules={[Pagination]} withPagination={true}>
                {Array.from({ length: 9 }).map((_, index) => {
                  return (
                    <SwiperSlide className="relative bottom-5" key={index}>
                      <Card className="mt-5">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={1 / 1}>
                            <Image
                              src="https://images-cdn.ubuy.co.id/651ae1ec6550d876a420ea3e-nike-mens-air-jordan-1-mid-chicago.jpg"
                              fill
                              className="rounded-t object-cover"
                              alt="Nike Air Jordan 1 Mid Chicago"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardFooter className="p-2">
                          <div className="flex flex-col gap-2">
                            <h2 className="text-sm font-light md:text-base">
                              Nike Air Jordan 1 Mid Chicago
                            </h2>
                            <h4 className="text-sm font-semibold md:text-base">
                              Rp X.XXX.XXX
                            </h4>
                          </div>
                        </CardFooter>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        {/* shop by categories/brand */}
        <section className="mt-8 w-full py-6 md:py-14">
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold capitalize md:text-3xl">
              Shop by gender
            </h4>
            <div className="mt-6 flex w-full flex-col gap-4 md:flex-row md:gap-6">
              {["men", "women", "kids"].map((category, index) => {
                return (
                  <div key={index} className="w-full">
                    <div className="md:hidden lg:block">
                      <AspectRatio className="relative" ratio={1 / 1}>
                        <Image
                          alt={`${category} collection`}
                          src={`/images/shop-by-categories-${category}.webp`}
                          fill
                          className="object-cover"
                        />
                        <Link
                          href={`/${category}`}
                          className={cn(
                            buttonVariants(),
                            "absolute bottom-4 right-4 z-10 font-semibold capitalize",
                          )}
                        >
                          {category}
                          <FaArrowRight className="ml-4" />
                        </Link>
                      </AspectRatio>
                    </div>
                    <div className="hidden md:block lg:hidden">
                      <AspectRatio className="relative" ratio={9 / 16}>
                        <Image
                          alt={`${category} collection`}
                          src={`/images/shop-by-categories-${category}.webp`}
                          fill
                          className="object-cover"
                        />
                        <Link
                          href={`/${category}`}
                          className={cn(
                            buttonVariants(),
                            "absolute bottom-4 right-4 z-10 font-semibold capitalize",
                          )}
                        >
                          {category}
                          <FaArrowRight className="ml-4" />
                        </Link>
                      </AspectRatio>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Home;
