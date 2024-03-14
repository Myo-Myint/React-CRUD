import Button from "./Button.jsx";
import Input from "./Input.jsx";

import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ saveProjectHandler, cancelProjectHandler }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveButtonHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      // return <Modal></Modal>;
      modal.current.open();
      return;
    }

    const project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    saveProjectHandler(project);
  };

  return (
    <>
    <Modal ref={modal}>
          <h2 className="mb-4 text-xl font-bold text-stone-700">Invalid Input</h2>
          <p className="mb-4 text-stone-600">Please enter a valid title, description and due date.</p>
    </Modal>
      <section className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <Button 
            onClick={cancelProjectHandler}
          className="text-stone-700 hover:text-stone-950">
            Cancel
          </Button>
          <Button
            onClick={saveButtonHandler}
            className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
          >
            Save
          </Button>
        </menu>
        <div>
          <Input ref={title} label="Project Name" type="text" />
          <Input ref={description} label="Description" textArea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </section>
    </>
  );
}
