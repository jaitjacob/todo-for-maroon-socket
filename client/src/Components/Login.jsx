import {FaUser,FaLock, FaFacebook, FaGoogle} from "react-icons/fa"
import login from "../assets/login.jpg";

const Inputbox = ({ icon, type, placeholder, value, onChange, name }) => {
  return (
    <div className="border rounded-lg border-[1px] border-gray-400 p-3 flex items-center gap-4 shadow">
      <span>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-none bg-transparent focus:outline-none"
      />
    </div>
  );
};

const Login = ()=>{

    const handleLoginSubmit = ()=>{
    e.preventDefault();
    // API Call or other
    }
    return(
        <div className="w-full h-full flex justify-around bg-white py-4 rounded-[20px]" >
            <div className = "v-full w-1/3 flex justify-center flex-col gap-4 ">
                <h2 className="text-3xl font-bold text-start" >Login</h2>
                <form className = "h-full flex flex-col gap-3" onSubmit={handleLoginSubmit}>
                    <Inputbox icon={<FaUser />} type="text" placeholder="Enter Username" />
                    <Inputbox icon={<FaLock />} type="password" placeholder="Enter Password" />
                    <div className="flex gap-4">
                        <input type="checkbox" id="remember" /> 
                        <label htmlFor="remember" className="text-sm">Remember Me</label>
                    </div>
                    <button className="w-32 h-12 p-3 bg-primary rounded-md text-white" type="submit">Login</button>
                </form>
                <div className="flex justify-center flex-horizontal gap-2">
                    <p>Or, login with </p>
                    <FaFacebook className="text-2xl" />
                    <FaGoogle className="text-2xl" />
                </div>
                <div className="flex justify-center gap-1">
                    <p className="text-sm">Don't have an account?</p>
                    <p className="text-sm text-blue-500 cursor-pointer"> Create One</p> 
                </div>
            </div>

            <div className="h-full w-2/5">
                <img src={login} className=" object-cover" alt="Login illustration"/>
            </div>
        </div>
    )

}

export default Login