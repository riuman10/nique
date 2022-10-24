import Image from "next/image";
import Logo from "../public/nique.png";
import HeroImage from "../public/hero.jpeg";
import Head from "next/head";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  const handleChange = (i) => {
    console.log(i);
  };

  // const title = 'Thailand'
  
  return (
    <>
      <div className="relative h-screen font-chillax">
        <Head>
          <title>Nique Restaurents</title>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="-z-10 bg-blend-darken">
          <Image alt="hero" src={HeroImage} layout="fill" />
        </div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image alt="hero" src={Logo} />
        </div>
        <div className="relative h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <motion.p 
            initial = {{opacity : 0 , y : 10}}
            animate = {{opacity : 1 , y : 0}}
            transition = {{duration : .7 , ease : 'easeOut' , delay : .5}}
            className="inline-block font-rose text-[#FACE8D] text-[80px] overflow-y-hidden">
              The pure taste of
            </motion.p>
           <motion.p 
           initial = {{opacity : 0 , y : 5}}
           animate = {{opacity : 1 , y : 0}}
           transition = {{duration : .7 , ease : 'easeOut' , delay : 1}}
           className="font-chillax text-white text-[160px] mt-[-50px]">Thailand</motion.p>
            <motion.p 
            initial = {{opacity : 0 , y : 5}}
            animate = {{opacity : 1 , y : 0}}
            transition = {{duration : .7 , ease : 'easeOut' , delay : 1.3}}
            className="text-white text-center font-light w-[600px] mt-[-30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
          initial = {{opacity : 0 , y : 5}}
          animate = {{opacity : 1 , y : 0}}
          transition = {{duration : .7 , ease : 'easeIn' , delay : 1.5}}
          >
          <div className="flex items-center justify-center">
            <Navbar handleChange={() => handleChange} />
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
