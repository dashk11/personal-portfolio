import styles from './page.module.css'
import About from '../components/about/about.module';

export default function Navigation() {
  return (
    <>
      <div className={styles.main}>
        
          <div className={`${styles.slide} ${styles.slide5}`} id="fifth">
            <About />
          </div> 
      </div>
      
    </>
  )
}
