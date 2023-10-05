import { FaLocationDot } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
const UserCard = () => {
  return (
    <main className="sm:w-full mx-auto  rounded-lg bg-white shadow-xl mt-5">
      <section className="flex flex-col sm:w-full justify-between mx-auto px-10 py-10">
        <div className="flex items-center">
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/118350559?v=4"
              alt="user_img"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="w-2/3 flex flex-col px-5">
            <div>
              <p className="text-blue-800 font-mono text-lg font-bold leading-normal">
                the_codeVersa
              </p>
              <p className="text-blue-500 font-mono text-xs font-normal leading-normal">
                @akasi-mp
              </p>
            </div>
            <div>
              <p className="text-blue-600 font-mono text-xs font-normal leading-6">
                Joined Jan 06 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-5">
          <p className="text-blue-600 font-mono text-base font-normal leading-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
      </section>
      <section className="w-10/12 mx-auto relative gap-10 flex px-10 py-8 items-center justify-center rounded-lg bg-blue-100">
        <div>
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            Repos
          </p>
          <p className="text-blue-900 font-mono text-lg font-bold leading-normal uppercase">
            57
          </p>
        </div>
        <div>
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            Followers
          </p>
          <p className="text-blue-900 font-mono text-lg font-bold leading-normal uppercase">
            4578
          </p>
        </div>
        <div>
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            Following
          </p>
          <p className="text-blue-900 font-mono text-lg font-bold leading-normal uppercase">
            23
          </p>
        </div>
      </section>
      <section className="w-10/12 mx-auto relative grid grid-cols-1 gap-4 py-7 items-start">
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            Accra, Ghana
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaTwitter />
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            Not Available
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsLink45Deg />
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            https://github.blog
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiBuildingOffice2 />
          <p className="text-blue-600 font-mono text-sm font-normal leading-normal">
            @github
          </p>
        </div>
      </section>
    </main>
  );
};
export default UserCard;
