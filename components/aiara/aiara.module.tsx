import Image from 'next/image'
import styles from './aiara.module.css'
import aiaraBaseImg from '../../public/aiara_illustration.svg';
import drillImg from '../../public/drill.svg';
import JobCard from '../jobCard/jobCard.module';


export default function Aiara() {
    const points = [
        "Developed backend in Django for the entire MES system; maintained API documentation on Swagger; created test suites and performance simulations on locust.",
        "Refactored Kanban view in Angular, reducing the overall page load time by 40%.",
        "Implemented CP SAT model for operator planning module, helping shopfloor managers to plan their tasks.",
        "Successfully implemented an ERP gateway integration that increased customer conversions by 25%."
    ];
  return (
    <>
        <div className={styles.slideContent} >
            <div className={styles.assetsonLeft}>
                <JobCard points={points} org={"Aiara 📈"} role={"Full-Stack Engineer"}/>
            </div>
            <div className={styles.assetsonRight} >
            <div className={styles.barChart}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
                <div className={styles.bar4}></div>
                <svg width="50" height="40" viewBox="0 0 107 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="barchart">
                    <g id="Group">
                    <path id="Vector_5" d="M104.759 63.5948H1.83702C0.857486 63.5948 0.0625 62.8891 0.0625 62.0161C0.0625 61.1432 0.857486 60.4375 1.83702 60.4375H104.759C105.739 60.4375 106.534 61.1432 106.534 62.0161C106.534 62.8891 105.739 63.5948 104.759 63.5948Z" fill="#556080"/>
                    </g>
                </g>
                </svg>
            </div>
            <div className={styles.bulbImg}>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12.5498" cy="12.7012" rx="12.373" ry="12.5742" className={styles.bulbc}/>
                <path d="M7.63716 19.4378C9.75645 19.4378 11.4745 16.0602 11.4745 11.8937C11.4745 7.72723 9.75645 4.34961 7.63716 4.34961C5.51786 4.34961 3.7998 7.72723 3.7998 11.8937C3.7998 16.0602 5.51786 19.4378 7.63716 19.4378Z" fill="white"/>
                </svg>
            </div>
            <Image src={aiaraBaseImg} width={100} height={100} alt='' className={styles.aiaraBaseImg} />
            <Image src={drillImg} width={100} height={100} alt='' className={styles.drillImg} />
            </div>
        </div>

        <div className={styles.slideBackground}>
            <div className={`${styles.gradient1} ${styles.gradientb1}`}></div>
            <div className={`${styles.gradient2} ${styles.gradientb2}`}></div>
            <div className={`${styles.gradient3} ${styles.gradientb3}`}></div>
        </div>
    </>
  )
}
