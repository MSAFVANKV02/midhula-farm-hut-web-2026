import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppLink(
  productName?: string,
  quantity = "1 Pair",
  customMessage?: string
): string {
  const phone = "918129120437";
  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (productName) {
    message = `Hi Midhun! 👋 I saw *${productName}* (${quantity}) on your Midhula Farm Hut website. I would like to check availability and place an order. Could you share details & shipping to my pincode?`;
  } else {
    message = `Hi Midhun! 👋 I visited the Midhula Farm Hut website and would like to inquire about your current live stock and safe all-India delivery.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
