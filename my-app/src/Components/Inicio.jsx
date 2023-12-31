import React from "react";
import HeroImage from "../imagens/example.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Inicio = () => {
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Desenvolvedor Front-end
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Apaixonado por tecnologia sigo buscando minha primeira vaga como dev. Clique abaixo para conhecer melhor minha história.
          </p>

          <div>
            <Link
              to="Sobre"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Iniciar
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
