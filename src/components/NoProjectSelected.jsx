//import no-projects.png from "../assets/no-projects.png";
import noProjects from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({addProjectHandler}) {
  return (
    <section className="mt-24 w-2/3 text-center">
      <div>
        <img className="mx-auto h-16 w-16 object-contain" src={noProjects} />
        <h2 className="my-4 text-xl font-bold text-stone-500">
          No Project Selected
        </h2>
        <p className="mb-4 text-stone-400">
          Select a project or create a new one.
        </p>
      </div>
      <Button onClick={addProjectHandler}>Create New Project</Button>
    </section>
  );
}
