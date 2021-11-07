export default function Tags({ title, top, left, right, bottom }) {
  return (
    <div
      className={`inline-block px-[14px] py-[5px] absolute rounded-[50px] filter border-2 border-white z-20`}
      style={{ top: top, left: left, bottom: bottom, right: right }}
    >
      <span className="text-white opacity-30 text-[17px] font-inter pr-[10px]">#</span>{" "}
      <span className="text-white text-[17px] font-inter">{title}</span>
    </div>
  );
}
