// This file contains additional responsive fixes that will be imported in various components

// Responsive utility classes
export const responsiveContainer = "px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-7xl"

// Responsive grid layouts
export const responsiveGrid = {
  // 1 column on mobile, 2 on tablet, 3 on desktop, 4 on large desktop
  fourColumns: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8",

  // 1 column on mobile, 2 on tablet, 3 on desktop
  threeColumns: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8",

  // 1 column on mobile, 2 on desktop
  twoColumns: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8",
}

// Responsive text sizes
export const responsiveText = {
  heading1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
  heading2: "text-2xl sm:text-3xl md:text-4xl font-bold",
  heading3: "text-xl sm:text-2xl md:text-3xl font-bold",
  paragraph: "text-base sm:text-lg",
}

// Responsive spacing
export const responsiveSpacing = {
  section: "py-12 sm:py-16 md:py-20",
  sectionSmall: "py-8 sm:py-12 md:py-16",
  marginBottom: "mb-6 sm:mb-8 md:mb-12",
}

// Responsive flex layouts
export const responsiveFlex = {
  centerColumn: "flex flex-col items-center justify-center",
  centerRow: "flex flex-row items-center justify-center",
  spaceBetween: "flex flex-col md:flex-row items-center justify-between",
}
