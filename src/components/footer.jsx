import Logo from "../assets/logo(8).png";
import Hope from "../assets/hope.jpg";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className="mb-2 flex justify-between bg-black px-7 py-5 text-white">
        <div className="mt-10">
          <div className="flex gap-5">
          <Link to='/'>
          <img
              src={Logo}
              alt="Brand Logo"
              className="w-[5rem] rounded-lg border border-b-gray-500 bg-white mb-3"
            />
          </Link>
       
            <div className="mt-7">
              <p className="mb-2 font-semibold">Phone:+234-0901223-GENESIS</p>
              <h1 className="mb-2 font-semibold">Email: Info@GENESIS.COM</h1>
            </div>
          </div>

          <div>
            <h1 className="mb-2 font-semibold ">Address: Genesis Street Nigeria</h1>
            <p className="mb-2 font-semibold"><span className="text-blue-500">Copyright:</span> &copy; 2024. Genesis. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col ">
          <Link to='/about_us' className="mb-2 font-semibold ">About Us</Link>
          <Link to='/contact_us' className="mb-2 font-semibold">Contact Us</Link>
          <Link to='/how_to_use' className="mb-2 font-semibold">How To Use</Link>
        </div>

        <div className="mt-10 flex flex-col">
          <Link to='/terms&conditions' className="mb-2 font-semibold">Terms & Conditions</Link>
          <Link to="/privacy" className="mb-2  font-semibold">Privacy</Link>
        </div>

        <div className="mt-10">
          <img src={Hope} alt="Image" className="w-[20rem]"/>
        </div>
      </section>
    </>
  );
};

export default Footer;
