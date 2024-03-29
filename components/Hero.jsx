import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import heroimg from "../public/hero-img.png";
import heroOne from "../public/hero-one.png";
import heroTwo from "../public//hero-two.png";
import heroThree from "../public//hero-three.png";
import Tags from "./Tags";

export default function Hero({ hero }) {
  return (
    <div className="bg-primary h-screen w-full text-white">
      <div className=" flex items-start justify-between flex-col md:flex-row  xl:pl-[68px] h-full relative  overflow-hidden">
        <div className="flex flex-col min-h-full justify-around pb-20 px-5 md:flex-[0.5] lg:flex-[0.3] gap-5 overflow-hidden">
          <div className="flex items-center overflow-hidden">
            <Image src="/logo.svg" alt="" width={18} height={40} />
            <span className="font-medium text-sm ml-5 font-idle leading-4">PICLAB</span>
          </div>

          <div>
            <div className="uppercase text-[8px] font-medium border font-idle border-white p-1 rounded-md max-w-max mb-5">
              Coming Summer 2021
            </div>

            <PrismicRichText
              field={hero["hero_title"]}
              components={{
                heading1: (props) => (
                  <h1 className="text-3xl font-inter font-normal">{props.children}</h1>
                ),
              }}
            />
          </div>

          <PrismicRichText
            field={hero["hero_content"]}
            components={{
              paragraph: (props) => (
                <p className="font-inter text-[13px] leading-[18px] font-medium border-l-2 border-white pl-8 max-w-[250px] w-full">
                  {props.children}
                </p>
              ),
            }}
          />
        </div>

        <div className="flex-1 w-full relative h-full hidden md:block">
          <Image
            src={heroimg}
            placeholder="blur"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
          />
          <Tags title="Scenery" top="250px" right="-50px" />

          <div className="absolute top-[5%] left-[36%] z-10">
            <div className="inline-block relative w-[350px] h-[350px] object-cover">
              <Image
                layout="responsive"
                height={100}
                width={100}
                objectFit="cover"
                alt=""
                src={heroOne}
                priority
              />
              <Tags title="Person" top="30%" left="-20px" />
              <Tags title="Pencil" top="20%" right="-50%" />
            </div>
          </div>
          <div className="absolute top-40 left-[600px] z-10">
            <div className="inline-block relative w-[250px] h-[250px] object-cover">
              <Image
                layout="responsive"
                height={100}
                width={100}
                objectFit="cover"
                alt=""
                src={heroThree}
                placeholder="blur"
                priority
              />
              <Tags title="Water" bottom="-40%" right="25%" />
            </div>
          </div>
          <div className="absolute bottom-[7%] left-[11%] z-10">
            <div className="inline-block relative w-[250px] h-[250px] object-cover">
              <Image
                layout="responsive"
                height={100}
                width={100}
                objectFit="cover"
                alt=""
                src={heroTwo}
                placeholder="blur"
                priority
              />
              <Tags title="Desk" top="20px" right="-20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
