"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  FaInstagramSquare,
  FaTiktok,
  FaWhatsappSquare,
  FaFacebook,
} from "react-icons/fa";
import FeisalImg from "../images/profiles/CEO1by1.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function CeoIntroAndMessage() {
  const [text, count] = useTypewriter({
    words: [
      "“Hello there,👋”",
      "“As the CEO of Feisal Group, I am incredibly proud of the journey we've embarked on and the impact we've made in our communities.”",
      "“ Our commitment to excellence, integrity, and innovation drives everything we do, ensuring that we consistently deliver exceptional products and services to our customers.”",
      "“With a diverse portfolio of businesses spanning real estate, home cleaning services, driving education, Islamic finance, transport, security and much more...”",
      "“we remain dedicated to driving growth, empowering individuals, and shaping a brighter future for all. ”",
      "“ I am excited about the opportunities that lie ahead as we continue to strive for excellence and make a meaningful difference in the lives of our stakeholders.”",
      "“Welcome on board”",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2
        id="Leadership"
        className="uppercase text-3xl md:text-5xl tracking-[20px] text-center text-purple-600 mx-auto"
      >
        CEO's Message...
      </h2>
      <section className="max-w-8xl mb-28 md:mb-40 flex flex-col items-center space-y-2 justify-center text-center sm:mb-0 scroll-mt-[100rem] h-screen overflow-hidden">
        <BackgroundCircles />
        <div className="flex items-center justify-center max-w-6xl z-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={FeisalImg}
                alt="Feisal portrait"
                width="250"
                height="250"
                quality="100"
                priority={true}
                className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl z-0"
              />
            </motion.div>
          </div>
        </div>
        <motion.h2
          className="px-4 text-2xl uppercase font-thin tracking-[15px] !leading-[1.5] sm:text-4xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="underline-none text-black">
            CEO FEISAL HUSSEIN SWALEH
          </span>
          <Cursor cursorColor="#000000" />
        </motion.h2>

        <motion.h1
          className="px-4 text-2xl text-black font-medium !leading-[1.5] sm:text-4xl z-10 overflow-hidden"
          style={{ height: "3em" }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="underline-none">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </motion.h1>

        <motion.h3
          className="py-2 px-4 text-xl uppercase text-black  font-thin !leading-[1.5] sm:text-2xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="underline-none" style={{ letterSpacing: "0.2em" }}>
            <a
              href="https://iqrafm.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CEO FEISAL-GROUP{" "}
            </a>
            | President, East African FIFA Football Agents Association |
            ENTERPRENEURE | Advocate and Lawyer | Islamic Lawyer |
          </span>
          <Cursor cursorColor="#000000" />
        </motion.h3>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="https://wa.me/+254720644048"
            className="group bg-purple-900/70 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition z-10"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            target="_blank" // Opens the link in a new tab
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-purple-600/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack  z-10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <motion.div className="flex sm:flex-col md:flex-row gap-4">
            <a
              className="bg-purple-900/25 p-4 text-zinc-900 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack z-10"
              href="https://www.linkedin.com/in/feisal-hussein-swaleh-csaa-cipa-mifp-03180552/?originalSubdomain=ke/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-purple-900/25 p-4 text-zinc-900 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack z-10"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>

            <a
              className="bg-purple-900/25 p-4 text-zinc-900 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack z-10"
              href="https://www.facebook.com/feisalhs?mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook />
            </a>

            <a
              className="bg-purple-900/25 p-4 text-zinc-900 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack z-10"
              href="https://www.tiktok.com/"
              target="_blank"
            >
              <FaTiktok />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
