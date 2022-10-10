import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: "c7a5cb1b-acdd-445b-8172-6e13c8d85bba",
			title: "Pasear al perro",
			isCompleted: false,
		},
	]);

	function addTasks(taskTitle) {
		const capitalizeTitle = taskTitle[0].toUpperCase() + taskTitle.slice(1);
		setTasks([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: capitalizeTitle,
				isCompleted: false,
			},
		]);
	}

	function toggleTaskCompletedById(taskId) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted,
				};
			}
			return task;
		});

		setTasks(newTasks);
	}

	function deleteTaskById(taskId) {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	}

	return (
		<div className="App">
			<Header onAddTask={addTasks} />
			<Tasks
				tasks={tasks}
				onComplete={toggleTaskCompletedById}
				onDelete={deleteTaskById}
			/>
		</div>
	);
}

export default App;
