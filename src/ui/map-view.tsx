"use client";
import dynamic from "next/dynamic";
const MyMap = dynamic(() => import("../ui/map"), { ssr: false });

export default function MapView() {
  return <MyMap />;
}
