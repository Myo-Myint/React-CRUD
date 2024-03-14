import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({onAddTask}) {
  const modal = useRef();

    const input = useRef();
  return (
    <>
     <Modal ref={modal}>
          <h2 className="mb-4 text-xl font-bold text-stone-700">Invalid Input</h2>
          <p className="mb-4 text-stone-600">Please enter a short description of the task</p>
    </Modal>
    <div className="flex items-center gap-4">
      <input ref={input} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={() => {
            if (input.current.value.trim().length === 0) {
                modal.current.open();
                return;
            }
              onAddTask(input.current.value);
                input.current.value = "";
          }} className="text-stone-700 hover:text-stone-950">Add Task</button>
      
    </div>
    </>
  );
}
