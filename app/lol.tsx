import Image from 'next/image'
import styles from './page.module.css'

export default function Lol() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container1}>
          asdsa
          <Image
            src="/car1.jpg"
            alt="Picture of the author"
            width={70} height={70}
            className={styles.carImg1}
          />
        </div>
        <div className={styles.container2}>
          asd
          <Image
              src="/car2.jpg"
              alt="Picture of the author"
              width={70} height={70}
              className={styles.carImg2}
            />
        </div>
        <div className={styles.container3}>
          <Image
            src="/car3.jpg"
            alt="Picture of the author"
            width={70} height={70}
            className={styles.carImg2}
          />
        </div>
      </div>
    </div>
    
  )
}
