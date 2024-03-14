import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  const addProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  const saveProjectHandler = (newProject) => {
    setProjectsState((prevState) => {
      const prjId = Math.random();
      const newPrj = { ...newProject, id: prjId };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newPrj],
      };
    });
  };

  const cancelProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  };

  const selectProjectHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  };

  const deleteProjectHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  };

  const addTaskHandler = (text) => {
    let taskID = Math.random();
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, { id: taskID, text: text }],
      };
    });
    
  }

  const onDeleteTaskHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }


  let currentProject = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProjectID;
  });

  let content;

  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        saveProjectHandler={saveProjectHandler}
        cancelProjectHandler={cancelProjectHandler}
      />
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected addProjectHandler={addProjectHandler} />;
  } else {
    content = (
      <SelectedProject
        currentProject={currentProject}
        deleteProjectHandler={deleteProjectHandler}
        onAddTaskHandler={addTaskHandler}
        tasks={projectsState.tasks}
        onDeleteTaskHandler={onDeleteTaskHandler}
      />
    );
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <SideBar
        addProjectHandler={addProjectHandler}
        projects={projectsState.projects}
        selectProjectHandler={selectProjectHandler}
        selectedProjectID={projectsState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
