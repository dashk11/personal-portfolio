import Image from 'next/image'
import styles from './rocketloanz.module.css'
import rocketImg from '../../public/rocket.svg';
import meteor3Img from '../../public/meteor-3.svg';
import JobCard from '../jobCard/jobCard.module';

export default function RocketLoanz() {
    const points = [
        "Led the development of entire React-based web app on Next.js framework using TypeScript, HTML, and SCSS.",
        "Created user journey wireframes with stakeholders; designed customer experience workflows."
    ]

    return (
        <>
            <div className={styles.slideContent}>
                <div className={styles.assetsonLeft}>
                    <JobCard points={points} org={"Rocket Loanz 🚀"} role={"UI/UX developer, Freelance"}/>
                </div>
                <div className={styles.assetsonRight}>
                <div className={styles.trails}>
                    <svg width="409" height="341" viewBox="0 0 509 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="trail-left">
                            <path className={styles.trail1} d="M90.0967 0.542969V224.605" stroke="white" stroke-width="5"/>
                            <path className={styles.trail2} d="M41.8184 112.574V309.4" stroke="white" stroke-width="5"/>
                            <path className={styles.trail3} d="M3.44336 38.918V163.947" stroke="white" stroke-width="5"/>
                        </g>
                        <g id="trail-right">
                            <path className={styles.trail4} d="M506.034 116.166V340.229" stroke="white" stroke-width="5"/>
                            <path className={styles.trail5} d="M466.421 21.3906V218.217" stroke="white" stroke-width="5"/>
                            <path className={styles.trail6} d="M432.998 136.27V261.299" stroke="white" stroke-width="5"/>
                        </g>
                    </svg>   
                    </div>
                    {/* small */}
                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "0rem", marginLeft: "10rem"}}
                    />
                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "10rem", marginLeft: "20rem"}}
                    />
                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "20rem", marginLeft: "-10rem"}}
                    />

                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "0rem", marginLeft: "-20rem"}}
                    />
                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "5rem", marginLeft: "20rem"}}
                    />
                    <Image
                        src={meteor3Img} width={50} height={50} alt=''
                        className={`${styles.meteor3aImg} ${styles.meteor}`} style={{marginTop: "8rem", marginLeft: "-30rem"}}
                    />

                    {/* big */}
                    <Image
                        src={meteor3Img} width={100} height={100} alt=''
                        className={`${styles.meteor3bImg} ${styles.meteor}`} style={{marginTop: "0rem", marginLeft: "0rem"}}
                    />
                    <Image
                        src={meteor3Img} width={100} height={100} alt=''
                        className={`${styles.meteor3bImg} ${styles.meteor}`} style={{marginTop: "20rem", marginLeft: "-10rem"}}
                    />
                    
                <Image src={rocketImg} width={100} height={100} alt='' className={styles.rocketImg} />
                    
                <div className={styles.rocketFlameImg}>
                    <svg width="379" height="388" viewBox="0 0 379 388" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.flame1}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M107.454 88.2809C107.454 88.2809 87.767 133.375 74.6194 174.63C61.471 215.868 71.9598 252.331 75.0655 255.349C78.1713 258.366 96.2378 245.271 104.01 235.295C111.774 225.327 107.118 185.767 117.341 251.173C127.564 316.58 142.579 354.531 149.507 342.271C176.18 321.474 180.401 227.762 199.828 264.146C219.238 300.531 246.68 368.066 248.502 305.597C250.323 243.128 234.272 198.334 259.192 224.007C284.121 249.69 298.291 285.358 306.514 251.009C314.746 216.669 287.07 123.941 274.968 84.4468C245.51 74.8015 181.576 62.4808 107.454 88.2809Z" fill="#FF4000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.812 79.4386C127.812 79.4386 94.9293 134.232 92.4454 158.01C89.9514 181.779 94.1308 182.558 114.261 166.118C134.4 149.668 133.962 113.246 145.662 163.89C157.372 214.544 159.991 266.191 174.108 219.34C188.216 172.499 191.114 160.587 202.164 192.592C213.225 224.608 225.818 253.21 228.842 197.24C229.876 155.686 274.907 187.99 284.164 192.061C298.054 210.477 257.032 78.9622 248.457 70.6313C237.421 63.1914 137.624 75.8853 127.812 79.4386Z" fill="#FFFF33" fill-opacity="0.6963"/>
                    </svg>
                </div>
                </div>
            </div>
            <div className={styles.slideBackground}>
                <div className={`${styles.gradient1} ${styles.gradientd1}`}></div>
                <div className={`${styles.gradient2} ${styles.gradientd2}`}></div>
                <div className={`${styles.gradient3} ${styles.gradientd3}`}></div>
            </div>
        </>

    )
}