import { MdSpeed } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { MdOutlineBattery3Bar } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

function Car(props) {
    return (
        <div className="flex flex-col bg-black p-5 car_cont cursor-default">
            <h3 className="text-white font-bold capitalize text-lg">{props.type}</h3>
            <p className="car_type capitalize">{props.model}</p>
            <img className='w-48 mt-5 duration-500' src={props.CarImg} />

            <div className='flex flex-row w-full justify-evenly mt-6 car_ps'>
                <p className='flex flex-row text-white capitalize text-lg mr-5'>
                    <MdSpeed className='mt-1 mr-1 text-xl' />
                    {props.p1}
                </p>

                <p className='flex flex-row text-white capitalize text-lg'>
                    <GiSpeedometer className='mt-1 mr-1 text-xl' />
                    {props.p2}
                </p>
            </div>

            <p className='flex flex-row text-white capitalize text-lg'>
                <MdOutlineBattery3Bar className='mt-1 mr-1 text-xl' />
                {props.p3}
            </p>

            <div className='flex flex-row mt-6 w-full justify-between'>
                <p className='text-white font-bold text-lg'>{props.price}</p>
                <a href='' className='text-white bg-blue-600 p-3 text-xl shop'><MdOutlineShoppingBag /></a>
            </div>


        </div>
    )
}

export default Car;