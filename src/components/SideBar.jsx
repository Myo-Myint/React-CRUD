import Button from "./Button";

export default function SideBar({
  addProjectHandler,
  projects,
  selectProjectHandler,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={addProjectHandler}>+ New Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

          let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (selectedProjectID === project.id) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }

          return (
            <li key={project.id} className="my-4">
              <button
                onClick={() => {
                  selectProjectHandler(project.id);
                }}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
