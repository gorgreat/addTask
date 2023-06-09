import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { titleChanged, deleteTask, completeTask, getTasks, loadTasks, getTaskLoadingStatus, createTask } from "./store/task";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getError } from "./store/errors";

const store = configureStore();

const App = (params) => {
    const state = useSelector(getTasks())
    const isLoading = useSelector(getTaskLoadingStatus());
    const error = useSelector(getError());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, []);
  
    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId));
    };

    const removeTask = (taskId) => {
         dispatch(deleteTask(taskId));
    };

    const addTask = () => {
         dispatch(createTask(state));
    };
    
    if (isLoading) {
        return <h1>Загрузка...</h1>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
            <h1> App</h1>
            <ul>
                <button onClick={() => addTask()}>Добавить task</button>                        
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p> {`Completed: ${el.completed}`}</p>
                        <button onClick={() => dispatch(completeTask(el.id))}>
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            Change title
                        </button>
                        
                        <button onClick={() => removeTask(el.id)}>Delete</button>                                                
                        
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>            
    </React.StrictMode>,
    document.getElementById("root")
);
