import { useState } from "react";
import styles from "./header.module.css";

import { AiOutlinePlusCircle } from "react-icons/ai";

export const Header = ({ onAddTask }) => {
	const [title, setTitle] = useState("");

	function handleSubmit(event) {
		event.preventDefault();

		onAddTask(title);
		setTitle("");
	}

	function onChangeTitle(event) {
		setTitle(event.target.value);
	}

	return (
		<header className={styles.header}>
			<h1>
				📝
				<span className={styles.colorTitle_1}>To</span>
				<span className={styles.colorTitle_2}>Do</span>
			</h1>

			<form onSubmit={handleSubmit} className={styles.newTaskForm}>
				<input
					type="text"
					placeholder="add a new task"
					value={title}
					onChange={onChangeTitle}
				/>
				<button>
					Create
					<AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
};
