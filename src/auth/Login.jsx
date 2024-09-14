import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import LockScreen from "./Lockscreen";

import axios from 'axios';
 
export default function Login(){

    const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => {
    setIsLocked(false);
    console.log("Unlock");
  };

    const [formLogin, setFormLogin] = useState({});
    const [loading, setLoading] = useState(false);

    const changeInput = (e) => {
        const { name, value } = e.target;

        setFormLogin(prevState => ({
          ...prevState,
          [name]: value,
        }));

    };

    const handleLogin = (e) => {
        e.preventDefault();
        // checkLogin(formLogin);
        // console.log(formLogin);
        // setLoading(true);
        location.replace("/");
      };

      const checkLogin = async (userData) => {
        try {
            const response = await axios.post('http://www.tempat-transit.cloud:3005/api/v1/login', userData);
            if(response.status = 200){
                setLoading(false);
            }
        } catch (error) {
            if (error.response) {
                console.error('Response errora:', error.response.status);
                console.error('Response data:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <>
            <div className="absolute bg-[url('img/bg.png')] w-screen h-screen p-0 m-[0px] top-0 left-0 bg-cover bg-center">
                <div className="bg-black/40 w-screen h-screen flex justify-center items-center">
                    <form onSubmit={handleLogin} className="bg-white w-[90%] md:[20%] h-[60%] lg:w-[40%] lg:h-[60%] rounded-xl shadow-lg shadow-black ">
                        <div className="flex w-full h-full">
                            <div className="bg-[url('img/lf_bg.png')] hidden w-[80%] h-[100%] bg-cover bg-center">
                                <div className=" flex text-left">
                                    <div className="p-5 rotate-90 h-[5%] mt-16 absolute -ml-10 text-[25px]">
                                        <h3>WELCOME</h3>
                                    </div>
                                    <div className="ml-10 w-full">
                                        <img src="img/cashier.png" alt="cashier" />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <span>INTRODUCTING OPERATING SYSTEM</span>
                                </div>
                            </div>
                            <div className="bg-[url('img/bg_login.png')] w-[100%] h-[100%] p-10 bg-center">
                                <h1 className="text-[20px] font-bold">
                                    LOGIN
                                </h1>
                                <div>
                                    <div className="border mt-24">
                                        <input type="text" placeholder="Username" className="py-1 w-full px-2 border-b-2 active:border-blue-500" name="identifier" required onChange={changeInput}/>
                                    </div>
                                    <div className="border mt-6">
                                        <input type="text" placeholder="Password" className="py-1 w-full px-2 border-b-2 active:border-blue-500" name="password" required onChange={changeInput}/>
                                    </div>
                                    <div className="border bg-blue-400 py-1 rounded-md text-white font-bold mt-20">
                                        <button className="w-full" type="submit">Login</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </form>

                </div>  
                {/* Loading */}
                <div className={loading ? "absolute top-0 w-screen h-screen bg-black/40 flex justify-center items-center" : "hidden"}>
                    <img src="img/load.gif" alt="" width={300}/>
                </div>
                {/* Loading */}
                {/* <LockScreen /> */}

            </div>
        </>
    )
};