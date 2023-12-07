"use client";
import Image from "next/image";
import styles from "./page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Home() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".box", { opacity: 0, stagger: 0.1 });
    },
    { scope: container }
  ); // <-- magic

  return (
    <main className={styles.main}>
      <div ref={container}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}
