"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { impactSectionData } from "@/site-data/homepage/impact-section";

export default function ImpactSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { animation, outerCircle, innerCircle, arrow } = impactSectionData;

    const rotate = useTransform(scrollYProgress,
        [animation.outerRotation.from, animation.outerRotation.to],
        [0, outerCircle.rotationDegrees]
    );

    const textY = useTransform(scrollYProgress,
        [animation.textSlideUp.start, animation.textSlideUp.end],
        [animation.textSlideYPx.from, animation.textSlideYPx.to]
    );

    // clipPath crops the pill and arrow upward as the user scrolls — intentional design effect
    const clipProgress = useTransform(scrollYProgress,
        [animation.textSlideUp.start, animation.textSlideUp.end],
        [0, 100]
    );
    const textClipPath = useMotionTemplate`inset(${clipProgress}% 0% 0% 0%)`;

    const innerScale = useTransform(scrollYProgress,
        [animation.innerScale.start, animation.innerScale.end],
        [1, innerCircle.maxScale]
    );

    return (
        <section className={`relative w-full ${impactSectionData.background.tailwind} z-10 overflow-x-clip mt-16 md:mt-32`}>
            <div ref={containerRef} className={`relative ${impactSectionData.scrollHeight} w-full ${impactSectionData.topPadding}`}>
                <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
                    {/*
                     * KEY FIX: The static wrapper owns `rounded-full overflow-hidden`.
                     * The animated child only does `rotate` — no overflow/border-radius
                     * on the same element, which previously forced the browser to
                     * re-clip (paint) on every frame instead of compositing.
                     */}
                    <div className={`relative mt-32 md:mt-52 ${outerCircle.width} ${outerCircle.maxWidth} aspect-square flex items-center justify-center shrink-0 -translate-y-[7.5%]`}>
                        {/* Static wrapper for clipping the image to avoid repaint */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            {/* Outer rotating circle — transform-only, no clip on this element */}
                            <motion.div
                                style={{ rotate, willChange: "transform" }}
                                className="absolute inset-0 w-full h-full origin-center"
                            >
                                <img
                                    src={outerCircle.backgroundImage.src}
                                    alt={outerCircle.backgroundImage.alt}
                                    className={`w-full h-full object-cover ${outerCircle.backgroundImage.opacity}`}
                                    style={{ willChange: "transform" }}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>

                        {/* Inner expanding circle */}
                        <motion.div
                            style={{
                                scale: innerScale,
                                backgroundColor: innerCircle.backgroundColor,
                                width:  `${innerCircle.startSizePercent}%`,
                                height: `${innerCircle.startSizePercent}%`,
                                willChange: "transform",
                            }}
                            className="absolute z-10 rounded-full origin-center"
                        />

                        {/* Text overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <motion.div
                                style={{ y: textY, willChange: "transform" }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Orange pill — clipped upward as user scrolls */}
                                <motion.div
                                    style={{ clipPath: textClipPath }}
                                    className={`${impactSectionData.tagline.backgroundTailwind} ${impactSectionData.tagline.textColor} ${impactSectionData.tagline.paddingX} ${impactSectionData.tagline.paddingY} ${impactSectionData.tagline.borderRadius} ${impactSectionData.tagline.fontSize} ${impactSectionData.tagline.fontWeight} ${impactSectionData.tagline.letterSpacing} ${impactSectionData.tagline.whiteSpace}`}
                                >
                                    {impactSectionData.tagline.text}
                                </motion.div>

                                {/* Arrow — clipped in sync with pill */}
                                <motion.div style={{ clipPath: textClipPath }} className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-8 md:mt-12 flex justify-center">
                                    <svg
                                        width={arrow.width}
                                        height={arrow.height}
                                        viewBox="0 0 30 70"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0L15 68M15 68L2 55M15 68L28 55"
                                            stroke={arrow.stroke}
                                            strokeWidth={arrow.strokeWidth}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
