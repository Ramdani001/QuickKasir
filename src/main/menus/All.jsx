import React, { useEffect, useState } from "react";
import Items from "../product/Items";

import axios from 'axios';
 
export default function All(props){
    const url = "img/product/";
    const [arrData, setArrData] = useState([
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Matcha",
            price: "25.000",
            img: "macha.png"
        },
        {
            name: "Mocacino",
            price: "25.000",
            img: "mocacino.png"
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
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        },
        {
            name: "Ice Americano",
            price: "25.000",
            img: "ice 1.png"
        }
    ]);

    const {parentCallback} = props;

 
    const mappingData = arrData.map((dat => {
        return <Items key={dat.key} img={`${url}${dat.img}`} name={dat.name} price={dat.price} parentCallback={parentCallback}/>
    }))
 
    return (
        <> 
            <div className="flex justify-between flex-wrap gap-5">
                {mappingData}
            </div>
        </>
    )
};