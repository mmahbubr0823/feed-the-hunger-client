import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const FoodDetails = () => {
    const { user } = useAuth();
    const loadedProducts = useLoaderData();
    const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams();

    // current time 
    let now = new Date();
    const time = now.toLocaleString()

    //    finding matching product 
    useEffect(() => {
        const findProduct = loadedProducts?.find(singleProduct => singleProduct._id === id);
        setSingleProduct(findProduct)
    }, [loadedProducts, id])

    const { _id, FoodImage, FoodName, FoodQuantity, PickupLocation, DonatorInfo, ExpiredDate, AdditionalNotes } = singleProduct;
    // handle request 
    const handleRequest = async(e) => {
        e.preventDefault();
        e.preventDefault();
        const form = e.target;
        const donationMoney = form.dMoney.value;
        const note = form.notes.value;


        // form data 
        const formData = {
            FoodImage: FoodImage,
            FoodName: FoodName,
            FoodQuantity: FoodQuantity,
            PickupLocation: PickupLocation,
            DonatorInfo: {
                DonatorImg: DonatorInfo.DonatorImg,
                DonatorName: DonatorInfo.DonatorName,
            },
            ExpiredDate: ExpiredDate,
            AdditionalNotes: note,
            FId: _id,
            UEmail: user.email,
            DonationMoney: donationMoney,
            CurrentDate: time
        }

        // sending to backend
        try {
            const response = await axios.post('http://localhost:5000/requested-foods', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            if (response.data.acknowledged === true) {
                Swal.fire({
                    title: "",
                    text: "Request successful.",
                    icon: "success"
                });
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
            <Helmet>
                <title>Feed The Hunger || FoodDetails</title>
            </Helmet>
            <div className=" flex justify-center items-center p-4 bg-[#f5f4fb] gap-2 rounded-xl shadow-xl">
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
                    {/* modal  */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        {/* modal box  */}
                        <div className="modal-box">
                            <div>
                                <h1 className="text-3xl text-center font-semibold my-8">Add a Food</h1>
                                <form onSubmit={handleRequest} className="border-2 p-3 bg-[#f7f2e6] rounded-lg">
                                    <div className="grid grid-cols-2 gap-4 w-full mx-auto">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Food name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="fName" placeholder={FoodName} readOnly className="w-full input input-bordered" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image url</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="fUrl" placeholder={FoodImage} readOnly className="w-full input input-bordered" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Food Quantity</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="number" required name="fQuantity" placeholder={FoodQuantity} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Food Id</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="number" required name="fId" placeholder={_id} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Pickup Location</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="pLocation" placeholder={PickupLocation} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Expired Date</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="eDate" placeholder={ExpiredDate} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Additional Notes</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="notes" placeholder={AdditionalNotes} className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Donator Name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" required name="dName" placeholder={DonatorInfo?.DonatorName} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Requested Date</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" readOnly defaultValue={time} required name="dImg" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Donation Money</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="number" required name="dMoney" placeholder="Donation Money" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">User Email</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="email" required name="uEmail" defaultValue={user.email} readOnly className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <input className="w-9/12 bg-orange-300 btn my-5" type="submit" value="Request" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn btn-outline mt-2 text-white bg-[#ac51f7]'>Request Food</button>

                </div>
            </div>
        </div>
    );
};

export default FoodDetails;