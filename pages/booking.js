import Head from "next/head"
import Image from "next/image"
import BookingHero from '../public/booking.jpeg';
import Logo from '../public/nique.png'
import Navbar from "../components/Navbar";




const Booking = () => {
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
          <Image src={BookingHero} layout="fill" alt="Hero" />
          <div className="relative h-full flex items-center flex-col justify-between  pt-16">
            <Image src={Logo} alt="Hero" />
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
        <div className="w-full bg-black container mx-auto">

        </div>
        </div>
        </div>
    )
}


export default Booking;