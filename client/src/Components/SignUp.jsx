import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaUserEdit, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Lock } from 'react-feather';
import signup from '../assets/Signup.jpg';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [terms, setTerms] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    // API Call or other
  };

  return (
    <div className="w-full h-[86vh] flex justify-around bg-white py-4 ">
      <div className="h-full w-2/5">
        <img
          src={signup}
          className=" object-cover"
          alt="Sign up illustration"
        />
      </div>

      {/** Signup Container */}
      <div className="bg-white w-2/5 h-full flex flex-col justify-center items-start gap-4">
        <h2 className="text-3xl font-bold text-start">Sign Up</h2>
        <form
          className="w-full  flex flex-col justify-center items-start gap-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow">
            <span className="self-center ">
              <FaUserEdit className="text-2xl" />
            </span>
            <input
              className="w-full border-none focus:outline-none"
              type="text"
              value={newUser.firstName}
              placeholder="Enter First Name"
              name="firstName"
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow ">
            <span className="self-center ">
              <FaUserEdit className="text-2xl" />
            </span>
            <input
              className=" w-full border-none focus:outline-none"
              type="text"
              value={newUser.lastName}
              name="lastName"
              placeholder="Enter Last Name"
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow">
            <span className="self-center">
              <FaUser className="text-black text-xl bg-transparent" />
            </span>
            <input
              className="w-full border-none focus:outline-none"
              type="text"
              value={newUser.userName}
              name="userName"
              placeholder="Enter Username"
              onChange={(e) =>
                setNewUser({ ...newUser, userName: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow">
            <span>
              <FaEnvelope className=" text-xl" />
            </span>
            <input
              className="w-full border-none focus:outline-none"
              type="email"
              value={newUser.email}
              name="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow ">
            <span>
              <FaLock className="text-xl" />
            </span>
            <input
              className="w-full border-none focus:outline-none"
              type="password"
              value={newUser.password}
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 rounded-md bg-white border-[2px] border-gray-400 py-3 px-5 shadow">
            <span>
              <Lock className="text-xl" />
            </span>
            <input
              className="w-full border-none focus:outline-none"
              type="password"
              value={newUser.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) =>
                setNewUser({ ...newUser, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center gap-3 ">
            <input
              id="terms"
              className="size-4 self-center"
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to all terms
            </label>
          </div>

          <button
            className={`w-32 h-12 p-3 bg-primary rounded-md text-white ${terms ? '' : ' cursor-not-allowed'}`}
            disabled={!terms}
          >
            Register
          </button>

          <div className="flex justify-center gap-1">
            <p className="text-sm">Already have an account?</p>
            <p className="text-sm text-blue-500 cursor-pointer"><Link to="/">Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
