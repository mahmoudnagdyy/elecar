import { MdOutlineShoppingBag } from "react-icons/md";

function Feature(props) {
    return (
        <div className="flex flex-col bg-black p-5 feature_cont cursor-default mt-20">
            <h3 className="text-white font-bold capitalize text-lg">{props.type}</h3>
            <p className="car_type capitalize">{props.model}</p>
            <img className='w-48 mt-5 duration-500' src={props.CarImg} />

            <div className='flex flex-row mt-6 w-full justify-between'>
                <p className='text-white font-bold text-lg'>{props.price}</p>
                <a href='' className='text-white bg-blue-600 p-3 text-xl shop'><MdOutlineShoppingBag /></a>
            </div>


        </div>
    )
}

export default Feature;