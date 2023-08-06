import Image from 'next/image'
import styles from './page.module.css'
import pipelineImg from '../public/pipeline.svg';
import redHandleImg from '../public/redHandle.svg';
import aiaraBaseImg from '../public/aiara_illustration.svg';
import drillImg from '../public/drill.svg';
import televisionImg from '../public/television.svg';
import kfcImg from '../public/kfc.svg';
import buttonTopImg from '../public/buttonTop.svg';
import brandsImg from '../public/brands.svg';
import rocketImg from '../public/rocket.svg';
import { useState } from 'react';
// import './temp.css'

export default function Test() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.slide} ${styles.slide4}`} id="third">
          <div className={styles.slideContent}>
            <div className={styles.assetsonLeft}>
              Rocket Loanz
            </div>
            <div className={styles.assetsonRight}>
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
        </div>

        <div className={`${styles.slide} ${styles.slide1}`} id="first">
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
              YUGEN
            </div>
          </div>

          <div className={styles.slideBackground}>
            <div className={`${styles.gradient1} ${styles.gradienta1}`}></div>
            <div className={`${styles.gradient2} ${styles.gradienta2}`}></div>
            <div className={`${styles.gradient3} ${styles.gradienta3}`}></div>
          </div>

        </div>

        <div className={`${styles.slide} ${styles.slide2}`} id="second">
          <div className={styles.slideContent} >
            <div className={styles.assetsonLeft}>
              Lorem ipsum dolor!
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
          
        </div>
        
        <div className={`${styles.slide} ${styles.slide3}`} id="third">
          <div className={styles.slideContent}>
            <div className={styles.assetsonLeft}>
              <Image src={televisionImg} width={100} height={100} alt='' className={styles.televisionImg} />
              <Image src={buttonTopImg} width={100} height={100} alt='' className={styles.buttonTopImg} />
              <div className={styles.televisionDisplay}>
                <div className={styles.televisionDisplayText}>
                  {/* <Image src={kfcImg} width={100} height={100} alt='' className={styles.kfcImg} /> */}
                  <Image src={brandsImg} width={600} height={600} alt='' className={styles.brandsImg} />
                  {/* <div>${100}</div> */}
                </div>
              </div>
            </div>
            <div className={styles.assetsonRight}>
              Lorem ipsum dolor!
            </div>
          </div>
          <div className={styles.slideBackground}>
            <div className={`${styles.gradient1} ${styles.gradientc1}`}></div>
            <div className={`${styles.gradient2} ${styles.gradientc2}`}></div>
            <div className={`${styles.gradient3} ${styles.gradientc3}`}></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
