import { PrismicProvider, PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export default function FeaturesItem({ data }) {
  return (
    <div className="bg-white max-w-lg w-full rounded-[14px] pt-[32px] flex-shrink-0">
      <div className="pl-[37px] mb-14 max-w-sm">
        <span className="text-primary-one font-inter font-normal text-xs">{data?.category}</span>

        <PrismicRichText
          field={data["title"]}
          components={{
            heading3: (props) => (
              <h3 className="text-primary-dark font-medium text-[22px] font-inter my-4">
                {props.children}
              </h3>
            ),
            strong: (props) => (
              <strong style={{ color: data?.title_color, fontWeight: 500 }}>
                {props.children}
              </strong>
            ),
          }}
        />

        <PrismicRichText
          field={data["content"]}
          components={{
            paragraph: (props) => (
              <p className="text-[13px] font-inter font-normal text-primary-dark opacity-7">
                {props.children}
              </p>
            ),
          }}
        />
      </div>
      <div className="relative p-3">
        <Image
          src={data?.image?.url}
          alt=""
          layout="responsive"
          width={700}
          height={400}
          objectFit="cover"
          className="rounded-md"
          priority
        />
      </div>
    </div>
  );
}
