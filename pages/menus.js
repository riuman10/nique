import Image from "next/image";
import { useState } from "react";
import RestaurentImage from "../public/restaurents.jpeg";
import Logo from "../public/nique.png";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import DishTab from "../components/DishTab";
import Burger from "../public/menu/burger.jpeg";
import Head from "next/head";
import Footer from "../components/Footer";
import Close from "../components/icons/Close";
import { useRouter } from "next/router";

const Menus = () => {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const Links = [
    { id: 1, name: "Starters" },
    { id: 2, name: "Lunch" },
    { id: 3, name: "Dinner" },
    { id: 4, name: "Wine" },
    { id: 5, name: "Wine" },
  ];

  const Starters = [
    {
      id: 1,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 2,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: true,
      price: "$9.00",
      discount: true,
      discount_price: "$29.00",
    },
    {
      id: 3,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 4,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$5.00",
    },
  ];

  const BreakFast = [
    {
      id: 1,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 2,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: true,
      price: "$9.00",
      discount: true,
      discount_price: "$29.00",
    },
    {
      id: 3,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 4,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$5.00",
    },
  ];

  const Dinner = [
    {
      id: 1,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 2,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
      discount: true,
      discount_price: "$29.00",
    },
    {
      id: 3,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: false,
      price: "$9.00",
    },
    {
      id: 4,
      name: "Tomato Toast",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: Burger,
      starter: true,
      price: "$5.00",
    },
  ];

  // Function

  const handleHome = () => {
    router.push("/");
  };

  const handleClick = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex flex-auto h-screen relative">
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
          <title>Menus - Nique Restuarents</title>
        </Head>
        <div className="relative w-full">
          <Image src={RestaurentImage} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image
              src={Logo}
              alt="Hero"
              onClick={handleHome}
              className="cursor-pointer"
            />
            <div className="flex items-center flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="font-rose text-[#FACE8D] text-[80px]"
              >
                Check out
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="font-chillax text-[80px] text-[#FFFFFF] mt-[-50px]"
              >
                Our Menus
              </motion.h1>
            </div>
            <div className="mb-16">
              <Navbar />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-black w-full overflow-y-auto">
          <div className="container mx-auto flex justify-center gap-10 bg-black text-white py-6">
            {Links.map((item) => (
              <div key={item.id}>
                <a
                  className="font-chillax hover:text-[#FACE8D] cursor-pointer font-light"
                  href="#breakfast"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div className="mx-8 mt-16">
            <motion.p className="font-rose text-[#FACE8D] text-[65px]">
              Starters
            </motion.p>
            <div className="flex flex-col gap-8">
              {Starters.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                  key={item.id}
                >
                  <DishTab
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    starter={item.starter}
                    onClick={handleClick}
                  />
                  <AnimatePresence>
                    {modal && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]"
                      >
                        <Modal
                          onClick={handleClose}
                          src={item.image}
                          name={item.name}
                          price={item.price}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="mt-12" id="breakfast">
              <p className="font-rose text-[#FACE8D] text-[65px]">Breakfast</p>
              <div className="flex flex-col gap-8">
                {BreakFast.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    key={item.id}
                  >
                    <DishTab
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      starter={item.starter}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="font-rose text-[#FACE8D] text-[65px]">Dinner</p>
              <div className="flex flex-col gap-8">
                {Dinner.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    key={item.id}
                  >
                    <DishTab
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      starter={item.starter}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

const Modal = ({ src, onClick, name, price }) => {
  return (
    <div className="flex items-start relative w-[60vw] min-h-[60vh] rounded-2xl overflow-hidden">
      <div
        className="absolute right-[10px] top-[10px] max-w-fit cursor-pointer"
        onClick={onClick}
      >
        <Close />
      </div>
      <div className="relative w-[50%] h-[60vh]">
        <Image src={src} layout="fill" alt="Hi" />
      </div>
      <div className="w-[50%] h-[60vh] bg-gray-900 py-6 px-6 flex justify-between flex-col">
        <div>
          <h1 className="font-rose text-6xl text-[#FACE8D] mb-3">{name}</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
            eros, blandit eget suscipit in, eleifend et enim. Aliquam a porta
            lectus, eget fringilla massa. Suspendisse porttitor magna at dolor.
          </p>
        </div>
        <p className="text-4xl text-white">{price}</p>
      </div>
    </div>
  );
};

export default Menus;
