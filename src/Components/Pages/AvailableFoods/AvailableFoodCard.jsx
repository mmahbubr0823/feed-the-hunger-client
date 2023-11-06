import { Link } from "react-router-dom";

const AvailableFoodCard = ({availableFood}) => {
    const {_id, FoodImage, FoodName, FoodQuantity, PickupLocation, DonatorInfo, ExpiredDate, AdditionalNotes} = availableFood;
    return (
        <div>
            <div className="card lg:w-[450px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={FoodImage} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{FoodName}</h2>
                        <div className='grid grid-cols-2 space-y-2'>
                            <div>
                                <h1 className='font-bold'>Donor:</h1>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-10 rounded-full' src={DonatorInfo.DonatorImg} alt="" />
                                    <h1 className='font-bold'>{DonatorInfo.DonatorName}</h1>
                                </div>
                            </div>
                            <p><span className='font-bold'>Food Quantity:</span>{FoodQuantity}</p>
                            <p><span className='font-bold'>Pickup location:</span>{PickupLocation}</p>
                            <p><span className='font-bold'>Expired time:</span>{ExpiredDate}h</p>
                        </div>
                        <p><span className='font-bold'>Note:</span>{AdditionalNotes}</p>
                        <Link to={`/foodDetails/${_id}`}>
                        <button className='btn btn-outline mt-2 text-white bg-[#ac51f7]'>Details</button>
                        </Link>

                    </div>
                </div>
        </div>
    );
};

export default AvailableFoodCard;