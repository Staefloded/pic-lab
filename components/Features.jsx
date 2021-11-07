import { PrismicRichText } from "@prismicio/react";
import FeaturesItem from "./FeaturesItem";

function Features({ features }) {
  return (
    <div className="bg-primary h-screen w-full pt-20 relative flex justify-between flex-col">
      <PrismicRichText
        field={features["features_title"]}
        components={{
          heading3: (props) => (
            <h3 className="font-inter text-center text-3xl text-white max-w-sm mx-auto">
              {props.children}
            </h3>
          ),
        }}
      />

      <div className="relative -bottom-20">
        <div className="max-w-full flex justify-between gap-x-3 items-center overflow-x-scroll vertical-scroll-hide px-[71px]">
          {features?.features_item?.map((item, idx) => (
            <FeaturesItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
