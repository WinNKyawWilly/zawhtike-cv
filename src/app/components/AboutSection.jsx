"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Paper Crafting</li>
        <li>Color Theory</li>
        <li>Art Trainings</li>
        <li>Visual Documentations</li>
        <li>Creative Mindset</li>
      </ul>
    ),
  },
  {
    title: "Collaborations",
    id: "collaborations",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "media",
    id: "media",
    content: (
      <ul className="list-disc pl-2">
        <li>Myanmar Celebrities</li>
        <li>DVB TV</li>
        <li>Bello ဘယ်လို</li>
        <li>ပေါ်ပြူလာ</li>
        <li>စံတော်ချိန်</li>
        <li>MN TV</li>
      </ul>
    ),
  },
  {
    title: "exibitions",
    id: "exibitions",
    content: (
      <ul className="list-disc pl-2">
        <li>2022 Paper Quilling Art Exibition</li>
        <li>2023 Paper Quilling Art Exibition</li>
        <li>Women Clutch Quilling</li>
        <li>Paper Quilling Workshops</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <Image src="/images/about-profile.jpg" width={400} height={200} />
          <br/>
          
            <p className="text-base lg:text-lg">
              I'm <span class="highlight">Zaw Htike</span>, a paper quilling artist from Myanmar. Since 2016, I've created colorful art by curling and shaping paper.
          </p>
          <p className="text-base lg:text-lg">
              My work has been in shows, and I teach others this unique skill. I love working with different groups to share my art.
          </p>
          <p className="text-base lg:text-lg">
              I'm always trying new ideas to make better art and inspire people. <span class="highlight">Choose me for your project</span>, and together we'll make something special with paper quilling.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("media")}
              active={tab === "media"}
            >
              {" "}
              Media mentions{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("exibitions")}
              active={tab === "exibitions"}
            >
              {" "}
              Exibitions{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
