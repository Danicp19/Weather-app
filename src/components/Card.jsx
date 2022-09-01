import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline} from "react-icons/io5";

export default function Card({ min, max, name, img, onClose, primary}) {
  return (
    <div className={`flex justify-center items-center mt-6 border-b border-gray-500/50 text-white ${primary ? 'flex border-transparent font-bolder text-2xl' : ''}`}>

      <div className=" flex gap-6 items-center ">
        <div className=" flex flex-col items-center ">
          {/* <Link to={`/ciudad/${id}`}> */}
          <div className="flex items-center font-extrabold bg-gray-600 px-3 py-1 rounded-full">
          <div  className="mx-2">
            {name}

            </div>
            {!primary && (
              <button className="text-xl font-extrabold" onClick={onClose}><IoCloseCircleOutline/></button>
            )}
          </div>
          {/* </Link> */}

          <div className="">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>

        <div className=" flex gap-6 font-bold" >
          <div className=" flex flex-col items-center ">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className=" flex flex-col items-center ">
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>


      </div>
    </div >
  );
};
