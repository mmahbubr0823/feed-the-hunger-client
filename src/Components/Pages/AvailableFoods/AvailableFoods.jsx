import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFoods = () => {
    const loadedFoods = useLoaderData();
    return (
        <div>
           <div className="grid grid-cols-2 gap-4 my-5">
            {
                loadedFoods.map(availableFood => <AvailableFoodCard key={availableFood._id} availableFood={availableFood}></AvailableFoodCard>)
            }
           </div>
        </div>
    );
};

export default AvailableFoods;