import React, { useContext } from 'react'
import Title from '../Title/Title'
import { AppContext } from '../../AppContent'
import TaskItem from '../TaskItem/TaskItem';
import styles from "./TodayTasks.module.css"

const TodayTasks = () => {
    const { taskList, progressBarValue} = useContext(AppContext);
  return (
    <div className={styles.container}
    style={{
        marginTop: `${progressBarValue === 100 ? "-107" : "0"}`,
    }}

    
>
        <Title iconName={"list"} text={"Tarefas de hoje"}></Title>
        {progressBarValue === 100 || taskList.length === 0 ? (
            <span className={styles.TodayTasksMessage}>
                Você não tem tarefas disponiveis</span>
        ): (
            <ul className={styles.taskList}>
                {taskList.map(
                    (task) => !task.done && <TaskItem key={task.id} task={task}></TaskItem>
                )}
            </ul>
        )}
    </div>
  )
}

export default TodayTasks