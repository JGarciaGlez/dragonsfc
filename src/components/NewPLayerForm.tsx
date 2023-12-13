"use client";
import { addPlayer } from "@/app/libs/actions";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Modal from "./Modal";

const NoSSR = dynamic(() => import("./SubmitButton"), { ssr: false });
const NewPLayerForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="flex flex-col justify-center align-middle  items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mb-5 rounded"
      >
        Create a New Player
      </button>
      {isOpen && (
        <Modal closeModal={setIsOpen}>
          <form
            action={async (formData) => {
              await addPlayer(formData);
              formRef.current?.reset();
              setIsOpen(false);
            }}
            ref={formRef}
            className="pb-8  "
          >
            <div>
              <input
                type="text"
                name="name"
                aria-label="Name"
                required
                className="border-2 mt-5"
              />
            </div>
            <div>
              <input
                type="text"
                name="position"
                required
                aria-label="Position"
                className="border-2 mt-3 mb-3"
              />
            </div>
            <NoSSR />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default NewPLayerForm;
