import Image from 'next/image'
import styles from './jobCard.module.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function JobCard(props: any) {
    return (
        <>
            <div className={styles.jobCard}>      
                <div className={styles.jobOrg}>{props.org}</div>
                <div className={styles.jobRole}>{props.role}</div>
                <ul className={styles.jobDescription}>
                    {props.points.map((x) => <li> <ArrowOutwardIcon/> {x}</li>)}
                </ul>
           
            </div>
        </>

    )
}