/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AnimationWrapper from "../common/page_animation";
import candle from "../assets/logo(8).png";
import InputBox from "../components/input";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/sessions";
import { UserContext } from "../App";
import { authWithGoogle } from "../common/firebase";

const UserAuthForm = ({ type }) => {
  // const authForm = useRef();

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  console.log(access_token);

  // const userAuthThroughServer = (serverRoute, formData) => {
  //   axios
  //     .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
  //     .then(({ data }) => {
  //       storeInSession("user", JSON.stringify(data));
  //       setUserAuth(data);
  //     })
  //     .catch(({ response }) => {
  //       toast.error(response.data.error);
  //     });
  // };

  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then((response) => {
        if (response.data) {
          const data = response.data; // Access `data` directly
          storeInSession("user", JSON.stringify(data));
          setUserAuth(data);
        } else {
          toast.error("Unexpected server response");
        }
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.error || "An error occurred";
        toast.error(errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute =
      type === "sign-in" ? "/api/v1/user/signin" : "/api/v1/user/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email***********************
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password***************************

    //formdata****************************************************

    let form = new FormData(formElement);
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { fullname, email, password } = formData;

    //form validation/////**************************************************** */

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("Fullname must be at least 3 letters long");
      }
    }

    if (!email.length) {
      return toast.error("Enter Email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is Invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letters ",
      );
    }
    userAuthThroughServer(serverRoute, formData);
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();

    authWithGoogle()
      .then((user) => {
        let serverRoute = "/google-auth";

        let formData = {
          access_token: user.accessToken,
        };

        userAuthThroughServer(serverRoute, formData);
      })

      .catch((err) => {
        toast.error("Trouble trying to login through google");
        return console.log(err);
      });
  };

  return access_token ? (
    <Navigate to="/userDashboard" />
  ) : (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center my-10">
        <Toaster />
        <form id="formElement" className="w-[80%] max-w-[400px] border border-gray-200 shadow-lg rounded-md p-6">
          <img
            src={candle}
            alt="image"
            style={{ width: "80px", display: "block", margin: "0 auto" }}
          />
          <h1 className="font-gelasio mb-10 mt-3 text-center text-xl capitalize">
            {type == "sign-in" ? "Welcome Hero!" : "Become a Voice of Hope"}
          </h1>

          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="bi-person"
            />
          ) : (
            " "
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="E-mail"
            icon="bi-envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="bi-key"
          />

          <button
            className="btn center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace("-", " ")}
          </button>

          <div className="relative my-10 flex w-full items-center gap-2 font-bold uppercase text-black opacity-10">
            <hr className="w-1/2 border-black" />
            <p className="">or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            className="btn center w-[90%] items-center gap-4 bg-black text-white"
            onClick={handleGoogleAuth}
          >
            <i
              className="bi bi-google"
              style={{ color: "red", padding: "0.5rem" }}
            ></i>
            Continue With Google
          </button>

          {type == "sign-in" ? (
            <p className="mt-6 text-center text-sm text-gray-500">
              Dont have an account ?
              <Link to="/signup" className="ml-1 text-sm text-black underline">
                Register Today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-center text-sm text-gray-500">
              Already a member ?
              <Link to="/signin" className="ml-1 text-sm text-black underline">
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
