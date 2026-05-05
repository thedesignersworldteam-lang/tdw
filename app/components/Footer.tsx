"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bookmark } from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";
import { motion, useSpring, useMotionValue } from "framer-motion";
import GetStartedModal from "./GetStartedModal";
import { footerCTA, footerBackground, footerSocialLinks, footerSocialCardStyles, type SocialLink } from "@/site-data/shared/footer";

// ── Icon resolver (keeps JSX out of site-data) ──────────────────
function SocialIcon({ iconKey }: { iconKey: SocialLink["iconKey"] }) {
    const props = { width: "24", height: "24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" };
    if (iconKey === "instagram") return (
        <svg {...props} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
    );
    if (iconKey === "linkedin") return (
        <svg {...props} viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    );
    if (iconKey === "dribbble") return (
        <svg {...props} viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.03-.138-1.839-8.499-8.087-9.427-.153.284-.313.582-.48.894 4.636 1.348 6.425 4.257 6.515 4.41l1.096-1.542c-.894-1.396-2.585-3.326-5.948-4.464-1.468-4.524-3.176-7.859-3.238-7.986L10.34.821c.063.13 1.69 3.322 3.125 7.643-4.103.744-8.038.563-8.243.551L5.05 10.74c.205.012 3.847.165 7.697-.478 1.488 2.87 2.49 5.86 2.531 5.986l1.636-.938c-.044-.13-1.034-3.08-2.45-5.83 4.887-1.328 6.822-4.148 6.862-4.21z" /></svg>
    );
    if (iconKey === "substack") return (
        <svg {...props} viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
    );
    if (iconKey === "awwwards") return (
        <svg {...props} viewBox="0 0 24 24"><path d="M23.142 4.174L18.86 19.826h-3.667l-2.811-10.24-2.812 10.24H5.904L1.619 4.174h3.667l2.571 10.581 2.812-10.581h3.667l2.811 10.581 2.572-10.581h3.423z" /></svg>
    );
    // clutch
    return (
        <svg {...props} viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a7.2 7.2 0 110 14.4A7.2 7.2 0 0112 4.8zm0 2.4a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 2.4a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z" /></svg>
    );
}

function SocialCard({ social, isLast }: { social: SocialLink, isLast: boolean }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        // center the orange bubble (size 112px => half is 56px)
        x.set(e.clientX - rect.left - 56);
        y.set(e.clientY - rect.top - 56);
    };

    return (
        <Link
            ref={cardRef}
            href={social.href}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex flex-col justify-between items-start ${footerSocialCardStyles.padding} ${footerSocialCardStyles.height} text-[#222] ${footerSocialCardStyles.hoverBackground} transition-colors group relative overflow-hidden ${
                !isLast ? 'border-r border-black/10' : ''
            }`}
        >
            {/* Tracking orange bubble */}
            <motion.div
                style={{ x: xSpring, y: ySpring }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            className={`absolute top-0 left-0 ${footerSocialCardStyles.bubble.size} ${footerSocialCardStyles.bubble.borderRadius} bg-[${footerSocialCardStyles.bubble.background}] flex items-center justify-center pointer-events-none z-10 shadow-lg [&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-white [&>svg]:fill-none [&>span]:text-3xl [&>span]:text-white`}
            >
                <div className="text-white [&>*]:text-white">
                    <SocialIcon iconKey={social.iconKey} />
                </div>
            </motion.div>

            {/* Top Box: Normal Icon -> Fades to Text */}
            <div className="relative z-20 w-full h-8">
                <div className="absolute inset-0 text-[#333] transition-all duration-300 origin-left group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">
                    <SocialIcon iconKey={social.iconKey} />
                </div>
                
                {/* Hover Text */}
                <div className="absolute inset-0 text-xl font-medium tracking-tight text-black opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
                    {social.hoverText}
                </div>
            </div>
            
            {/* Bottom Label */}
            <span className={`relative z-20 ${footerSocialCardStyles.label.fontSize} ${footerSocialCardStyles.label.fontWeight} ${footerSocialCardStyles.label.letterSpacing} uppercase transition-colors duration-300`}>
                {social.name}
            </span>
        </Link>
    );
}

export default function Footer() {
    const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);


    return (
        <footer className={`w-full relative ${footerBackground.tailwind} overflow-hidden pt-10 pb-8 border-t border-black/5`}>
            
            {/* Top Section Wrapper - Break out to 100vw for background, keep content padded */}
            <div 
                className={`relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-12 pb-16 mb-6 md:mb-10 px-4 flex justify-center ${footerBackground.tailwind}`}
            >
                {/* High-performance physics Canvas dot pattern */}
                <InteractiveDotGrid />

                {/* Actual Constraint Wrapper for Content */}
                <div className="relative z-10 w-full max-w-[1440px] px-0 md:px-4 flex flex-col md:flex-row justify-between items-start">
                    {/* Left: Let's Jam */}
                    <div className="flex flex-col relative z-10">
                        <h2
                            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-[#1a1a1a] leading-[1.1] mb-10 md:mb-0 max-w-4xl text-balance`}
                            style={{ fontFamily: footerCTA.headlineFontFamily }}
                        >
                            Let&apos;s Build Something Extraordinary Together.
                        </h2>
                    </div>

                    {/* Right: Huge Button */}
                    <div className="relative z-10 flex items-start justify-end w-full md:w-auto mt-4 md:pt-8 pr-4 md:pr-0 self-start">
                        <button 
                            onClick={() => setIsGetStartedOpen(true)}
                            className="group bg-[#1a1a1a] text-white px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center gap-4 hover:bg-black transition-all hover:scale-[1.02] shadow-xl w-full md:w-auto"
                        >
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 font-light text-white group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
                            <span className="text-2xl md:text-3xl font-normal tracking-wide">Get Started</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                


                {/* Bottom Section: Social Links Grid */}
                {/* Horizontal scrolling wrapper on mobile to prevent squishing */}
                <div className="w-full overflow-x-auto pb-4 mt-12 md:mt-20 hide-scrollbar">
                    <div className="flex flex-row md:grid md:grid-cols-6 min-w-[900px] md:min-w-full rounded-2xl md:rounded-[24px] overflow-hidden border border-black/10 bg-[#fdf8f2]/50 backdrop-blur-sm shadow-sm">
                        {footerSocialLinks.map((social, idx) => (
                            <SocialCard key={social.name} social={social} isLast={idx === footerSocialLinks.length - 1} />
                        ))}
                    </div>
                </div>

            </div>

            {/* Global style to hide scrollbar just for the grid wrapper */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>

            {/* Get Started Modal Overlay */}
            <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
        </footer>
    );
}
