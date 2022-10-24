import Asian from '../../public/class/asian.jpeg';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const Classes = () => {

    const Data = [
        {id : 1 , name : 'Delicious Breakfast' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 2 , name : 'Coffee Time' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 3 , name : 'Vegan Burger' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 4 , name : 'Salad Style' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 5 , name : 'Homemade Honey' , type : 'Italian' , date : 'June 16 , 2023' , image : Asian},
    ]


    return (
        <div>
            <Head>
            <link
            href="https://api.fontshare.com/v2/css?f[]=chillax@300&display=swap"
            rel="stylesheet"
          />
            </Head>
        <div className="flex overflow-x-scroll w-auto">
            {Data.map((item) => (
                <div href = {`/classes/` + item.id} key={item.id} className = 'relative h-screen min-w-[40vw] cursor-pointer' >
                    <Image 
                    src={item.image}
                    layout = 'fill'
                    alt={item.name}
                    className = 'object-cover backdrop-brightness-0 bg-black bg-opacity-10'
                    />
                    <div className='relative h-screen flex flex-col items-center justify-center'>
                        <p className='text-[65px] font-rose text-[#FACE8D]'>{item.type}</p>
                    <h1 className='font-chillax text-4xl text-white px-8 mt-[-20px]'>{item.name}</h1>
                    <p className='font-chillax font-light text-white'>{item.date}</p>
                    </div>
                </div>
            ))}
            
        </div>
        </div>
    )
}


export default Classes;