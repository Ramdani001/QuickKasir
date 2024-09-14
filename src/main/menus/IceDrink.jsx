import React, { useEffect, useState } from "react";
import Items from "../product/Items";
import axios from 'axios';
 
export default function IceDrink(props){
        const url = "img/product/";
        const [arrData, setArrData] = useState([
            {
                name: "Ice Americano",
                price: "25.000",
                img: "ice 1.png"
            },
            {
                name: "Ice Americano",
                price: "25.000",
                img: "macha.png"
            },
            {
                name: "Ice Americano",
                price: "25.000",
                img: "mocacino.png"
            }
        ]);



        const mappingData = arrData.map((dat => {
            return <Items key={dat.key} img={`${url}${dat.img}`} name={dat.name} price={dat.price}/>
        }))
    return (
        <> 
            <div className="flex justify-between flex-wrap gap-5">
                {mappingData}
            </div>
        </>
    )
};