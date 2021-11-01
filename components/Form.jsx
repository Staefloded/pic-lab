import Image from "next/image";
import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  return (
    <div className="absolute w-full top-0">
      <div className="rounded-[10px] max-w-[95%] w-full mx-auto  bg-white">
        <div className="flex items-center justify-between py-[10px] pl-[8px] pr-[30px]">
          <form className="border border-[#CDCDCD] rounded-lg flex items-center py-3 px-3">
            <Image src="/mail.svg" alt="" width={13} height={9} />
            <input
              type="text"
              placeholder="Enter email"
              className="text-sm font-inter border-r border-[#CDCDCD] mr-5 ml-3"
              onChange={(e) => setText(e.target.value)}
            />
            <button type="button" className="font-inter text-[13px] font-semibold text-secondary">
              Request Beta
            </button>
          </form>

          <div className="flex items-center">
            <Image src="/logo-black.png" alt="" width={18} height={40} />
            <span className="font-medium text-sm ml-5 font-idle leading-4 text-primary">
              PICLAB
            </span>
          </div>

          <div className="flex -items-center">
            <Image src="/signin.svg" alt="" width={17} height={22} />
            <button className="font-inter font-semibold text-sm text-secondary ml-3">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
