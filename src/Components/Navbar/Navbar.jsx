import { BsMoonStarsFill,  } from "react-icons/bs";

const Navbar = () => {
  return (
    <main>
        <section>
            <p>devfinder</p>
        </section>
        <section>
            <p className="uppercase">dark</p>
            {/* <p className="uppercase">light</p> */}
            <BsMoonStarsFill />
            {/* <BsFillSunFill /> */}
        </section>
    </main>
  )
}
export default Navbar

// BsFillSunFill;