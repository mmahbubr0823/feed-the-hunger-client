import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyFoodRequestCart = ({requestedFood, refetch}) => {
    const [status, setStatus]= useState(false);
   const {_id, FoodImage, FoodName, FoodQuantity, PickupLocation, DonatorInfo, ExpiredDate, AdditionalNotes, FId, UEmail, DonationMoney, CurrentDate} = requestedFood;

   const handleRemove = async()=>{
    try {
        const response = await axios.delete(`https://assignment-11-server-wine-theta.vercel.app/requested-foods/${_id}`)
        
        console.log(response);
        if (response.data.acknowledged === true) {
            Swal.fire({
                title: "",
                text: "Request successfully removed.",
                icon: "success"
            });
            refetch();
        }
    }
    catch (error) {
        Swal.fire({
            title: "",
            text: `${error}`,
            icon: "error"
        });
    }
   }
    return (
        <div>
            <div>
            <div className="card lg:w-[450px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={FoodImage} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{FoodName}</h2>
                        <div className='flex flex-col text-center space-y-2'>
                            <div>
                                    <h1 className='font-bold'> <span className='font-bold'>Donor:</span>{DonatorInfo.DonatorName}</h1>
                            </div>
                            <p><span className='font-bold'>Request Date:</span>{CurrentDate}</p>
                            <p><span className='font-bold'>Pickup location:</span>{PickupLocation}</p>
                            <p><span className='font-bold'>Expired time:</span>{ExpiredDate}hours</p>
                            <p><span className='font-bold'>Status:</span><button onClick={()=>setStatus(!status)}>{status ? "Delivered" : "Available"}</button></p>
                        </div>
                        <p><span className='font-bold'>Note:</span>{AdditionalNotes}</p>
                       <button onClick={handleRemove} className='btn btn-outline mt-2 text-white bg-[#ac51f7]'>Cancel Request</button>

                    </div>
                </div>
        </div>
        </div>
    );
};

export default MyFoodRequestCart;