// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › TEAM SECTION
//  Edit team member names, titles, photos, and accent colors here.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  title: string;
  /** Photo URL or local path (e.g. "/team/alex.jpg") */
  image: string;
  /** Hex accent color used for the card background and title badge */
  themeColor: string;
}

// ── Team Members ──────────────────────────────────────────────
// To add a member: append a new object. To reorder: move items.
// Even-indexed cards (0, 2) render flush; odd-indexed (1, 3) are offset downward.
export const teamMembers: TeamMember[] = [
  {
    name: "Indrajeet Sen",
    title: "CEO",
    image: "/about/inder.png",
    themeColor: "#4a88f5",
  },
  {
    name: "Varsha Sinha",
    title: "COO",
    image: "/about/varsha.png",
    themeColor: "#ed6e33",
  },
  {
    name: "Sonika Biltoria ",
    title: "Creative Head",
    image: "/about/sonika.png",
    themeColor: "#6bb88b",
  },
  {
    name: "Priyanshu Bir",
    title: "Technical Head",
    image: "/about/priyanshu.png",
    themeColor: "#a364ff",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const teamHeading = {
  text: "A Dedicated Creative Team That Has Your Back — Always.",
  fontSize: "text-4xl md:text-5xl lg:text-[80px]",
  fontWeight: "font-medium",
  letterSpacing: "tracking-tight",
  color: "#171717",
  colorTailwind: "text-[#171717]",
  lineHeight: "leading-[1.1]",
};

// ── Card Dimensions ───────────────────────────────────────────
export const teamCardStyles = {
  width: "w-full max-w-[340px] lg:max-w-[400px]",
  height: "h-[480px] lg:h-[580px]",
  borderRadius: "24px",
  /** Downward offset applied to odd-indexed columns */
  oddColumnOffset: "sm:mt-12 lg:mt-24",
};

// ── Section Layout ────────────────────────────────────────────
export const teamLayout = {
  background: { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  paddingTop: "pt-24 md:pt-32",
  paddingBottom: "pb-8",
  paddingX: "px-4 md:px-8",
  gridGap: "gap-6 md:gap-8",
} as const;
