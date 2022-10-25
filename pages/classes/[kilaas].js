import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Asian from "../../public/class/asian.jpeg";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Logo from "../../public/nique.png";
import Teacher from "../../public/class/teacher.jpeg";
import NoodleSoup from "../../public/class/dish.jpeg";

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
    image: Asian,
  },
  {
    id: 3,
    name: "Vegan Burger",
    type: "Asian",
    date: "June 16 , 2023",
    image: Asian,
  },
  {
    id: 4,
    name: "Salad Style",
    type: "Asian",
    date: "June 16 , 2023",
    image: Asian,
  },
  {
    id: 5,
    name: "Homemade Honey",
    type: "Italian",
    date: "June 16 , 2023",
    image: Asian,
  },
];

export const getStaticPaths = async () => {
  const paths = Data.map((item) => {
    return {
      params: { kilaas: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.kilaas;
  const single = Data.filter((item) => item.name.includes(name));

  return {
    props: { kilaas: single },
  };
};

const ClassDetails = ({ kilaas }) => {
  // const router = useRouter();
  // const classId = router.query.classId;

  // console.log(kilaas)

  const Details = [
    {
      id: 1,
      date: "June 16, 2023 8:00 PM",
      teacher: "Jakob Grønberg",
      teacher_image: Teacher,
      language: "English",
    },
  ];

  const Menu = [
    {
      id: 1,
      name: "Noodele Soup",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: NoodleSoup,
    },
  ];
  return (
    <div>
      <div className="flex flex-auto h-screen">
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="relative w-full">
          <Image src={kilaas[0].image} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image src={Logo} alt="Hero" />
            <div className="flex items-center flex-col">
              <h1 className="font-rose text-[#FACE8D] text-[80px]">Shop</h1>
              <h1 className="font-chillax text-[80px] text-[#FFFFFF] mt-[-50px] text-center leading-tight">
                {kilaas[0].name}
              </h1>
            </div>
            <div className="mb-16">
              <Navbar />
            </div>
          </div>
        </div>
        {/* Right SIde  */}
        <div className="w-full px-16 pt-16 bg-black font-chillax overflow-y-auto text-white">
          <p className="font-chillax mb-2 font-light">Cooking Class</p>
          <h1 className="text-5xl font-chillax mb-4">Reserve your spot</h1>
          <p className="mb-8 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor massa id neque aliquam.
          </p>
          <div className="font-chillax flex items-center gap-6 mb-[60px]">
            <button className="px-6 py-4 bg-[#F8D49E] rounded-[500px] text-black">
              Book a spot
            </button>
            <p className="text-2xl">89$</p>
          </div>

          <div>
            <p className="mb-6 font-rose text-[64px] text-[#FACE8D]">Details</p>
            <div className="flex flex-col">
              {Details.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center py-6 border-b border-gray-800">
                    <p>Date</p>
                    <p className="font-light">{item.date}</p>
                  </div>
                  <div className="flex justify-between items-center py-8 border-b border-gray-800">
                    <p>Teacher</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.teacher_image}
                        width={65}
                        height={65}
                        alt="teach"
                        className="rounded-full"
                        objectPosition={"center"}
                        objectFit="center"
                      />
                      <p className="font-light">{item.teacher}</p>
                    </div>
                  </div>
                  <div className="flex justify-between py-8 border-b border-gray-800">
                    <p>Language</p>
                    <p className="font-light">{item.language}</p>
                  </div>
                  <div className="flex justify-between py-8 border-b border-gray-800">
                    <p>Location</p>
                    <div className="flex flex-col font-light">
                      <p>Nique</p>
                      <p>Main Street 16</p>
                      <p>10629 Berlin</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-24">
            <p className="font-rose text-[64px] text-[#FACE8D] mb-9">Menu</p>
            <div className="flex gap-2 items-center pb-6">
              <Image
                src={NoodleSoup}
                alt="Noodle Soup"
                width={65}
                height={65}
              />
              <div>
                <p className="font-medium">Noodle Soup</p>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center pb-6">
              <Image
                src={NoodleSoup}
                alt="Noodle Soup"
                width={65}
                height={65}
              />
              <div className="font-chillax">
                <p className="font-medium">Noodle Soup</p>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
