"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/link/all");
  }, [router]);

  return null;
}
