"use client";

import { workHeroHeading, workHeroLayout } from "@/site-data/work/hero";

export default function WorkHero() {
    return (
        <section className={`relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden ${workHeroLayout.background.tailwind}`}>
            <div className="w-full flex items-center justify-center px-6">
                <h1
                    className={`${workHeroHeading.fontSize} ${workHeroHeading.fontWeight} ${workHeroHeading.letterSpacing} ${workHeroHeading.colorTailwind} text-center ${workHeroHeading.lineHeight}`}
                    style={{ fontFamily: workHeroHeading.fontFamily }}
                >
                    {workHeroHeading.text}
                </h1>
            </div>
        </section>
    );
}
