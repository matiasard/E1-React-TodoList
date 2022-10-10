import { useEffect, useState } from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = "tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: "c7a5cb1b-acdd-445b-8172-6e13c8d85bba",
			title: "Pasear al perro",
			isCompleted: false,
		},
	]);

	function loadSavedTasks() {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

		if (saved) {
			setTasks(JSON.parse(saved));
		}
	}

	useEffect(() => {
		loadSavedTasks();
	}, []);

	function setTasksAndSave(newTasks) {
		setTasks(newTasks);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
	}

	function addTasks(taskTitle) {
		const capitalizeTitle = taskTitle[0].toUpperCase() + taskTitle.slice(1);
		setTasksAndSave([
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

		setTasksAndSave(newTasks);
	}

	function deleteTaskById(taskId) {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasksAndSave(newTasks);
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
