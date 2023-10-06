import { FaLocationDot } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
const UserCard = () => {
  return (
    <main className="w-11/12  md:w-11/12 mx-auto  rounded-lg bg-white shadow-xl mt-5">
      <section className="flex flex-col w-full md:w-11/12 justify-between mx-auto px-5 py-10">
        <div className="flex items-center md:gap-5 lg:gap-7">
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/118350559?v=4"
              alt="user_img"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
            />
          </div>
          <div className="w-2/3 flex flex-col lg:w-3/4 lg:flex-row lg:gap-32 px-5 lg:px-0 relative lg:first-line:bottom-7">
            <div>
              <p className="text-blue-800 font-mono text-lg md:text-xl lg:text-2xl font-bold leading-normal">
                the_codeVersa
              </p>
              <p className="text-blue-500 font-mono text-xs md:text-sm lg:text-lg font-normal leading-normal">
                @akasi-mp
              </p>
            </div>
            <div className="relative">
              <p className="text-blue-600 font-mono text-xs md:text-sm lg:text-lg font-normal leading-6 ">
                Joined Jan 06 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-5 lg:w-10/12 lg:left-38 lg:px-3 lg:mt-0 lg:bottom-10">
          <p className="text-blue-600 font-mono text-sm md:text-base lg:text-xl font-normal leading-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
      </section>
      <section className="w-11/12 mx-auto relative lg:bottom-12 gap-16 flex px-10 py-8 md:gap-24 rounded-lg bg-blue-100 lg:w-2/3  lg:px-2 lg:mt-0 bottom-7">
        <div>
          <p className="text-blue-600 font-mono text-sm md:text-base font-normal leading-normal">
            Repos
          </p>
          <p className="text-blue-900 font-mono text-sm md:text-xl font-bold leading-normal uppercase">
            57
          </p>
        </div>
        <div>
          <p className="text-blue-600 font-mono text-sm md:text-base font-normal leading-normal">
            Followers
          </p>
          <p className="text-blue-900 font-mono text-sm md:text-xl font-bold leading-normal uppercase">
            4578
          </p>
        </div>
        <div>
          <p className="text-blue-600 font-mono text-sm md:text-base font-normal leading-normal">
            Following
          </p>
          <p className="text-blue-900 font-mono text-sm md:text-xl font-bold leading-normal uppercase">
            23
          </p>
        </div>
      </section>
      <section className="w-11/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-4 py-7 items-start lg:w-2/3 lg:left-20 lg:px-2 lg:mt-0 lg:bottom-7">
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <p className="text-blue-600 font-mono text-sm md:text-lg font-normal leading-normal">
            Accra, Ghana
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaTwitter />
          <p className="text-blue-600 font-mono text-sm md:text-lg font-normal leading-normal">
            Not Available
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsLink45Deg />
          <p className="text-blue-600 font-mono text-sm md:text-lg font-normal leading-normal">
            https://github.blog
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiBuildingOffice2 />
          <p className="text-blue-600 font-mono text-sm md:text-lg font-normal leading-normal">
            @github
          </p>
        </div>
      </section>
    </main>
  );
};
export default UserCard;
