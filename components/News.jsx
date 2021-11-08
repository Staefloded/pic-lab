import { PrismicRichText } from "@prismicio/react";

export default function News({ news }) {
  return (
    <div className="bg-news w-full h-screen bg-no-repeat bg-cover bg-top ">
      <div className="flex items-center justify-center md:justify-start h-full md:px-[100px]  px-10">
        <div className="text-white font-inter max-w-[420px] flex flex-col items-start justify-between max-h-[55vh] h-full ">
          <PrismicRichText
            field={news["news_title"]}
            components={{
              heading3: (props) => <h3 className="font-normal text-3xl">{props.children}</h3>,
            }}
          />

          {news?.news_list?.map((item, idx) => (
            <div
              className="flex items-start flex-col sm:flex-row gap-5 sm:gap-20 w-full border-line pb-14 2xl:pb-[70px]"
              key={idx}
            >
              <span className="text-xs opacity-40 flex-shrink-0 uppercase">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(item?.date))}
              </span>

              <PrismicRichText
                field={item["title"]}
                components={{
                  heading3: (props) => (
                    <h3 className="font-medium underline  text-[19px]">{props.children}</h3>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
