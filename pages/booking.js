import Head from "next/head";
import Image from "next/image";
import BookingHero from "../public/booking.jpeg";
import Logo from "../public/nique.png";
import Navbar from "../components/Navbar";
import Router, { useRouter } from "next/router";

const Booking = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div>
      <div className="flex flex-auto h-screen">
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
          <title>Book a table</title>
        </Head>
        <div className="relative w-full">
          <Image src={BookingHero} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image src={Logo} alt="Hero" onClick={handleClick} className = 'cursor-pointer' />
            <div className="flex items-center flex-col">
              <h1 className="font-rose text-[#FACE8D] text-[80px]">
                Book a table
              </h1>
              <h1 className="font-chillax text-[80px] text-[#FFFFFF] mt-[-50px]">
                Reservation
              </h1>
            </div>
            <div className="mb-16">
              <Navbar />
            </div>
          </div>
        </div>
        {/* Right SIde  */}
        <div className="w-full bg-black container mx-auto overflow-y-scroll text-white font-chillax">
          <div className="pt-[96px] px-[140px]"> 
          <h1 className="text-[40px] mb-4">Book a table</h1>
          <p className="font-light mb-12">Our dining atmosphere is casual and comfortable. To reflect this environment, we maintain a formal dress.</p>

          <div className="flex flex-col gap-4 mb-12">
            <p className="text-[16px] font-light">Name</p>
            <input 
            className="border border-gray-600 rounded-[10px] bg-black w-full py-4 px-6 placeholder:font-light focus:outline-none"
            placeholder="Name"
            />
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <p className="text-[16px] font-light">Number of guests</p>
            <input 
            type='number'
            className="border border-gray-600 rounded-[10px] bg-black w-full py-4 px-6 placeholder:font-light focus:outline-none"
            placeholder="Number"
            />
          </div>


          <div className="flex gap-4 mb-12">
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-light">Date</p>
            <input 
            type='number'
            className="border border-gray-600 rounded-[10px] bg-black w-full py-4 px-6 placeholder:font-light focus:outline-none"
            placeholder="Number"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-light">Time</p>
            <input 
            type='number'
            className="border border-gray-600 rounded-[10px] bg-black w-full py-4 px-6 placeholder:font-light focus:outline-none"
            placeholder="Number"
            />
          </div>
          </div>
          <div className="bg-[#F8D49E] text-center py-[22px] text-black rounded-full mb-[200px] cursor-pointer">
            BOOK A TABLE
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
