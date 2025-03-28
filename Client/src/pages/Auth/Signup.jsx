import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../Utils/helper";
import PofilePhotoSelector from "../../components/Inputs/PofilePhotoSelector";
import { API_PATHS } from "../../Utils/apiPath";
import axiosInstance from "../../Utils/axiosInstance";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../Utils/uploadImage";
import AuthLayout from "../../components/layout/AuthLayout";

const Signup = () => {
  const [profilPic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { updateUser } = useContext(UserContext);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle Signup form submit
  const handleSignUP = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    //signup api call
    try {
      // upload image if present
      if (profilPic) {
        const imgUploadRes = await uploadImage(profilPic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        profileImageUrl,
        password,
      }); //Sends a POST request to the server with the email and password as payload.

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashbord");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUP}>
          <PofilePhotoSelector image={profilPic} setImage={setProfilePic} />
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Signup;
