import styles from "./tasks.module.css";

import { Task } from "../Task/Task";

export const Tasks = ({ tasks, onComplete, onDelete }) => {
	const tasksQuantity = tasks.length;
	const tasksQuantityCompleted = tasks.filter(
		(task) => task.isCompleted
	).length;

	return (
		<section className={styles.tasks}>
			<header className={styles.header}>
				<div>
					<p>Create tasks</p>
					<span>{tasksQuantity}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Completed tasks</p>
					<span>
						{tasksQuantityCompleted} of {tasksQuantity}
					</span>
				</div>
			</header>

			<div className={styles.list}>
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onComplete={onComplete}
						onDelete={onDelete}
					/>
				))}
			</div>
		</section>
	);
};
