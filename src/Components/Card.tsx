import Image, { StaticImageData } from "next/image";

type CardProps = {
  name?: string;
  image: StaticImageData;
  language?: string;
  Instructor?: string;
  price?: number;
};
export default function Card(props: CardProps) {
  return (
    <div className="p-5 border rounded-lg">
      <div className="w-full overflow-hidden rounded-md mb-3 h-40">
        <Image
          className="w-full h-full object-cover"
          src={props.image} // Dynamically sets the image source from the props
          alt="image-content"
        />
      </div>
      <div className="flex justify-between w-full mb-3">
        <span className="bg-gray-100 p-1 px-4 text-xs rounded-xl">English</span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <i className="bx bxs-star text-orange-400"></i>(4.8 Reviews)
        </span>
      </div>
      <h1 className="mb-3">Course Name here</h1>
      <div className="text-xs text-gray-500 mb-3">
        by <span className="text-black">Instructor Here</span>
      </div>
      <div className="flex justify-between w-full mb-3">
        <button className="flex items-center p-2 px-3 gap-1 text-white bg-[#2BA149] rounded-2xl text-xs">
          Book Trial <i className="bx bx-right-arrow-alt"></i>
        </button>
        <span className="flex items-center gap-1 font-semibold text-[#2BA149]">
          $15.00
        </span>
      </div>
    </div>
  );
}
