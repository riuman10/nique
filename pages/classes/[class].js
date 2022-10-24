import { useRouter } from "next/router";
import Burger from "../public/menu/burger.jpeg";
import Asian from '../../public/class/asian.jpeg';
import { data } from "autoprefixer";



export const getStaticPaths = async () => {
    const Data = [
        {id : 1 , name : 'Delicious Breakfast' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 2 , name : 'Coffee Time' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 3 , name : 'Vegan Burger' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 4 , name : 'Salad Style' , type : 'Asian' , date : 'June 16 , 2023' , image : Asian},
        {id : 5 , name : 'Homemade Honey' , type : 'Italian' , date : 'June 16 , 2023' , image : Asian},
    ]

    const paths = Data.map((item) => {
        return {
            params : {id : item.id.toString()}
        }
    })

   return {
    paths,
    fallback : false
   }
}

export const getStaticProps = async (context) => {
    const  id = context.params.id;
    const data = await data.json();


    return {
        props : {item : data}
    } 
}

const ClassDetails = ({item}) => {
    const router = useRouter();
    const classId = router.query.classId
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}


export default ClassDetails;