// ─────────────────────────────────────────────────────────────
//  WORK PAGE › CASES DATA
//  Edit project titles, descriptions, videos, and images here.
//  Each case is shown in the CasesScroller and the OurWork preview.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface CaseStudy {
  /** URL slug used in /work/[slug] routing */
  id: string;
  /** Display serial number shown on the scroller (e.g. "01 /") */
  serial: string;
  title: string;
  /** Short description shown at the bottom of the scroller layer */
  description: string;
  /** Full body copy shown on the individual case page (Simple Text Section) */
  fullDescription: string;
  /** Body paragraph shown in the Overview section */
  overviewDescription?: string;
  /** Background video — shown in the scroller and OurWork preview (muted autoplay) */
  video: string;
  /** Still image — shown on hover in the OurWork preview */
  image: string;
  /** Alt text for the still image */
  imageAlt: string;
  /** Whether the background should render the image or video */
  backgroundType?: "image" | "video";
  /** Array of strings for strategic objectives list */
  strategicObjectives?: string[];
  /** First full-width gallery image */
  galleryImage1?: string;
  /** Second full-width gallery image */
  galleryImage2?: string;
  /** Left image in the split showcase */
  showcaseImageLeft?: string;
  /** Right image in the split showcase */
  showcaseImageRight?: string;

  /** Homepage specific overrides */
  homepageTitle?: string;
  homepageDescription?: string;
  homepageMediaRestType?: "image" | "video";
  homepageMediaRestUrl?: string;
  homepageMediaHoverType?: "image" | "video";
  homepageMediaHoverUrl?: string;
  /** Flag to show this case on the homepage (up to 6) */
  showOnHomepage?: boolean;
}

// ── Cases ─────────────────────────────────────────────────────
// To add a case: append a new object and update `serial` accordingly.
// To reorder: move items (the scroller renders them in array order).
export const casesData: CaseStudy[] = [
  {
    id: "icmr",
    serial: "01 /",
    title: "ICMR Micro Website",
    description: "Harnessing AI to transform how the art world engages.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    overviewDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "/work/icmr/header.png",
    imageAlt: "Art Basel project still",
    backgroundType: "image",
    strategicObjectives: [
      "Develop a responsive and highly visual platform that showcases the global scale of Art Basel.",
      "Integrate ticketing, virtual tours, and live-streaming of VIP events seamlessly.",
      "Ensure the platform remains scalable to handle massive traffic spikes during peak fair days."
    ],
    galleryImage1: "/work/icmr/icmr2.png",
    galleryImage2: "/work/icmr/icmr3.jpg",
    showcaseImageLeft: "/work/icmr/icmr4.jpg",
    showcaseImageRight: "/work/icmr/icmr3.jpg",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "/work/icmr/icmr2.png",
    homepageMediaHoverType: "image",
    homepageMediaHoverUrl: "/work/icmr/icmr2.png",
    showOnHomepage: true,
  },
  {
    id: "jeap",
    serial: "02 /",
    title: "JEAP Website",
    description: "Reimagining creative boundaries with immersive digital experiences.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    overviewDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/2882118/2882118-uhd_2560_1440_24fps.mp4",
    image: "/work/jeap/header.jpg",
    imageAlt: "Frieze LA project still",
    backgroundType: "image",
    strategicObjectives: [
      "Create an immersive digital map and exhibitor directory for quick on-site navigation.",
      "Build a minimalist yet bold design system that aligns with Frieze's brand identity.",
      "Enhance engagement with editorial content and video highlights from the fair."
    ],
    galleryImage1: "/work/jeap/jeap2.jpg",
    galleryImage2: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2564&auto=format&fit=crop",
    showcaseImageLeft: "/work/jeap/jeap3.jpg",
    showcaseImageRight: "/work/jeap/jeap4.jpg",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "/work/jeap/header.jpg",
    homepageMediaHoverType: "image",
    homepageMediaHoverUrl: "/work/jeap/jeap2.jpg",
    showOnHomepage: true,
  },
  {
    id: "Addis",
    serial: "03 /",
    title: "Addis",
    description: "Connecting Africa's leaders, communities, and health institutions through one powerful digital voice.",
    fullDescription: "The Addis Declaration on Immunisation is a continental commitment signed by African Union Heads of State to achieve universal immunisation access by 2030. We were tasked with building a website that brings this declaration to life, makes its progress measurable, and gives stakeholders, governments, and the public a single trusted source for updates, reports, and resources.",
    overviewDescription: "The Addis Declaration on Immunisation is a continental commitment signed by African Union Heads of State to achieve universal immunisation access by 2030. We were tasked with building a website that brings this declaration to life, makes its progress measurable, and gives stakeholders, governments, and the public a single trusted source for updates, reports, and resources.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "/work/addis/header.png",
    imageAlt: "Tate Modern project still",
    backgroundType: "image",
    strategicObjectives: [
      "Build a centralised digital hub that tracks every country's progress on the 10 ADI immunisation pledges.",
      "Design an accessible, multilingual platform that informs governments, health workers, and the public alike.",
      "Optimise content delivery for fast, reliable access across low bandwidth regions and mobile first audiences."
    ],
    galleryImage1: "/work/addis/addis_1920X720.jpg",
    galleryImage2: "",
    showcaseImageLeft: "/work/addis/addis-1.png",
    showcaseImageRight: "/work/addis/addis-2.png",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "/work/addis/header.png",
    homepageMediaHoverType: "image",
    homepageMediaHoverUrl: "/work/addis/header.png",
    showOnHomepage: true,
  },
  {
    id: "who",
    serial: "04 /",
    title: "WHO Report Design",
    description: "Connecting legacy art institutions with modern sensory technologies.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    overviewDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "/work/who/header.png",
    imageAlt: "Tate Modern project still",
    backgroundType: "image",
    strategicObjectives: [
      "Modernize the museum's digital archive, making it fully searchable and accessible.",
      "Implement a sleek, modern UI that elevates the user's focus on the artwork itself.",
      "Optimize the backend for fast delivery of high-resolution image assets globally."
    ],
    galleryImage1: "/work/who/who2.png",
    galleryImage2: "",
    showcaseImageLeft: "/work/who/who3.jpg",
    showcaseImageRight: "/work/addis/addis-2.png",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "/work/addis/addis_1920X1080.jpg",
    homepageMediaHoverType: "video",
    homepageMediaHoverUrl: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    showOnHomepage: true,
  },
  {
    id: "undp",
    serial: "05 /",
    title: "UNDP ",
    description: "Connecting legacy art institutions with modern sensory technologies.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    overviewDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "/work/undp/header.png",
    imageAlt: "Tate Modern project still",
    backgroundType: "image",
    strategicObjectives: [
      "Modernize the museum's digital archive, making it fully searchable and accessible.",
      "Implement a sleek, modern UI that elevates the user's focus on the artwork itself.",
      "Optimize the backend for fast delivery of high-resolution image assets globally."
    ],
    galleryImage1: "/work/undp/undp2.png",
    galleryImage2: "",
    showcaseImageLeft: "/work/undp/undp3.jpg",
    showcaseImageRight: "/work/undp/undp4.png",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "/work/addis/addis_1920X1080.jpg",
    homepageMediaHoverType: "video",
    homepageMediaHoverUrl: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    showOnHomepage: true,
  
  },
];
