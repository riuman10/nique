import Image from "next/image";
import RestaurentImage from "../public/restaurents.jpeg";
import Logo from "../public/nique.png";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import DishTab from "../components/DishTab";
import Burger from "../public/menu/burger.jpeg";
import Head from "next/head";
import Footer from "../components/Footer";

const Menus = () => {
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
  return (
    <>
      <div className="flex flex-auto h-screen">
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="relative w-full">
          <Image src={RestaurentImage} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image src={Logo} alt="Hero" />
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
                <a className="font-chillax hover:text-[#FACE8D] cursor-pointer font-light" href= '#breakfast'>
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
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-12" id = 'breakfast'>
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

export default Menus;
