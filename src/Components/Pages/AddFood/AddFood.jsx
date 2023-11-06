import axios from "axios";
import toast from "react-hot-toast";

const AddFood = () => {


    const handleAddFood = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const foodName = form.fName.value;
        const foodUrl = form.fUrl.value;
        const foodQuantity = form.fQuantity.value;
        const pickupLocation = form.pLocation.value;
        const eDate = form.eDate.value;
        const notes = form.notes.value;
        const donorImage = form.dImage.value;
        const donorName = form.dName.value;
        const donorEmail = form.dEmail.value;
        const status = form.status.value;
        // form data 
        const formData = {
            FoodImage:foodUrl,
            FoodName:foodName,
            FoodQuantity:foodQuantity,
            PickupLocation:pickupLocation,
            DonatorInfo:{
                DonatorImg:donorImage,
                DonatorName:donorName,
                DonatorEmail:donorEmail,
            },
            ExpiredDate:eDate,
            AdditionalNotes:notes,
            status:status,
        }

        try{
            const response = await axios.post('http://localhost:5000/featured-foods', formData, {
            headers: {
                'Content-Type': 'application/json',
              },
        });
        console.log(response);
        if (response.data.acknowledged === true) {
            toast.success('Food item  successfully added');
        }
        }
        catch(error){
            console.log(error);
        }

    }

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-8">Add a Food</h1>
            <form onSubmit={handleAddFood} className="border-2 p-3 bg-[#f7f2e6] rounded-lg">
                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="fName" placeholder="Food name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="fUrl" placeholder="Image url" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="fQuantity" placeholder="Food Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pLocation" placeholder="Pickup Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Expired Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="eDate" placeholder="Expired Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="notes" placeholder="Additional Notes" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="dImage" placeholder="Donator Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="dName" placeholder="Donator Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="dEmail" placeholder="Donator Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status" defaultValue={'Available'} placeholder="" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <input className="w-9/12 bg-orange-300 btn my-5" type="submit" value="Add Food" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;