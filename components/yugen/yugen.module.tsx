import Image from 'next/image'
import styles from './yugen.module.css'
import pipelineImg from '../../public/pipeline.svg';
import redHandleImg from '../../public/redHandle.svg';
import JobCard from '../jobCard/jobCard.module';

export default function Yugen(props: any) {
    const points = [
        "Designed and developed data transformation and extraction pipelines to collect user-game-level data for 5 million daily Xbox and Steam users.",
        "Resolved bottlenecks in the authentication scaling aspect for the required number of users by 60%. ",
        "Led weekly client meetings and supervised junior data engineers.",
        "Implemented Kafka (Event-driven), Airflow (Schedule based) & Monolithic solutions for our clients, along with management of the infrastructure and deployments on GCP." 
    ];
  return (
      <>
          <div className={styles.slideContent}>
              <div className={styles.assetsonLeft} style={{marginTop: "10rem", left: "0", right: "0"}}>
                <div className={styles.smokeImg1}>
                  <svg width="80" height="70" viewBox="0 0 9 29" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.43901 1.94746L6.08887 28.3379L0.838723 0.202672L8.43901 1.94746Z" className={styles.smokeanimation1}/>
                  </svg>
                </div>
                <div className={styles.smokeImg2}>
                  <svg width="80" height="70" viewBox="0 0 9 29" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.43901 1.94746L6.08887 28.3379L0.838723 0.202672L8.43901 1.94746Z" className={styles.smokeanimation2}/>
                  </svg>
                </div>
                <div className={styles.smokeImg3}>
                  <svg width="80" height="70" viewBox="0 0 9 29" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.43901 1.94746L6.08887 28.3379L0.838723 0.202672L8.43901 1.94746Z" className={styles.smokeanimation3}/>
                  </svg>
                </div>
                <div className={styles.meterImg}>
                  <svg width="30" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse id="Ellipse 1" cx="11.8589" cy="12.458" rx="11.4312" ry="11.6338" fill="black"/>
                    <g id="Ellipse 2">
                    <path d="M21.4587 12.4581C21.4587 17.9405 17.1606 22.3849 11.8587 22.3849C6.55683 22.3849 2.25879 17.9405 2.25879 12.4581C2.25879 6.97564 6.55683 2.53125 11.8587 2.53125C17.1606 2.53125 21.4587 6.97564 21.4587 12.4581Z" fill="#646464"/>
                    <path d="M21.4587 12.4581C21.4587 17.9405 17.1606 22.3849 11.8587 22.3849C6.55683 22.3849 2.25879 17.9405 2.25879 12.4581C2.25879 6.97564 6.55683 2.53125 11.8587 2.53125C17.1606 2.53125 21.4587 6.97564 21.4587 12.4581Z" stroke="black"/>
                    </g>
                    <path id="Vector 1" d="M11.8584 4.74414V12.4571" stroke="#FF0000" className={styles.meterArrow}/>
                    <g id="Ellipse 3">
                    <path d="M12.6002 11.6988C12.6002 12.1182 12.2678 12.4582 11.8577 12.4582C11.4477 12.4582 11.1152 12.1182 11.1152 11.6988C11.1152 11.2794 11.4477 10.9395 11.8577 10.9395C12.2678 10.9395 12.6002 11.2794 12.6002 11.6988Z" fill="white"/>
                    <path d="M12.6002 11.6988C12.6002 12.1182 12.2678 12.4582 11.8577 12.4582C11.4477 12.4582 11.1152 12.1182 11.1152 11.6988C11.1152 11.2794 11.4477 10.9395 11.8577 10.9395C12.2678 10.9395 12.6002 11.2794 12.6002 11.6988Z" stroke="black"/>
                    </g>
                  </svg>
                </div>
                

                <Image src={pipelineImg} width={100} height={100} alt='' className={styles.pipelineImg} />
                <Image src={redHandleImg} width={100} height={100} alt='' className={styles.redHandleImg}/>
              </div>
              <div className={styles.assetsonRight}>
                <JobCard points={points} org={"Yugen 🤖"} role={"Data Engineer"} href={props.nextCardId} onClick={props.nextCardHandler} left={true}/>
              </div>
            </div>

            <div className={styles.slideBackground}>
              <div className={`${styles.gradient1} ${styles.gradienta1}`}></div>
              <div className={`${styles.gradient2} ${styles.gradienta2}`}></div>
              <div className={`${styles.gradient3} ${styles.gradienta3}`}></div>
            </div>
    </>
  )
}
  
  
  
