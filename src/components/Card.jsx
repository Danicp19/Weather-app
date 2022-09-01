import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card({ min, max, name, img, onClose, primary }) {
  return (
    <div className={`flex justify-center items-center mt-6 border-b border-gray-500/50 text-white ${primary ? 'flex border-transparent font-bolder   ' : ''}`}>
      <div className={`flex gap-6 items-center ${primary ? 'items-center  flex flex-row-reverse ' : ''}`} >
        <div className={`  flex flex-col items-center  ${primary ? 'items-center  flex !flex-row ' : ''}`} >
          <div className={`flex items-center font-extrabold bg-gray-600 px-3 py-1 rounded-full  ${primary ? 'bg-transparent items-center  px-0 py-0' : ''}`} >
            <div className={`mx-2  ${primary ? 'text-2xl mx-0 mt-6 ' : ''}`}>
              {name}
            </div>
            {!primary && (
              <button className="text-xl font-extrabold" onClick={onClose}><IoCloseCircleOutline /></button>
            )}
          </div>
          <div className={` ${primary ? '' : ''}`}>
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
        <div className=" flex gap-6 font-bold" >
          <div className=" flex flex-col items-center  ">
            <p className={`  ${primary ? 'hidden' : ''}`}>
              Min</p>
            <p className={`  ${primary ? 'text-8xl' : ''}`}>{min}°</p>
          </div>
          <div className={` flex flex-col items-center  ${primary ? 'hidden' : ''}`}>
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
      </div>
    </div >
  );
};
