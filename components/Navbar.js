import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Time from "../components/icons/TIme";

const Navbar = ({ handleChange }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [showTimeStamp, setShowTime] = useState(false);
  const Links = [
    { id: 1, name: "Menu", link: "menus" },
    { id: 2, name: "Restaurents", link: "restaurents" },
    { id: 3, name: "Classes", link: "classes" },
  ];

  const handleClick = (e, item) => {
    const url = "localhost:3000/";
    if (router.pathname.startsWith("/classes/")) {
      // e.preventDefault()
      router.push(`/${item}`);
      console.log(item, this);
    } else {
      e.preventDefault();
      router.push(item);
      console.log(item);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    router.push("booking");
  };

  return (
    <div>
      <div className="relative w-[500px] flex items-center justify-around bg-white py-2 rounded-[100px] gap-2">
      <AnimatePresence>
        {showTimeStamp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute bottom-[50px] left-0 w-[250px] bg-white mb-4 rounded-xl py-4 px-6"
          >
            <p className="mb-2">Opening Hours</p>
            <div className="flex justify-between mb-2">
              <p>Mon</p>
              <p>Closed</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Tue - Fri</p>
              <p>4pm - 8pm</p>
            </div>
            <div className="flex justify-between">
              <p>Sat - Sun</p>
              <p>5pm - 11pm</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        <div
          className="ml-6 cursor-pointer"
          onClick={() => setShowTime(!showTimeStamp)}
        >
          <Time />
        </div>
        {Links.map((item, i) => (
          <AnimatePresence key={item.id}>
            <motion.div
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.3, delay: i * 0.25 }}
              exit={{ opacity: 0 }}
              href={item.link}
              onClick={(e) => {
                setSelected(i), handleClick(e, (item = item.link));
              }}
              className={`${
                selected == i &&
                "bg-[#F8F8F8] transition-all ease-out duration-500"
              } text-[#111111] rounded-[100px] py-2 px-[18px] cursor-pointer`}
            >
              <p className="text-sm leading-6 font-medium">
                {item.name}
              </p>
            </motion.div>
          </AnimatePresence>
        ))}
        <div className="pr-2">
          <div
            className="py-3 px-6 bg-black rounded-[100px] cursor-pointer"
            onClick={handleBooking}
          >
            <p className="text-white font-chillax text-sm">Book a table</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
