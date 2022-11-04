import Asian from "../../public/asian.jpeg";
import Coffee from '/public/coffee.png'
import Salad from '/public/salad.png';
import Vegan from '/public/vegan.png';
import Honey from '/public/honey.png';
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";

const Data = [
  {
    id: 1,
    name: "Delicious Breakfast",
    type: "Asian",
    date: "June 16 , 2023",
    image: Asian,
  },
  {
    id: 2,
    name: "Coffee Time",
    type: "Asian",
    date: "June 16 , 2023",
    image: Coffee,
  },
  {
    id: 3,
    name: "Vegan Burger",
    type: "Asian",
    date: "June 16 , 2023",
    image: Vegan,
  },
  {
    id: 4,
    name: "Salad Style",
    type: "Asian",
    date: "June 16 , 2023",
    image: Salad,
  },
  {
    id: 5,
    name: "Homemade Honey",
    type: "Italian",
    date: "June 16 , 2023",
    image: Honey,
  },
];

export const getStaticProps = async () => {
  return {
    props: { classes: Data },
  };
};

const Classes = ({ classes }) => {
  return (
    <AnimatePresence>
    <div className="relative">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
          rel="stylesheet"
        />
        <title>Classes - Nique</title>
      </Head>
        <motion.div
          className="relative flex overflow-x-scroll w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {classes.map((item, i) => (
            <Link key={item.id} href={`/classes/` + item.name}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.2 }}
                className="relative h-screen min-w-[40vw] cursor-pointer"
              >
                <Image
                  src={item.image}
                  layout="fill"
                  alt={item.name}
                  className="object-cover"
                />
                <div className="relative h-screen flex flex-col items-center justify-center">
                  <p className="text-[65px] font-rose text-[#FACE8D]">
                    {item.type}
                  </p>
                  <h1 className="font-chillax text-4xl text-white px-8 mt-[-20px]">
                    {item.name}
                  </h1>
                  <p className="font-chillax font-light text-white">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Navbar />
        </div>
        </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default Classes;
