import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [text, setText] = useState("");
  return (
    <div className="footer-bg-wrap w-full h-screen relative bg-no-repeat bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-footer after:shadow-custom after:z-0">
      <div className="z-10 text-white relative flex items-center justify-center h-full max-w-md w-full flex-col mx-auto px-5 sm:px-10">
        <h3 className="font-inter font-normal text-2xl sm:text-3xl text-center mb-10">
          Let’s get started lorem <br />
          ipsum with <strong>PicLab</strong>
        </h3>

        <form className="bg-white rounded-lg flex items-center py-4 px-4">
          <Image src="/mail.svg" alt="" width={13} height={9} />
          <input
            type="text"
            placeholder="Enter email"
            className="text-sm font-inter border-r border-[#CDCDCD] text-secondary w-full font-medium mr-5 ml-3 p-1"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="button"
            className="font-inter text-[13px] max-w-max font-semibold text-secondary flex-shrink-0"
          >
            Request Beta
          </button>
        </form>
      </div>
    </div>
  );
}
