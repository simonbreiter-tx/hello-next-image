import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          width={400}
          height={600}
          // fill={true} // Fill the parent element if width and height are unkwown
          sizes="(max-width: 768px) 240px, (max-width: 1200px) 1200px, 100vw"
          src="https://place.simonbreiter.com/400x600.png" alt="placeholder" />
      </main>
    </div>
  );
}
