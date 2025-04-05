export type ColorId = keyof typeof colorMap;

export const colorMap = {
  red: {
    bg: "bg-red-100 dark:bg-red-900/30",
    hover: "hover:bg-red-50 dark:hover:bg-red-900/20",
    text: "text-red-800 dark:text-red-200",
    outline: "outline outline-2 outline-red-500",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    hover: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
    text: "text-orange-800 dark:text-orange-200",
    outline: "outline outline-2 outline-orange-500",
  },
  yellow: {
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    hover: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
    text: "text-yellow-800 dark:text-yellow-200",
    outline: "outline outline-2 outline-yellow-500",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    hover: "hover:bg-green-50 dark:hover:bg-green-900/20",
    text: "text-green-800 dark:text-green-200",
    outline: "outline outline-2 outline-green-500",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    text: "text-blue-800 dark:text-blue-200",
    outline: "outline outline-2 outline-blue-500",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    hover: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
    text: "text-indigo-800 dark:text-indigo-200",
    outline: "outline outline-2 outline-indigo-500",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    hover: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
    text: "text-purple-800 dark:text-purple-200",
    outline: "outline outline-2 outline-purple-500",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    hover: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    text: "text-pink-800 dark:text-pink-200",
    outline: "outline outline-2 outline-pink-500",
  },
  gray: {
    bg: "bg-gray-100 dark:bg-gray-800/30",
    hover: "hover:bg-gray-50 dark:hover:bg-gray-800/20",
    text: "text-gray-800 dark:text-gray-200",
    outline: "outline outline-2 outline-gray-500",
  },
} as const;
