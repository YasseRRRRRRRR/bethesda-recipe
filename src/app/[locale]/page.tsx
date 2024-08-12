import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import ShuffleGrid from "@/components/shuffleGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// maybe there's a more elegant way than just taking it from the url since we do that in the layout anyway but idk
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:ob-52 justify-center items-center">
          <div className="col-span-1 p-6 lg:px-0 lg:pt-4">
            <div className="mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="block mb-4 text-xs md:text-sm text-violet-500 font-medium">
                {t("HeroSection.headline_1")}
              </span>
              <h1 className=" w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl">
                {t("HeroSection.header_1")}
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                {t("HeroSection.description_1")}
              </p>
              <div className="mt-8 ">
                <Link
                  href={`${locale}/recipe`}
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  {t("HeroSection.call_to_action_1")}
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <ShuffleGrid />
        </MaxWidthWrapper>
      </section>

      <section className="bg-violet-100 py-12">
        <div className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h2 className="px-4 py-10 tracking-tight lg:text-center text-balance leading-tight font-semibold text-3xl md:text-5xl text-violet-900">
                {t("ExamplesSection.headline_2")}
              </h2>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/seasoning.jpg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {t(
                        "ExamplesSection.examples_section_content.sub_headers_1.sub_headers_example_1"
                      )}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.header_2.header_example_1"
                      )}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.description_2.description_example_1"
                      )}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href={`${locale}/recipe/r92gce9sqgb0wjl`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        {t("ExamplesSection.call_to_action_2")}

                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/feast.jpeg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {t(
                        "ExamplesSection.examples_section_content.sub_headers_1.sub_headers_example_2"
                      )}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.header_2.header_example_2"
                      )}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.description_2.description_example_2"
                      )}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href={`${locale}/recipe?category=main_course`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        {t("ExamplesSection.call_to_action_2")}
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={700}
                    height={400}
                    src="/sweetrolls.jpg"
                    alt="blog"
                    className="lg:h-48 md:h-36 w-full object-cover object-center "
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {t(
                        "ExamplesSection.examples_section_content.sub_headers_1.sub_headers_example_3"
                      )}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.header_2.header_example_3"
                      )}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {t(
                        "ExamplesSection.examples_section_content.description_2.description_example_3"
                      )}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link
                        href={`${locale}/recipe/lkfcrxn2zur8ivn`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        {t("ExamplesSection.call_to_action_2")}
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className=" mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    alt="The Official Elder Scrolls cookbook"
                    src="/ES_book_cover.jpg"
                    height={1000}
                    width={500}
                    className="absolute inset-0 h-full w-full object-cover rounded-t-2xl lg:rounded-none"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-300">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-4xl font-bold sm:text-3xl">
                    {t("BookSection.header_3")}
                  </h2>

                  <p className="mt-4 text-gray-600">
                    {t("BookSection.sub_header_2")}
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.amazon.com/Elder-Scrolls-Official-Cookbook/dp/B097FCHJG9"
                    className={buttonVariants({
                      size: "lg",
                      className: "mt-8",
                    })}
                  >
                    {t("BookSection.call_to_action_3")}{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
