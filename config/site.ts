export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Fabric Fusion",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "All Products",
      href: "/docs",
    },
    {
      label: "Customize",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/blog",
    },
    {
      label: "About Us",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/profile",
    },
    {
      label: "All Products",
      href: "/dashboard",
    },
    {
      label: "Customize",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/team",
    },
    {
      label: "About Us",
      href: "/calendar",
    },
  
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
