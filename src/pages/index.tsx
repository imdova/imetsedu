// Importing the Card component for displaying card-styled content
import Card from "@/Components/Card";

// Importing the Checkbox component for rendering checkbox inputs
import Checkbox from "@/Components/Checkbox";

// Importing the Rating component for displaying a rating system
import Rating from "@/Components/Rating";

// import images
import image_1 from "../images/image-1.jpg";
import image_2 from "../images/image-2.jpg";
import image_3 from "../images/image-3.jpg";
import image_4 from "../images/image-4.jpg";
import image_5 from "../images/image-5.jpg";
import image_6 from "../images/image-6.jpg";
import image_7 from "../images/image-7.jpg";
import image_8 from "../images/image-8.jpg";
import image_9 from "../images/image-9.jpg";
import image_10 from "../images/image-10.jpg";
import image_11 from "../images/image-11.jpg";
import image_12 from "../images/image-12.jpg";

export default function Home() {
  // list for Array of image for mapping
  const arrImg = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];
  return (
    <div className="mt-14">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        {/* start slidbar content */}
        <div className="slidebar w-full md:w-[300px]">
          <div className="box-slidebar mb-5">
            {/* category box  */}
            <h2 className="font-bold">Categories</h2>
            <div className="py-3">
              <Checkbox name="Category Name (8)" id={"Category-1"} />
              <Checkbox name="Category Name (11)" id={"Category-2"} />
              <Checkbox name="Category Name (15)" id={"Category-3"} />
              <Checkbox name="Category Name (21)" id={"Category-4"} />
              <Checkbox name="Category Name (44)" id={"Category-5"} />
              <Checkbox name="Category Name (18)" id={"Category-6"} />
              <a
                className="flex items-center gap-2 text-sm text-[#2BA149] "
                href="#">
                Show more
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
          <div className="box-slidebar mb-5">
            {/* Language box  */}
            <h2 className="font-bold">Language</h2>
            <div className="py-3">
              <Checkbox name="All Language" id={"Language-1"} />
              <Checkbox name="Arabic (11)" id={"Language-2"} />
              <Checkbox name="English (53)" id={"Language-3"} />
              <Checkbox name="Spanish (22)" id={"Language-4"} />
              <a
                className="flex items-center gap-2 text-sm text-[#2BA149] "
                href="#">
                Show more
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
          <div className="box-slidebar mb-5">
            {/* Price box  */}
            <h2 className="font-bold">Price</h2>
            <div className="py-3">
              <Checkbox name="All Price" id={"Price-1"} />
              <Checkbox name="Free" id={"Price-2"} />
              <Checkbox name="Paid" id={"Price-3"} />
            </div>
          </div>
          <div className="box-slidebar mb-5">
            <h2 className="font-bold">Skill level</h2>
            <div className="py-3">
              <Checkbox name="All Skills" id={"Skills-1"} />
              <Checkbox name="Beginner (55)" id={"Skills-2"} />
              <Checkbox name="Intermediate (22)" id={"Skills-3"} />
              <Checkbox name="High (42)" id={"Skills-4"} />
            </div>
          </div>
          <div className="box-slidebar mb-5">
            {/* Instructors box  */}
            <h2 className="font-bold">Instructors</h2>
            <div className="py-3">
              <Checkbox name="David Millar (10)" id={"Instructors-1"} />
              <Checkbox name="Wade Warren (13)" id={"Instructors-2"} />
              <Checkbox name="Jenny Wilson (22)" id={"Instructors-3"} />
              <Checkbox name="Jacob Jones (42)" id={"Instructors-4"} />
              <a
                className="flex items-center gap-2 text-sm text-[#2BA149] "
                href="#">
                Show more
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
          <div className="box-slidebar mb-5">
            {/* rating box  */}
            <h2 className="font-bold">Ratings</h2>
            <div className="py-3">
              <Checkbox
                name={
                  <>
                    <Rating /> (52)
                  </>
                }
                id={"Rating-1"}
              />
              <Checkbox
                name={
                  <>
                    <Rating /> (30)
                  </>
                }
                id={"Rating-2"}
              />
              <Checkbox
                name={
                  <>
                    <Rating /> (40)
                  </>
                }
                id={"Rating-3"}
              />
              <Checkbox
                name={
                  <>
                    <Rating /> (22)
                  </>
                }
                id={"Rating-4"}
              />
              <Checkbox
                name={
                  <>
                    <Rating /> (70)
                  </>
                }
                id={"Rating-5"}
              />
            </div>
          </div>
          <div className="box-slidebar flex justify-between items-center mb-5 !bg-[#2BA149] !text-white">
            <span>Filter</span>
            <span>
              <i className="bx bx-filter-alt"></i>
            </span>
          </div>
        </div>
        {/* start content grid of Courses */}
        <div className="flex-1">
          {/* Filter content */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
            <span className="text-sm mb-2 sm:mb-0">
              Showing 250 total results
            </span>
            <div className="flex items-center  gap-3">
              <span className="text-sm text-gray-500">Sort By:</span>
              <select className="p-2 border rounded-lg outline-none">
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
              </select>
              <div className="flex gap-3">
                <button className="flex justify-center items-center w-8 h-8 border  border-[#2BA149] text-white bg-[#2BA149] hover:bg-[#2BA149] hover:text-white rounded-md">
                  <i className="bx bx-category"></i>
                </button>
                <button className="flex justify-center items-center w-8 h-8 border border-[#2BA149] text-[#2BA149] hover:bg-[#2BA149] hover:text-white rounded-md">
                  <i className="bx bx-list-ul"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-3">
            {arrImg.map((e, index) => {
              return (
                <div key={index}>
                  <Card image={e} />
                </div>
              );
            })}
          </div>
          <div className="my-6">
            <ul className="flex gap-4 justify-center items-center">
              <li className="flex justify-center items-center bg-[#2BA149] text-white w-10 h-10 rounded-full">
                1
              </li>
              <li className="flex justify-center items-center bg-gray-200 text-black w-10 h-10 rounded-full">
                2
              </li>
              <li className="flex justify-center items-center bg-gray-200 text-black w-10 h-10 rounded-full">
                3
              </li>
              <li className="flex justify-center items-center bg-gray-200 text-black w-10 h-10 rounded-full">
                4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
