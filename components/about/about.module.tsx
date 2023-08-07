import styles from './about.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {

  return (
    <>
        <div className={styles.aboutContainer} >
              <div className={styles.terminalBox}>
                <div className={styles.terminalBoxHeader}>
                    <div className={styles.terminalActionButtons}>
                          <div className={styles.red}></div>
                          <div className={styles.yellow}></div>
                          <div className={styles.green}></div>
                    </div>
                    <div className={styles.name}>
                    Darshan Vipresh Sheth | darshan.sheth026@gmail.com
                </div>
                </div>
                
                <div className={styles.terminalContent}>
                
                <div className={styles.terminalLine}>
                    <ArrowForwardIcon className={styles.terminalArrow} />&nbsp;&nbsp;
                    <span style={{ color: "#3db5c1" }}>~</span>
                    &nbsp;Hello, I'm Darshan, a software developer
                    </div>
                    <div className={styles.terminalLine}>
                    <ArrowForwardIcon className={styles.terminalArrow} />&nbsp;&nbsp;
                    <span style={{ color: "#3db5c1" }}>~</span>
                    &nbsp;Looking to collaborate on interesting projects
                </div>
                    <div className={styles.terminalLine}>
                        <ArrowForwardIcon className={styles.terminalArrow} />&nbsp;&nbsp;
                        <span style={{ color: "#3db5c1" }}>~</span>
                        &nbsp;{"<-- "}Check out my previous experiences 
                    </div>
                    <div className={styles.terminalLine}>
                        <ArrowForwardIcon className={styles.terminalArrow} />&nbsp;&nbsp;
                        <span style={{ color: "#3db5c1" }}>~</span>
                        &nbsp;<div className={styles.cursor}> </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}
