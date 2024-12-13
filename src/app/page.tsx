import Image, { getImageProps } from 'next/image'
import styles from "./page.module.css";

const CustomImage = () => {
  const common = { alt: 'Art Direction Example', sizes: '100vw' }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 400,
    height: 600,
    quality: 80,
    src: "https://place.simonbreiter.com/400x600.png"
  })
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 200,
    height: 200,
    quality: 80,
    src: "https://place.simonbreiter.com/200x200.png"
  })

  return (

    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img {...rest} style={{ width: '100%', height: 'auto' }} />
    </picture>
  )
}

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

        <CustomImage />

      </main>
    </div>
  );
}
