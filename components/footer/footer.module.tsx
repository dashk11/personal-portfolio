import styles from './footer.module.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
          <a href="https://www.linkedin.com/in/dashk11/" className={`${styles.socialLink}`} target="_blank" rel="noopener noreferrer">
              <ArrowRightIcon className={styles.arrowRight} />Linkedin
          </a>
          <a href="https://github.com/dashk11" className={`${styles.socialLink}`} target="_blank" rel="noopener noreferrer">
              <ArrowRightIcon className={styles.arrowRight} />GitHub
          </a>
          <a href="#footer" className={`${styles.socialLink}`}>
              <ArrowRightIcon className={styles.arrowRight}/>Blog
        </a>
        <a href="https://drive.google.com/file/d/1WMH9uAaYGSEP2vSYsFO-WzK6ZNVcI3RS/view?usp=sharing" className={`${styles.socialLink}`} target="_blank" rel="noopener noreferrer">
              <ArrowRightIcon className={styles.arrowRight} />Resume
          </a>
      </div> 
    </>
  )
}
