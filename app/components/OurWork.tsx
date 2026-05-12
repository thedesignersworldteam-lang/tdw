"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { casesData } from "@/site-data/work/cases";
import { fontSizes } from "@/site-data/tokens";

export default function OurWork() {
  const homepageCases = casesData.filter(c => c.showOnHomepage).slice(0, 6);

  return (
    <section className="w-full bg-[#fdf8f2] flex flex-col items-center py-20">
      <div className="text-center max-w-4xl mb-10 px-2 mt-10">
        <h2 className={`${fontSizes.sectionXL} font-medium tracking-tight text-black mb-6 leading-tight`}>
          Our Work
        </h2>
        <p className={`${fontSizes.description} text-gray-800 max-w-2xl mx-auto leading-relaxed`}>
          A selection of our recent digital and brand experiences.
        </p>
      </div>

      <div className="w-[95vw] md:w-[90vw]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
          {homepageCases.map((caseItem, index) => {
            return (
              <div 
                key={caseItem.id} 
                className="h-[60vh] md:h-[75vh] border-[1px] border-black overflow-hidden"
              >
                <WorkCard caseItem={caseItem} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ caseItem }: { caseItem: typeof casesData[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  const restType = caseItem.homepageMediaRestType || "video";
  const restUrl = caseItem.homepageMediaRestUrl || (restType === "image" ? caseItem.image : caseItem.video);
  
  const hoverType = caseItem.homepageMediaHoverType || "image";
  const hoverUrl = caseItem.homepageMediaHoverUrl || (hoverType === "image" ? caseItem.image : caseItem.video);

  return (
    <Link
      href={`/work/${caseItem.id}`}
      className={`relative w-full h-full group overflow-hidden cursor-pointer block`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rest Media */}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}>
        {restType === "video" ? (
          <video src={restUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <Image src={restUrl} alt={caseItem.imageAlt || "Work Case"} fill className="object-cover" />
        )}
      </div>

      {/* Hover Media */}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
        {hoverType === "video" ? (
          <video src={hoverUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <Image src={hoverUrl} alt={caseItem.imageAlt || "Work Case"} fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
        )}
      </div>
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col">
          <div className={`${fontSizes.label} text-white/80 font-medium mb-1 tracking-widest`}>{caseItem.serial}</div>
          <h3 className="text-white text-2xl md:text-3xl lg:text-3xl font-medium tracking-tight uppercase">{caseItem.homepageTitle || caseItem.title}</h3>
          {(caseItem.homepageDescription || caseItem.description) && (
            <p className="text-white/80 mt-2 text-base md:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-[90%]">
              {caseItem.homepageDescription || caseItem.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
