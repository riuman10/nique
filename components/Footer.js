import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  const Pages = [
    { id: 1, name: "Menu", link: "menus" },
    { id: 2, name: "Restaurents", link: "" },
    { id: 3, name: "Classes", link: "classes" },
    { id: 4, name: "Book a table", link: "booking" },
    // {id : 5 , name : 'Menu' , link : 'menus'},
    // {id : 6 , name : 'Menu' , link : 'menus'},
  ];

  const Utilities = [
    { id: 1, name: "Styleguide" },
    { id: 2, name: "Licensing" },
    { id: 3, name: "Changelog" },
    { id: 4, name: "404 Page" },
    { id: 5, name: "Password Protected" },
  ];

  const handleClick = (e, item) => {
    e.preventDefault();
    router.push(`/${item}`);
    console.log(item);
  };

  const handleHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <AnimatePresence>
      <div className="flex justify-between text-white font-chillax pb-[160px] pt-[82px] container mx-auto">
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="flex flex-col">
          <motion.a
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            onClick={(e) => handleHome(e)}
            className="text-[32px] mb-8 cursor-pointer"
          >
            Nique
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="font-light text-sm"
          >
            By Pawel Gola<br></br>Powered by Webflow
          </motion.a>
        </div>
        <div>
          <p className="mb-8 font-light">Pages</p>
          <div className="flex flex-col gap-4">
            {Pages.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.3 }}
                // viewport = {{once : false , value : .1}}
                key={item.id}
                href={item.link}
                onClick={(e) => {
                  handleClick(e, (item = item.link));
                }}
              >
                <p className="text-gray-400 font-light hover:text-gray-100 cursor-pointer transition-all ease-in duration-75">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-8 font-light">Utility Pages</p>
          <div className="flex flex-col gap-4">
            {Utilities.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.3 }}
                key={item.id}
              >
                <p className="text-gray-400 font-light hover:text-gray-100 cursor-pointer transition-all ease-in duration-75">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Footer;
