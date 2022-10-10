// import React from 'react'
import styles from "./header.module.css";

import { AiOutlinePlusCircle } from "react-icons/ai";

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				📝
				<span className={styles.colorTitle_1}>To</span>
				<span className={styles.colorTitle_2}>Do</span>
			</h1>

			<form className={styles.newTaskForm}>
				<input type="text" placeholder="add a new task" />
				<button>
					Create
					<AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
};
