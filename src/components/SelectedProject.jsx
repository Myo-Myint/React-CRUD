import Tasks from "./Tasks";


export default function SelectedProject({currentProject, deleteProjectHandler, onAddTaskHandler, onDeleteTaskHandler , tasks}) {
    const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });


  return (
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">
                    {currentProject.title}
                </h1>
                <button 
                    onClick={() => deleteProjectHandler(currentProject.id)}
                className="text-stone-600 hover:text-stone-950">
                    Delete
                </button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{currentProject.description}</p>
        </header>
        <Tasks onAddTask={onAddTaskHandler} tasks={tasks} onDeleteTask={onDeleteTaskHandler}/>
    </div>
  );
}