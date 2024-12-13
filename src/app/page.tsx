import Image, { getImageProps } from 'next/image'
import styles from "./page.module.css";

// TODO: Pass ratios as config and add sources based on that 
// const ratios = {
//   mobile: "1 / 1",
//   desktop: "3 / 2"
// }

const CustomImage = () => {
  const common = { alt: 'Art Direction Example', sizes: '100vw' }

  const {
    props: { srcSet: ratio11, ...rest },
  } = getImageProps({
    ...common,
    width: 200,
    height: 200,
    quality: 80,
    src: "https://place.simonbreiter.com/200x200.png" // Source for 1:1 ratio
  })

  const {
    props: { srcSet: ratio32 },
  } = getImageProps({
    ...common,
    width: 400,
    height: 600,
    quality: 80,
    src: "https://place.simonbreiter.com/400x600.png" // Source for 3:2 ratio
  })

  return (
    <picture>
      <source media="(min-width: 500px)" srcSet={ratio11} />
      <source media="(min-width: 1000px)" srcSet={ratio32} />
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
