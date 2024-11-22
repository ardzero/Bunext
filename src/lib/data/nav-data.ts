import { siteData } from "@/lib/data/siteData";
import { Icons } from "@/components/utils/icons";
export const navData = {
    title: siteData.shortName,
    links: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/pagetr",
        },
    ],
    iconButtons: [
        {
            label: "GitHub",
            href: "https://github.com/darkidop",
            icon: Icons.gitHub,
        },
    ],
};
