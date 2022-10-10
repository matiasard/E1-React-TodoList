import styles from "./task.module.css";

import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const Task = ({ task, onComplete, onDelete }) => {
	return (
		<div className={styles.task}>
			<button
				className={styles.checkContainer}
				onClick={() => onComplete(task.id)}
			>
				{task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
			</button>

			<p className={task.isCompleted ? styles.textCompleted : ""}>
				{task.title}
			</p>

			<button onClick={() => onDelete(task.id)}>
				<TbTrash size={20} />
			</button>
		</div>
	);
};
