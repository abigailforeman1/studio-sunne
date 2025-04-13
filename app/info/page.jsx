"use client";
import { useState, useEffect } from "react";
import css from "../ui/info.module.css";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.backgroundColor = pathname.includes("info")
      ? "#ed7ba1"
      : "#395fff";

    return () => {
      document.body.style.backgroundColor = "#395fff"; // reset on unmount
    };
  }, [pathname]);

  return <div className={css.info}></div>;
}
