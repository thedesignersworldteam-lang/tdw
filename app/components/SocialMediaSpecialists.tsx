"use client";

import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import {
    socialMediaImages,
    socialMediaCopy,
    socialMediaLayout,
    socialMediaScrollCheckpoints,
    type StackImage,
} from "@/site-data/homepage/social-media-specialists";

/* ──────────────────────────────────────────────────────────────
 *  Card with timed animation (dot → full image)
 *  NOT scroll-tracked — fires once when triggered.
 * ────────────────────────────────────────────────────────────── */
function CardItem({
    item,
    visible,
}: {
    item: StackImage;
    visible: boolean;
}) {
    const { rotate } = item;

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    className="absolute inset-0 m-auto overflow-hidden"
                    initial={{
                        opacity: 0,
                        y: "35vh",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        scale: 1,
                        rotate: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: "0%",
                        width: "100%",
                        height: "100%",
                        borderRadius: "20px",
                        scale: 1,
                        rotate,
                    }}
                    exit={{
                        opacity: 0,
                        y: "35vh",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 1.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ backgroundColor: item.placeholderColor }}
                >
                    {item.mediaType === "video" ? (
                        <motion.video
                            src={item.src}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.15 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.15 }}
                            transition={{
                                duration: 1.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <motion.img
                            src={item.src}
                            alt={item.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.15 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.15 }}
                            transition={{
                                duration: 1.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ──────────────────────────────────────────────────────────────
 *  Main section
 * ────────────────────────────────────────────────────────────── */
export default function SocialMediaSpecialists() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.0001,
    });

    // Track which cards are visible (one at a time, cumulative)
    const [visibleCards, setVisibleCards] = useState<boolean[]>(
        socialMediaImages.map(() => false)
    );

    const { card1, card2, card3 } = socialMediaScrollCheckpoints;
    const thresholds = [card1.start, card2.start, card3.start];

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        setVisibleCards((prev) => {
            let changed = false;
            const next = [...prev];

            for (let i = 0; i < thresholds.length; i++) {
                const shouldShow = latest >= thresholds[i];
                if (next[i] !== shouldShow) {
                    next[i] = shouldShow;
                    changed = true;
                }
            }

            return changed ? next : prev;
        });
    });

    // Right panel appears immediately as section enters
    const rightPanelX       = useTransform(smoothProgress, [0, 0.15], [100, 0]);
    const rightPanelOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

    const { heading, body, bodyStyles } = socialMediaCopy;

    return (
        <section
            ref={containerRef}
            className={`w-full relative bg-transparent ${socialMediaLayout.scrollHeight} -mt-[60vh] z-20`}
        >
            <div
                className={`sticky top-0 h-screen w-full flex ${socialMediaLayout.stickyPadding} overflow-hidden`}
            >
                <div
                    className={`${socialMediaLayout.maxWidth} w-full mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-10 md:gap-12 lg:gap-16`}
                >
                    {/* Left: Card stack */}
                    <div
                        className={`${socialMediaLayout.imageSide.width} flex justify-center md:justify-start pl-0 md:pl-4 mb-6 md:mb-0 relative py-12 md:py-0`}
                    >
                        <div
                            className={`relative w-full md:w-[85%] ${socialMediaLayout.imageSide.imageMaxWidth} ${socialMediaLayout.imageSide.imageHeight} flex items-center justify-center -translate-y-[4vh] md:-translate-y-[12vh]`}
                        >
                            {socialMediaImages.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="absolute inset-0"
                                    style={{ zIndex: index + 1 }}
                                >
                                    <CardItem
                                        item={item}
                                        visible={visibleCards[index]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div
                        className={`${socialMediaLayout.contentSide.width} md:ml-auto flex flex-col justify-center py-4 md:py-8 text-center md:text-left items-center md:items-start relative z-10 lg:pl-10`}
                    >
                        <motion.div
                            style={{ x: rightPanelX, opacity: rightPanelOpacity }}
                            className="max-w-[650px]"
                        >
                            <h2
                                className={`${heading.fontSize} ${heading.fontWeight} ${heading.letterSpacing} ${heading.lineHeight} ${heading.colorTailwind} ${heading.marginBottom} ${heading.textTransform}`}
                                style={{ fontFamily: heading.fontFamily }}
                            >
                                {heading.text}
                            </h2>
                            <div
                                className={`${bodyStyles.fontSize} ${bodyStyles.colorTailwind} ${bodyStyles.lineHeight} ${bodyStyles.fontWeight} flex flex-col gap-4`}
                            >
                                {body.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
