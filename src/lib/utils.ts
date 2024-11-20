import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isSSR = typeof window === 'undefined';

// converts smv to base64
export const svgToBase64 = (str: string) =>
  isSSR ? Buffer.from(str).toString('base64') : window.btoa(str);

// contaverts text to normal case
export function convertToNormalCase(inputString: string | undefined) {
  if (!inputString) return inputString;
  const splittedString = inputString.split('.').pop();
  const string = splittedString || inputString;
  const words = string.replace(/([a-z])([A-Z])/g, '$1 $2').split(/_|\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalizedWords.join(' ');
}

// capitalize the first letter of a string
export function capitalizeFirstLetter(
  string: string | undefined
): string | undefined {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// string shortner
export function truncateString(str: string | undefined, maxStrLength: number): string {
  if (!str) return "";
  if (str.length > maxStrLength) {
    return str.slice(0, maxStrLength) + "...";
  } else {
    return str;
  }
}

// qr code img generator, default size is 250x250px
export function qrCodeGen(link: string, size?: string): string {
  const qrValue = link;
  const qrSize = size || "250";
  return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrValue}`;
}

// check if email is valid and returns true or false
export function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// uniq code generator that takes in current time
export const generateUniqueCode = (): string | null => {
  const currentTime = new Date();
  const uniqueCode =
    Math.random().toString(36).substring(2, 14) +
    currentTime
      .toISOString()
      .replace(/[-:.TZ]/g, Math.random().toString(32).substring(2, 3)) +
    Math.random().toString(36).substring(2, 14) +
    Math.random().toString(32).substring(2, 8) +
    Math.random().toString(36).substring(2, 14);
  return uniqueCode?.toString();

};


export const shimmer = (w: number | `${number}`, h: number | `${number}`) => {
  const color = { center: '#efefef', side: '#dfdfdf' };
  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${color.side}" offset="20%" />
      <stop stop-color="${color.center}" offset="50%" />
      <stop stop-color="${color.side}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${color.side}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
};


