import React, { useEffect, useState } from "react";
import axios from 'axios';
 
export default function Product(props){
    const [countBuy, setCountBuy] = useState(0);

    const handlePlusCount = () => {
        setCountBuy(countBuy+1);
    }
    const handleMintCount = () => {
        setCountBuy(countBuy-1);
    }

    useEffect(() => {
        if(countBuy < 1){
            setCountBuy(0);
        }
    }, [countBuy]);



    return (
        <> 
            <div className="bg-white w-full h-[200px] flex relative rounded-lg shadow-md">
                <div className="h-full w-[200px]">
                    <img src="img/product/ice 1.png" alt="" className="w-full h-full"/>
                </div>
                <div className="text-left p-2 grid items-between pt-2 h-full">
                    <h2 className="text-xl">Americano</h2>
                    <h1 className="font-bold text-2xl pt-20">Rp. 25.000.00</h1>
                </div>
                <div className="flex items-end pb-4 pl-10">
                    <div className="flex border w-full h-[50px] justify-center">
                        <button className="border p-2 text-center w-[50px] h-hull" onClick={handleMintCount}>-</button>
                        <div>
                            <input type="text" className="border p-2 w-[50px] h-[48px] text-center" value={countBuy}/>
                        </div>
                        <button className="border p-2 text-center w-[50px] h-hull" onClick={handlePlusCount}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
};