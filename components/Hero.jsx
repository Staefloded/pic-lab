import Image from "next/image";
import heroimg from "../public//hero-img.png";

export default function Hero() {
  return (
    <div className="bg-primary h-screen w-full text-white">
      <div className=" flex items-start justify-between pl-[68px] h-full">
        <div className="flex flex-col min-h-full justify-around flex-[0.3]">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="" width={18} height={40} />
            <span className="font-medium text-sm ml-5 font-idle leading-4">PICLAB</span>
          </div>

          <div className="">
            <div className="uppercase text-[8px] font-medium border font-idle border-white p-1 rounded-md max-w-max mb-5">
              Coming Summer 2021
            </div>

            <h3 className="text-3xl font-inter font-normal">
              Powerful image <br /> <span className="font-semibold">asset management</span> <br />
              for everyone.
            </h3>
          </div>

          <p className="font-inter text-[13px] leading-[18px] font-medium border-l-2 border-white pl-8 max-w-[250px] w-full ">
            <span className="font-bold opacity-100">Organize, transform, & serve</span>{" "}
            <span className="opacity-70">
              your entire photo library. The perfect image management app for freelancers,
              organizations, & web developers.
            </span>
          </p>
        </div>

        <div className="flex-1 w-full relative h-full">
          <Image
            src={heroimg}
            placeholder="blur"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
