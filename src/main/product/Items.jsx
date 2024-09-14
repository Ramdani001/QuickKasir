import React, { useEffect, useState } from "react";

import axios from 'axios';
 
export default function Items(props){

    const {name, price, img, parentCallback} = props;

    const [sendData, setSendData] = useState({
        name: name,
        price: price,
        img: img,
    })

    const handleSend = () => {
        parentCallback(sendData);
    }

    

    return (
        <> 
            <div onClick={() => handleSend()} className="bg-white w-[140px] h-[200px] relative rounded-lg shadow-md hover:border hover:border-blue-300">
                    <img src={img} alt="" className="w-full"/>
                    <div className="text-left p-2">
                        <h2 className="">{name}</h2>
                        <h1 className="font-bold">Rp. {price}</h1>
                    </div>
            </div>
        </>
    )
};