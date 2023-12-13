import * as Dialog from "@radix-ui/react-dialog";
import { useParams } from "next/navigation";
type ModalProops = {
  closeModal: (isOpen: boolean) => void;
  children: React.ReactNode;
};
const Modal = (props: ModalProops) => {
  const params = useParams();
  const { closeModal, children } = props;

  if (!closeModal) return null;
  return (
    <main className="border-2 border-red-900  flex justify-center items-center fixed inset-0 backdrop-blur-sm ">
      <Dialog.Root>
        <button onClick={() => closeModal(false)} className="absolute top-2  left-2 text-2xl">
          X
        </button>
        {children}
      </Dialog.Root>
    </main>
  );
};

export default Modal;
