import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { ThemeContext } from "../Theme/ThemeContext";
import { UserContext } from "../UserContext/UserContext";
import loader from "../../assets/Infinity-0.7s-71px.svg";

const UserCard = () => {
  // Get the darkMode and userData from the respective contexts
  const { darkMode } = useContext(ThemeContext);
  const { userData, showLoader } = useContext(UserContext);

  // If userData is not available, display a loading message or "No User Available"
  if (!userData) {
    return (
      <main
        className={`w-full md:w-11/12 lg:w-10/12 2xl:lg:w-9/12 mx-auto  rounded-lg ${
          darkMode ? "bg-blue-900" : " bg-white "
        }  shadow-xl mt-5`}
      >
        <p
          className={`${
            darkMode ? "text-white" : "text-blue-600"
          } font-mono text-sm md:text-base lg:text-xl font-normal leading-normal text-center py-10`}
        >
          {showLoader ? (
            <img src={loader} alt="loader" className="mx-auto" />
          ) : (
            "No User Available"
          )}
        </p>
      </main>
    );
  }

  // If userData is available, display user information
  return (
    <main
      className={`w-11/12 md:w-11/12 lg:w-10/12 2xl:lg:w-9/12 mx-auto rounded-lg ${
        darkMode ? "bg-blue-900" : "bg-white"
      } shadow-xl mt-5`}
    >
      <section className="flex flex-col w-full md:w-11/12 justify-between mx-auto px-5 py-10">
        <div className="flex items-center md:gap-5 lg:gap-7">
          <div>
            <img
              src={userData.avatar_url}
              alt="user_img"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
            />
          </div>
          <div className="w-2/3 flex flex-col lg:w-3/4 lg:flex-row lg:gap-32 px-5 lg:px-2 relative lg:bottom-5 lg:first-line:bottom-7 xl:px-9 2xl:px-14">
            <div>
              <p
                className={`${
                  darkMode ? "text-white" : "text-blue-800"
                } font-mono text-lg md:text-xl lg:text-2xl font-bold leading-normal`}
              >
                {userData.name || userData.login}
              </p>
              <p className="text-blue-500 font-mono text-xs md:text-sm lg:text-lg font-normal leading-normal">
                @{userData.login}
              </p>
            </div>
            <div className="relative lg:left-20 xl:left-52">
              <p
                className={`${
                  darkMode ? "text-white" : "text-blue-600"
                } font-mono text-xs md:text-sm lg:text-lg font-normal leading-6`}
              >
                Joined{" "}
                {new Date(userData.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-5 lg:w-10/12 lg:left-32 xl:left-36 xl:px-12 lg:px-8 lg:mt-0 lg:bottom-5 2xl:left-44 2xl:px-10">
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-sm md:text-base lg:text-xl font-normal leading-6`}
          >
            {userData.bio || "No bio available."}
          </p>
        </div>
      </section>
      <section
        className={`w-11/12 mx-auto relative lg:bottom-12 gap-10 flex px-8 py-8 md:gap-24 rounded-lg ${
          darkMode ? "dark-Mode" : "bg-blue-100"
        } lg:w-2/3  lg:px-10 lg:mt-0 bottom-7 lg:left-20`}
      >
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-xs md:text-base font-normal leading-normal`}
          >
            Repos
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-900"
            } font-mono text-xs md:text-xl font-bold leading-normal uppercase`}
          >
            {userData.public_repos}
          </p>
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-xs md:text-base font-normal leading-normal`}
          >
            Followers
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-900"
            } font-mono text-xs md:text-xl font-bold leading-normal uppercase`}
          >
            {userData.followers}
          </p>
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-xs md:text-base font-normal leading-normal`}
          >
            Following
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-900"
            } font-mono text-xs md:text-xl font-bold leading-normal uppercase`}
          >
            {userData.following}
          </p>
        </div>
      </section>
      <section className="w-11/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-4 py-7 items-start lg:w-2/3 lg:left-20 lg:px-2 lg:mt-0 lg:bottom-7">
        <div className="flex items-center gap-2">
          <FaLocationDot className={`${darkMode ? "text-white" : ""}`} />
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-sm md:text-lg font-normal leading-normal`}
          >
            {userData.location || "Location not available."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaTwitter className={`${darkMode ? "text-white" : ""}`} />
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-sm md:text-lg font-normal leading-normal`}
          >
            {userData.twitter_username || "Twitter not available."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsLink45Deg className={`${darkMode ? "text-white" : ""}`} />
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-sm md:text-lg font-normal leading-normal`}
          >
            {userData.blog || "Website not available."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiBuildingOffice2 className={`${darkMode ? "text-white" : ""}`} />
          <p
            className={`${
              darkMode ? "text-white" : "text-blue-600"
            } font-mono text-sm md:text-lg font-normal leading-normal`}
          >
            {userData.company || "Company not available."}
          </p>
        </div>
      </section>
    </main>
  );
};

export default UserCard;
