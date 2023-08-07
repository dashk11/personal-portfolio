import Image from 'next/image'
import styles from './jobCard.module.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function JobCard(props: any) {
    return (
        <>
            <div className={styles.jobCard}>     
                <div className={styles.jobCardContent}>
                    <div className={styles.jobOrg}>{props.org}</div>
                    <div className={styles.jobRole}>{props.role}</div>
                    <ul className={styles.jobDescription}>
                        {props.points.map((x: any) => <li className={styles.responsibilityItem}> <ArrowOutwardIcon className={styles.ArrowOutwardIcon}/> {x}</li>)}
                    </ul>
                </div>
                {props.left ? 
                <Link href={props.href ? props.href : ""} onClick={props.onClick} className={styles.jumpToLeftCard}
                    style={{ float: "left", bottom:"10", width: "2rem", height: "2rem", backgroundColor: "#eb5939", display:"flex", alignItems: "center", justifyContent: "center", borderRadius: "0px 10px 0px 10px" }}>
                    <PlayArrowIcon style={{fontSize: "2rem", transform: "rotate(135deg)", color: "#fff5f5"}}/>
                </Link>:
                <Link href={props.href ? props.href : ""} onClick={props.onClick} className={styles.jumpToRightCard}
                    style={{ float: "right", bottom:"10", width: "2rem", height: "2rem", backgroundColor: "#eb5939", display:"flex", alignItems: "center", justifyContent: "center", borderRadius: "10px 0px 10px 0px" }}>
                    <PlayArrowIcon style={{fontSize: "2rem", transform: "rotate(45deg)", color: "#fff5f5"}}/>
                </Link>}
                
                
            </div>
        </>

    )
}