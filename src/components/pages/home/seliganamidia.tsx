"use client";

import { Info } from "lucide-react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/swiper.css";
import Image from "next/image";

import imagem1 from "@/assets/seliganamidia/imagem1.png";
import imagem2 from "@/assets/seliganamidia/imagem2.png";
import imagem3 from "@/assets/seliganamidia/imagem3.png";
import imagem4 from "@/assets/seliganamidia/imagem4.png";
import imagem5 from "@/assets/seliganamidia/imagem5.png";
import imagem6 from "@/assets/seliganamidia/imagem6.png";
import imagem7 from "@/assets/seliganamidia/imagem7.png";

export const SeLigaNaMidiaHome = () => {
  return (
    <div className="w-full flex items-center flex-col gap-6 mt-12 mb-1 py-6 h-[900px] ">
      <div>
        <p className="text-4xl font-righteous text-center   text-white">
          Destaques - Se Liga Na Mídia
        </p>
        <div className="w-full h-full flex flex-row gap-2 items-center justify-center my-3 flex-wrap ">
          <Info size={30} className=" text-gray-400" />
          <p className="text-lg font-righteous text-center text-gray-400 lg:max-w-[800px] max-w-[90%] mx-6">
            O Se liga na mídia foi criado para a criação de conteudos
            jornalisticos produzido no itinerario formativo. Todos os artigos
            foram produzidos pelos alunos da escola Adherbal de Paula Ferreira.
            As tecnologias utilizadas foram Vite (React - Typescript), e
            back-end com NodeJS e Typescript junto ao banco de dados postgres
            que é gerenciado através do ORM Prisma. Experimente você mesmo:{" "}
            <strong className="text-white tracking-widest">
              <a
                href="https://seliganamidia.xyz"
                target="_blank"
                className="underline"
              >
                link
              </a>
            </strong>
          </p>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Keyboard, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="hidden">
              <Image
                src={imagem1}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem2}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem3}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem4}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem5}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem6}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <Image
                src={imagem7}
                alt="Imagem da tela inicial do site se liga na mídia"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
