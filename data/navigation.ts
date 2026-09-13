export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface BrandConfig {
  name: string;
  role: string;
  monogram: string;
  availableForWork: boolean;
  statusText: string;
}

export interface CtaConfig {
  label: string;
  href: string;
  subtext?: string;
}

export const BRAND_CONFIG: BrandConfig = {
  name: "Alex Morgan",
  role: "Full-Stack Developer & SEO",
  monogram: "AM",
  availableForWork: true,
  statusText: "Available for new projects",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "expertise", label: "Expertise", href: "#expertise" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "blog", label: "Blog", href: "#blog" },
];

export const CTA_CONFIG: CtaConfig = {
  label: "Let's Talk",
  href: "#contact",
  subtext: "Book a 15-min discovery call",
};
