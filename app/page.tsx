'use client'
import styles from './page.module.css'
import RocketLoanz from '../components/rocketloanz/rocketloanz.module';
import Yugen from '../components/yugen/yugen.module';
import Aiara from '../components/aiara/aiara.module';
import Numerator from '../components/numerator/numerator.module';
import Footer from '../components/footer/footer.module';
import About from '../components/about/about.module';
import Link from "next/link";

export default function Home() {
  const handleScroll = (e: any) => {
      // first prevent the default behavior
      e.preventDefault();
      // get the href and remove everything before the hash (#)
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      // // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <div className={styles.unsupportedDeviceMessage}>
        Sorry this website currently isn't supported your device, please try on a bigger display.
      </div>
      <div className={styles.navigation}>
        <Link className={styles.navigationItem} href="#fifth" onClick={handleScroll}>ABOUT</Link>
        <Link className={styles.navigationItem} href="#fourth" onClick={handleScroll}>WORK</Link>
        <Link className={styles.navigationItem} href="#footer" onClick={handleScroll}>CONNECT</Link>
      </div>
      <div className={styles.main}>
        
          <div className={`${styles.slide} ${styles.slide5}`} id="fifth">
            <About />
          </div> 
          <div className={`${styles.slide} ${styles.slide4}`} id="fourth">
          <RocketLoanz nextCardId="#first" nextCardHandler={handleScroll}/>
          </div> 
    
          <div className={`${styles.slide} ${styles.slide1}`} id="first">
            <Yugen nextCardId="#second" nextCardHandler={handleScroll}/>
          </div>

          <div className={`${styles.slide} ${styles.slide2}`} id="second">
            <Aiara nextCardId="#third" nextCardHandler={handleScroll}/>
          </div>
          
          <div className={`${styles.slide} ${styles.slide3}`} id="third">
            <Numerator nextCardId="#footer" nextCardHandler={handleScroll}/>
        </div>
        <div id="footer" style={{width: "100%", height: "0rem"}}></div>
        <Footer/>

          
        
      </div>
      
    </>
  )
}
