import Image from 'next/image'
import styles from './numerator.module.css'
import televisionImg from '../../public/television.svg';
import buttonTopImg from '../../public/buttonTop.svg';
import brandsImg from '../../public/brands.svg';
import JobCard from '../jobCard/jobCard.module';

export default function Numerator() {
    const points = [
        "Designed and implemented data models and APIs in Django for a product that reduced operations time by at least 20-25%.",
        "Designed and led data migration-related tasks in Snowflake and Apache airflow, which accounted for additional data points for clients and helped onboard at least 15 new clients for the organization.",
        "Worked on branching strategies and automating pipelines, along with setting up and maintaining product infrastructure on AWS. Furthermore, helped the team with additional cost savings of $1,500/month"
    ]
  return (
    <>
        <div className={styles.slideContent}>
            <div className={styles.assetsonLeft}>
            <Image src={televisionImg} width={100} height={100} alt='' className={styles.televisionImg} />
            <Image src={buttonTopImg} width={100} height={100} alt='' className={styles.buttonTopImg} />
            <div className={styles.televisionDisplay}>
                <div className={styles.televisionDisplayText}>
                <Image src={brandsImg} width={600} height={600} alt='' className={styles.brandsImg} />
                </div>
            </div>
            </div>
            <div className={styles.assetsonRight}>
                <JobCard points={points} org={"Numerator 📈"} role={"Backed Engineer"}/>
            </div>
        </div>
        <div className={styles.slideBackground}>
            <div className={`${styles.gradient1} ${styles.gradientc1}`}></div>
            <div className={`${styles.gradient2} ${styles.gradientc2}`}></div>
            <div className={`${styles.gradient3} ${styles.gradientc3}`}></div>
        </div>
    </>
  )
}
