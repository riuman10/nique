import Image from "next/image";
import Burger from "../public/menu/burger.jpeg";
import { useState } from "react";

const DishTab = ({ title, price, description, image, starter , onClick}) => {
  
  return (
    <div
      className={`flex font-chillax relative py-[21px] px-[24px] cursor-pointer ${
        starter && "border border-[#F8D49E"
      }] rounded-lg font-light`}
      onClick = {onClick}
    >
      <div className="flex items-center flex-1">
        <div>
          <div className="mr-4">
            <Image
              src={image}
              alt={title}
              height={60}
              width={80}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 flex-col">
          <div className="flex justify-between">
            <p className="text-white text-xl font-normal">{title}</p>
            <p className="text-xl text-white">{price}</p>
            {starter && (
              <div className="absolute top-[-20px] right-10 bg-[#F8D49E] rounded-md py-2 px-3">
                <p className="text-center">Starter of the day</p>
              </div>
            )}
          </div>
          <p className="text-[#FFFFFF] text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishTab;
