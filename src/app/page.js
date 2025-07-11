'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Feedback from "@/components/Feedback";
import Link from 'next/link'
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
      <Link href={'/dashboard'}>View Feedbacks</Link>
      <Feedback/>
        {/* <Link href='/home'>Go to home</Link> */}
      </main>
      
    </div>
  );
}
