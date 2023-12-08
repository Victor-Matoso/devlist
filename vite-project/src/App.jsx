import "./App.css";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import DragDrop from "./components/DragDrop/DragDrop";
import Header from "./components/Header";
import Progress from "./components/Progress/Progress";
import TodayTasks from "./components/TodayTasks/TodayTasks";

// function OnDragEnd(result:any){



const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <CreateNewTask />
        <TodayTasks />
        <div className="divider"/>
        <Progress></Progress>
        <CompletedTasks></CompletedTasks>

  {/*  */}
        {/* <DragDrop>
          <article>
            {TodayTasks.map((task) =>(
              <Task key={task.id} task={task} />
            ))}
          </article>
        </DragDrop> */}
  {/*  */}

      </section>
    </div>
  );
};

export default App;
