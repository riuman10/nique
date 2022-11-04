import Head from "next/head";
import Image from "next/image";
import BookingHero from "../public/booking.jpeg";
import Logo from "../public/nique.png";
import Navbar from "../components/Navbar";
import Restaurent from "../public/restaurent.png";
import Footer from "../components/Footer";

const Restaurents = () => {
  return (
    <div>
      <div className="flex flex-auto h-screen">
        <Head>
            <title>Restaurents | Nique</title>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="relative w-full">
          <Image src={BookingHero} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image src={Logo} alt="Hero" />
            <div className="flex items-center flex-col">
              <h1 className="font-rose text-[#FACE8D] text-[80px]">
                Septemeber 17, 2022
              </h1>
              <h1 className="font-chillax text-[80px] text-[#FFFFFF] mt-[-50px]">
                New Restaurent
              </h1>
            </div>
            <div className="mb-16">
              <Navbar />
            </div>
          </div>
        </div>
        {/* Right SIde  */}
        <div className="w-full bg-black container mx-auto py-24 text-white font-chillax overflow-y-auto">
          <div className="px-8">
            <h1 className="mb-4 text-2xl">Lorem ipsum dolor</h1>
            <p className="font-light mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus.{" "}
            </p>

            <div className="relative h-[412px] mb-12">
              <Image src={Restaurent} layout="fill" alt="restaurent" />
            </div>

            <h1 className="mb-4 text-2xl">Lorem ipsum dolor</h1>
            <p className="font-light mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus. Velit ut tortor pretium viverra. Vivamus arcu felis
              bibendum ut. Quis enim lobortis scelerisque fermentum dui faucibus
              in ornare. Fusce ut placerat orci nulla pellentesque dignissim
              enim. Congue eu consequat ac felis donec et. Feugiat vivamus at
              augue eget arcu dictum. Scelerisque felis imperdiet proin
              fermentum leo vel orci. Auctor urna nunc id cursus metus aliquam
              eleifend mi. Facilisis mauris sit amet massa vitae tortor
              condimentum lacinia. Eget arcu dictum varius duis at consectetur
              lorem. Magna eget est lorem ipsum.
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurents;
