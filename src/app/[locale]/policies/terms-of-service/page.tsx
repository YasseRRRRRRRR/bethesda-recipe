import React from "react";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations("TermsPage");
  return (
    <MaxWidthWrapper className="text-center ">
      <div className="py-20 my-5 mx-0  bg-violet-200 rounded-md">
        <h1 className="text-4xl font-bold mb-8">🍲 {t("header_5")}📜</h1>
        <p className="max-w-prose mx-auto">
          📢 {t("article_1_subheader")}
          <br />
          {t("article_1")}
          <br />
          <br />
          🌐 {t("article_2_subheader")}
          <br />
          {t("article_2")}
          <br />
          <br />
          🛡️ {t("article_3_subheader")} <br />
          {t("article_3")}
          <br />
          <br />
          🖥️ {t("article_4_subheader")} <br />
          {t("article_4")}
          <br />
          <br />
          🤝 {t("article_5_subheader")} <br />
          {t("article_5")}
          <br />
          <br />
          🚫 {t("article_6_subheader")} <br />
          {t("article_6")}
        </p>
      </div>
      <p className="text-gray-400 text-xs py-6">{t("final_sub_header")}</p>
    </MaxWidthWrapper>
  );
};

export default Page;
