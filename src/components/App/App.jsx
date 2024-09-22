import TaskList from "../TaskList/TaskList";
// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasksOps";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <main className={css.container}>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {/* <Loader>Loading message</Loader> */}
      {/* <Error>Error message</Error> */}
      <TaskList />
    </main>
  );
}
