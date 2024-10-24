"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Presentation = () => {
  const [hello, setHello] = useState("Hello.");
  const [iAm, setIAm] = useState("My name is");
  const [name, setName] = useState("Heriberto");

  const nameTransform = () => {
    setName("Contact");
  };
  const iAmTransform = () => {
    setIAm("Work");
  };
  const helloTransform = () => {
    setHello("About me");
  };

  const originalTitle = () => {
    setHello("Hello.");
  };
  const originalIAm = () => {
    setIAm("I am");
  };
  const originalName = () => {
    setName("Heriberto!");
  };

  return (
    <div className="bg-black1 grid-two">
      <div className="py-2 ml-12">
        <div className="transition1 py-6 md:py-1 pb font-bold">
          <Link
            href="/about-me"
            className="title text-white"
            onMouseOver={helloTransform}
            onMouseOut={originalTitle}
          >
            <span>{hello}</span>
          </Link>
        </div>

        <br />
        <div className="transition1 py-6 md:py-12 font-bold">
          <Link
            href="/work"
            className="title text-red-600"
            onMouseOver={iAmTransform}
            onMouseOut={originalIAm}
          >
            <span>{iAm}</span>
          </Link>
        </div>

        <br />
        <div className="transition1 py-6 md:py-10 font-bold">
          <Link
            href="/contact"
            className="title text-red-600"
            onMouseOver={nameTransform}
            onMouseOut={originalName}
          >
            <span>{name}</span>
          </Link>
        </div>

        <br />
        <span className="maquina-escribir">I'm a web Developer! .</span>
      </div>

      <figure>
        <Image
          src="/assets/images/perfil.png"
          alt="Heriberto Lara"
          width={500}
          height={500}
          className="object-cover w-full h-auto" // Clases de Tailwind CSS para hacer la imagen responsiva
        />
        <figcaption>Heriberto Lara - Desarrollador Web</figcaption>
      </figure>
    </div>
  );
};

export default Presentation;
