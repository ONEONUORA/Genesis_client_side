import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "../common/page_animation";
import { UserContext } from "../App";
import { useContext } from "react";
import { removeFromSession } from "../common/sessions";

const UserNavigation = () => {
    const navigate = useNavigate()
  const {
    userAuth: { username },
    setUserAuth,
  } = useContext(UserContext);

  const signOutUser = () => {
    removeFromSession("user");
    setUserAuth({ access_token: null });
    navigate('/')
    
  };
  return (
    <>
      <AnimationWrapper
        className="absolute right-0 z-50"
        transition={{ duration: 0.2 }}
      >
        <div className="border-grey absolute right-0 w-60 border bg-white duration-200">
          <Link to={`/user/${username}`} className="link py-4 pl-8">
            Profile
          </Link>

          <Link to="/settings/edit-profile" className="link py-4 pl-8">
            Settings
          </Link>

          <span className="border-gray-900 absolute w-[100%] border-t"></span>

          <button
            className="hover:bg-gray-500 hover:text-white w-full p-4 py-4 pl-8 text-left"
            onClick={signOutUser}
          >
            <h1 className="mg-1 text-xl font-bold ">Sign Out</h1>
            <p className="text-dark-grey">
              <strong>@</strong>
              {username}
            </p>
          </button>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default UserNavigation;
