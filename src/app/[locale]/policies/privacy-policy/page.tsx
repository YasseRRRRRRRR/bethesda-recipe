import React from "react";
import MaxWidthWrapper from "@/components/maxWidthWrapper";

const Page = () => {
  return (
    <MaxWidthWrapper className="text-center">
      <div className="py-20 my-5 mx-0  bg-violet-200 rounded-md  ">
        <h1 className="md:text-5xl sm:text-4xl text-3xl  font-bold mb-8">
          🏞️ Fantazy Recipe Privacy Policy 📜
        </h1>
        <p className="max-w-prose mx-auto">
          📢 Introduction
          <br />
          Welcome, adventurous cook and Elder Scrolls enthusiast, to our digital
          kitchen—a sanctuary dedicated to the culinary wonders of Tamriel and
          beyond. This Privacy Policy is crafted not with the intent to generate
          wealth, but as a heartfelt ode to the rich tapestry of flavors and
          stories woven into &ldquo;The Elder Scrolls: The Official
          Cookbook.&ldquo;
          <br />
          <br />
          🗺️ What Information Do We Collect?
          <br />
          As you navigate through our virtual realms, we collect minimal
          information necessary to ensure a smooth and enjoyable journey. This
          includes:
          <br />
          - Cookies: To personalize your visit and remember your preferences.
          <br />
          - IP Address: To ensure a safe and secure environment for all
          adventurers. We promise, your path through our digital domains will
          remain yours alone, untouched by prying eyes.
          <br />
          <br />
          🔒 How Do We Protect Your Data? <br />
          Guardians of the culinary secrets of Tamriel, we treat your data with
          the utmost reverence. We employ state-of-the-art encryption methods
          and strict access controls to safeguard your information. Rest
          assured, your journey through our pages is protected by the ancient
          magics of cybersecurity.
          <br />
          <br />
          🔄 Do We Share Your Information?
          <br />
          Your secrets are safe with us. We do not sell, trade, or rent your
          personal information to others. Your trust is our greatest treasure,
          and we guard it fiercely, much like the ancient artifacts of Tamriel.
          <br />
          <br />
          🌟 Conclusion <br />
          This Privacy Policy serves as a declaration of our commitment to you,
          our fellow travelers in the culinary cosmos of the Elder Scrolls. It
          is a pledge that, just as we honor the traditions and lore of Tamriel,
          we honor your trust and privacy. May your culinary quests be filled
          with joy, and may your taste buds forever be enchanted by the flavors
          of the Elder Scrolls universe.
          <br />
          <br />
        </p>
      </div>
      <p className="text-gray-400 text-xs py-6">
        all this jargon was generated with AI, you didn&apos;t think I would sit
        here and write all of this for you
      </p>
    </MaxWidthWrapper>
  );
};

export default Page;
