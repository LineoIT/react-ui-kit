import React from "react";

export type Variant = "info" | "error" | "warning" | "success";

export function useAlertTheming(variant?: Variant) {
  return React.useMemo(() => {
    switch (variant) {
      case "error":
        return "bg-rose-100 text-rose-700  shadow-rose-500/20";
      case "success":
        return "bg-green-100 text-green-700  shadow-green-500/20";
      case "warning":
        return "bg-amber-100 text-amber-700  shadow-amber-500/20";
      default:
        return "bg-sky-100 text-sky-700  shadow-sky-500/20";
    }
  }, [variant]);
}

export function useAlertAccentTheming(variant?: Variant) {
  return React.useMemo(() => {
    switch (variant) {
      case "error":
        return "border-rose-200 hover:bg-rose-200";
      case "success":
        return "border-green-200 hover:bg-green-200";
      case "warning":
        return "border-amber-200 hover:bg-amber-200";
      default:
        return "border-info-200 hover:bg-info-200";
    }
  }, [variant]);
}
