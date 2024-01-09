import { IconX } from "@tabler/icons-react";
import { colorByType } from "../contants/colors";

interface childrenProps {
  showModal: boolean;
  onCloseModal: React.MouseEventHandler<HTMLElement>;
}

export const ModalPokemon = ({ showModal, onCloseModal }: childrenProps) => {
  return (
    <section
      className={` fixed lg:hidden top-0 left-0 right-0 h-screen transition-all bg-green-500 duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[colorByType?.types]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={34} stroke={4} />
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        pokemon
      </article>
    </section>
  );
};