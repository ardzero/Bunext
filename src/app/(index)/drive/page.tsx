import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getCustomMetaData } from "@/lib/config/siteConfig";
export const metadata: Metadata = getCustomMetaData({
  title: "Vsiting card drive",
});

export default function Register() {
  redirect(
    "https://drive.google.com/drive/folders/19eifgiknyWNmeNq8KkvieSyhsM75f4j4?usp=sharing"
  );
}
