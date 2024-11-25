import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const isSSR = typeof window === "undefined";
export const placeholder = (width: number, height: number) =>
	`https://v0.dev/placeholder.svg?height=${height}&width=${width}`;

// converts smv to base64
export const svgToBase64 = (str: string) =>
	isSSR ? Buffer.from(str).toString("base64") : window.btoa(str);

// returns a promise that resolves after a given number of milliseconds
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// contaverts text to normal case
export function convertToNormalCase(inputString: string | undefined) {
	if (!inputString) return inputString;
	const splittedString = inputString.split(".").pop();
	const string = splittedString || inputString;
	const words = string.replace(/([a-z])([A-Z])/g, "$1 $2").split(/_|\s+/);
	const capitalizedWords = words.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1),
	);
	return capitalizedWords.join(" ");
}

// capitalize the first letter of a string
export function capitalizeFirstLetter(
	string: string | undefined,
): string | undefined {
	if (!string) return string;
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// string shortner
export function truncateString(
	str: string | undefined,
	maxStrLength: number,
): string {
	if (!str) return "";
	if (str.length > maxStrLength) return `${str.slice(0, maxStrLength)}...`;
	return str;
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

// simple hashing algorithm (not secure for password hashing)
export function murmurhash(key: string) {
	const remainder = key.length & 3;
	const bytes = key.length - remainder;
	const c1 = 0xcc9e2d51;
	const c2 = 0x1b873593;

	let h1 = 0;
	let i = 0;

	while (i < bytes) {
		let k1 =
			(key.charCodeAt(i) & 0xff) |
			((key.charCodeAt(++i) & 0xff) << 8) |
			((key.charCodeAt(++i) & 0xff) << 16) |
			((key.charCodeAt(++i) & 0xff) << 24);
		++i;

		k1 =
			((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 =
			((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;

		h1 ^= k1;
		h1 = (h1 << 13) | (h1 >>> 19);
		const h1b =
			((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
		h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
	}

	let k2 = 0;

	switch (remainder) {
		case 3:
			k2 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		// falls through
		case 2:
			k2 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		// falls through
		case 1:
			k2 ^= key.charCodeAt(i) & 0xff;

			k2 =
				((k2 & 0xffff) * c1 + ((((k2 >>> 16) * c1) & 0xffff) << 16)) &
				0xffffffff;
			k2 = (k2 << 15) | (k2 >>> 17);
			k2 =
				((k2 & 0xffff) * c2 + ((((k2 >>> 16) * c2) & 0xffff) << 16)) &
				0xffffffff;
			h1 ^= k2;
	}

	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 =
		((h1 & 0xffff) * 0x85ebca6b +
			((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) &
		0xffffffff;
	h1 ^= h1 >>> 13;
	h1 =
		((h1 & 0xffff) * 0xc2b2ae35 +
			((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) &
		0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}

export const shimmer = (w: number | `${number}`, h: number | `${number}`) => {
	const color = { center: "#efefef", side: "#dfdfdf" };
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


export function cleanSrc(src: string): string {
	if (src.includes('/public/'))
		return src.replace('/public/', '/');
	return src;
}


export const encodeBase64 = (str: string): string => {
	return encodeURIComponent(Buffer.from(str).toString('base64'));
};

export const decodeBase64 = (encodedStr: string): string => {
	try {
		return Buffer.from(decodeURIComponent(encodedStr), 'base64').toString('utf-8');
	} catch (error) {
		console.error('Error decoding base64 string:', error);
		return '';
	}
};
