import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Helper function to get correct asset paths for GitHub Pages
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""
  return `${basePath}${path}`
}