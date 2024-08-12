import React from "react";
import PropTypes from "prop-types";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer = async ({ lang }: { lang: string }) => {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground ">
              &copy;
              {new Date().getFullYear()} {t("copy_right")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href={`/${lang}/policies/terms-of-service`}
                className="text-sm text-muted-foreground  hover:text-gray-600"
              >
                {t("terms")}
              </Link>
              <Link
                href={`/${lang}/policies/privacy-policy`}
                className="text-sm text-muted-foreground  hover:text-gray-600"
              >
                {t("privacy")}
              </Link>
              <Link
                href={`/${lang}/recipe/isycr5h0s0mqvw0`}
                className="text-sm text-muted-foreground  hover:text-gray-600"
              >
                {t("cookie")}
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
