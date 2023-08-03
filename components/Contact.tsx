"use client";
import React from "react";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 mx-auto sm:mb-28 w-[min(100%,38rem)] "
    >
      <div className="text-center mt-20">
        <SectionHeading heading="Contact me" />
        <p className="text-gray-700 ">
          Please contact me directly at{" "}
          <a
            className="underline font-semibold"
            href="mailto:eliyahutrab@gmail.com"
          >
            eliyahutrab@gmail.com
          </a>{" "}
        </p>
      </div>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        className=" p-2 flex mt-10 flex-col"
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4"
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center cursor-pointer justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </section>
  );
}
