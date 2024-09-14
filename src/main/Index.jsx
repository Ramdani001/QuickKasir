import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import  All  from "./menus/All";
import  IceDrink  from "./menus/IceDrink";
import  Hot  from "./menus/Hot";
import  Food  from "./menus/Food";
import  Desert  from "./menus/Desert";

// List Product Bought
import Product from "./product/sub_product/Product";
import axios from 'axios';
 
export default function Index(){

    const [showMenus, setShowMenus] = useState("All");
    const [listData, setListData] = useState({});

    const [listBuy, setListBuy] = useState(false);
 
    const handleCallback = (handleChild) => {
        // console.log(handleChild);

        setListData(handleChild);
    }

    useEffect(() => {
        if(listData.name){
            console.log(listData);
            setListBuy(!listBuy);
        }
    }, [listData]);

    return (
        <> 
            <div className="bg-[#E8E8E8] absolute  w-screen h-screen p-0 m-[0px] top-0 left-0 ">
                
                {/* Back */}
                <div className="w-[10%] h-[7%] md:w-[4%] md:h-[8%]">
                    <Link to="/login" className="md:w-[4%] md:h-[8%]">
                        <div className="bg-[#00C6CF] w-[100%] h-[100%] rounded-br-[100%] cursor-pointer">
                            <img src="img/back.png" alt="" className="w-[25px]"/>
                        </div>
                    </Link>
                </div>
                {/* Back */}

                <div className="flex gap-5 fixed">
                    <div className="w-[90%]">
                        {/* Search */}
                        <div className="flex justify-center m-5 md:ml-[10%] w-[80%] md:mr-[25%]">
                            <div className="w-full bg-white rounded-md gap-2 shadow-md p-1 flex">
                                <input type="text" placeholder="Search" className="w-full p-1 bg-[#EFEFEF] rounded-md" />
                                <button className="px-10 py-1 bg-[#00C6CF] text-white">Cari</button>
                            </div>
                        </div> 
                        {/* Sub Menu */}
                        <div className="w-full w-full">
                            <div className="w-[90%] md:ml-[10%] p-1 flex gap-6">
                                <div name="All" className={showMenus == "All" ? "w-full p-1 rounded-md text-white bg-[#00C6CF]" : "w-full p-1 rounded-md bg-white hover:text-white active:text-white cursor-pointer active:bg-[#00C6CF] hover:bg-[#00C6CF]"} onClick={e => setShowMenus("All")}>
                                    <span>All</span>
                                </div>
                                <div name="Ice Drink" className={showMenus == "Ice Drink" ? "w-full p-1 rounded-md text-white bg-[#00C6CF]" : "w-full p-1 rounded-md bg-white hover:text-white active:text-white cursor-pointer active:bg-[#00C6CF] hover:bg-[#00C6CF]"} onClick={e => setShowMenus("Ice Drink")}>
                                    <span>Ice Drink</span>
                                </div>
                                <div name="Hot Drink" className={showMenus == "Hot Drink" ? "w-full p-1 rounded-md text-white bg-[#00C6CF]": "w-full p-1 rounded-md bg-white hover:text-white active:text-white cursor-pointer active:bg-[#00C6CF] hover:bg-[#00C6CF]"} onClick={e => setShowMenus("Hot Drink")}>
                                    <span>Hot Drink</span>
                                </div>
                                <div name="Food" className={showMenus == "Food" ? "w-full p-1 rounded-md text-white bg-[#00C6CF]": "w-full p-1 rounded-md bg-white hover:text-white active:text-white cursor-pointer active:bg-[#00C6CF] hover:bg-[#00C6CF]"} onClick={e => setShowMenus("Food")}>
                                    <span>Food</span>
                                </div>
                                <div name="Desert" className={showMenus == "Desert" ? "w-full p-1 rounded-md text-white bg-[#00C6CF]": "w-full p-1 rounded-md bg-white hover:text-white active:text-white cursor-pointer active:bg-[#00C6CF] hover:bg-[#00C6CF]"}onClick={e => setShowMenus("Desert")}>
                                    <span>Desert</span>
                                </div>
                            </div>
                        </div> 
                        {/* Sub Menu */}
                        <div className="md:ml-[10%] w-[90%] h-[90%] scrollable-container">
                             
                            {showMenus == "All" && <All parentCallback={handleCallback} />}
                            {showMenus == "Ice Drink" && <IceDrink />}
                            {showMenus == "Hot Drink" && <Hot />}
                            {showMenus == "Food" && <Food />}
                            {showMenus == "Desert" && <Desert />}

                        </div>
                    </div>
                    <div className={listBuy ? "w-[30%] h-screen fixed top-0 right-0 transition-all duration-1000" : "w-[20%] h-screen fixed top-0 -right-[500px] transition-all duration-1000"}>
                        
                        <div className="w-full h-full bg-white mb-1">
                            <div>
                                <div>
                                    <div className="flex justify-between">
                                        <h1 className="text-3xl p-6 text-left">Order Detail</h1>
                                        <span className="text-4xl p-6 cursor-pointer" onClick={() => setListBuy(!listBuy)}>X</span>
                                    </div>
                                    <hr className="border border-3" />
                                </div>
                                <div className="p-3 grid jsutify-center text-left">
                                    <Product />
                                </div>
                            </div>
                            
                            <div className="grid text-left relative pb-10 border border-t-2 border-b-2 w-[29%]">
                                <div className="fixed w-[28.5%] bottom-0">
                                    <div className="p-5">
                                        <div className="p-2 flex justify-between">
                                            <span>Sub Total</span>
                                            <span>Rp. 150.000,00</span>
                                        </div>
                                        <div className="p-2 flex justify-between">
                                            <span>Discound</span>
                                            <span>- Rp. 50.000,00</span>
                                        </div>
                                        <div className="p-2 flex justify-between">
                                            <span>PPN</span>
                                            <span>10%</span>
                                        </div>
                                    </div>
                                    <div className="grid bg-white text-3xl font-bold items-center pt-1 border-t-2 h-full">
                                        <div className="p-2 flex justify-between pr-2">
                                            <span>Total Bayar</span>
                                            <span>Rp. 85.000,00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        </>
    )
};