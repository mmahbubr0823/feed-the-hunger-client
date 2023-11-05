import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FoodDetails = () => {
    const loadedProducts = useLoaderData();
    const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams();

    //    finding matching product 
    useEffect(() => {
        const findProduct = loadedProducts?.find(singleProduct => singleProduct._id === id);
        setSingleProduct(findProduct)
    }, [loadedProducts, id])

    const { _id, FoodImage, FoodName, FoodQuantity, PickupLocation, DonatorInfo, ExpiredDate, AdditionalNotes } = singleProduct;


    return (
        <div>
            <div className=" flex justify-center items-center p-4 bg-[#fbf4fa] gap-2 rounded-xl shadow-xl">
                <div>
                    <h1 className='font-bold text-center'>Donor:</h1>
                    <div className='flex gap-2 items-center'>
                        <img className='w-40 rounded-full' src={DonatorInfo?.DonatorImg} alt="" />
                        <h1 className='font-bold'>{DonatorInfo?.DonatorName}</h1>
                    </div>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{FoodName}</h2>
                    <figure className="px-10 pt-10">
                        <img src={FoodImage} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                    </figure>
                    <div className=' space-y-2'>

                        <p><span className='font-bold'>Food Quantity:</span>{FoodQuantity}</p>
                        <p><span className='font-bold'>Pickup location:</span>{PickupLocation}</p>
                        <p><span className='font-bold'>Expired time:</span>{ExpiredDate}h</p>
                    </div>
                    <p><span className='font-bold'>Note:</span>{AdditionalNotes}</p>
                    <button className='btn btn-outline mt-2 text-white bg-[#ac51f7]'>Request Food</button>

                </div>
            </div>
        </div>
    );
};

export default FoodDetails;