
const ManagedFoodCard = ({managedFood}) => {
    const {FoodImage, FoodName} = managedFood;
    return (
        <div>
            <div className="card lg:w-[450px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={FoodImage} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{FoodName}</h2>
                        
                        {/* <p><span className='font-bold'>Note:</span>{AdditionalNotes}</p> */}
                        {/* <Link to={`/foodDetails/${_id}`}>
                        <button className='btn btn-outline mt-2 text-white bg-[#ac51f7]'>Details</button>
                        </Link> */}

                    </div>
                </div>
        </div>
    );
};

export default ManagedFoodCard;