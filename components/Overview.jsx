import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Tags from "./Tags";

export default function Overview({ overview }) {
  return (
    <div className="bg-overview w-full h-[100vh] bg-no-repeat bg-cover">
      <div className="pt-[100px] h-full w-full relative">
        <Tags title="Pencils" top="33%" left="-65px" />
        <Tags title="Person" bottom="33%" left="6%" />
        <Tags title="Desk" bottom="45%" left="11%" />
        <Tags title="Person" top="30%" left="20%" />
        <Tags title="Pencils" bottom="43%" right="44%" />
        <Tags title="Scenery" bottom="30%" right="35%" />

        <div className="bg-white rounded-[9px] shadow-2xl absolute right-20 top-32 px-[35px] py-[25px] max-w-[340px] w-full">
          <span className="text-primary-one font-inter font-normal text-xs">
            {overview?.overview_category}
          </span>

          <PrismicRichText
            field={overview["overview_title"]}
            components={{
              heading3: (props) => (
                <h3 className="text-primary-dark font-medium text-[22px] font-inter my-4">
                  {props.children}
                </h3>
              ),
              strong: (props) => (
                <strong style={{ color: overview?.color_highlight, fontWeight: 500 }}>
                  {props.children}
                </strong>
              ),
            }}
          />

          <div className="w-full text-center py-[70px]">
            <Image src={overview?.overview_image?.url} alt="" width={103} height={89} />
          </div>

          <PrismicRichText
            field={overview["overview_content"]}
            components={{
              paragraph: (props) => (
                <p className="text-[13px] font-inter font-normal text-primary-dark opacity-7">
                  {props.children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
