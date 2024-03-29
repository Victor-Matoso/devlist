import Title from "../Title/Title"
import styles from "./Progress.module.css"

import { AppContext } from "../../AppContent"
import imgUrl from "../../assets/img-trophy-min.png"
import { useContext } from "react"

const Progress = () => {
    const {progressBarValue} = useContext(AppContext)
  return (
    <div className={styles.container}>
        <Title iconName={"chart"} text={"Progresso"}/>
        <input className={styles.progressBarFill}
        readOnly
        type="range"
        value={progressBarValue} 
        />
        <div className={styles.progressBarValue}>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>

        </div>
        {progressBarValue === 100 && (
            <div className={styles.taskCompletedMessage}>
                <img src={imgUrl} alt="Troféu" width="40" height="40"/>
                <span>Parabéns! Você completou todas as tarefas de hoje!</span>
                </div>
        )}
    </div>
        
  )
}

export default Progress
