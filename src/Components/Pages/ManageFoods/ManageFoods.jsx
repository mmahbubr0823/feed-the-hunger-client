import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLoaderData } from "react-router-dom";
import ManagedFoodCard from "./ManagedFoodCard";

const ManageFoods = () => {
    const { user } = useAuth();
    const loadedFoods = useLoaderData()
    const [managedFoods, setManagedFoods] = useState(loadedFoods);
    console.log(managedFoods);

    useEffect(() => {
        const filteredFoods = loadedFoods.filter(filteredFood => filteredFood?.DonatorInfo?.DonatorEmail === user.email);
        setManagedFoods(filteredFoods);
    }, [loadedFoods, user.email])
    return (
        <div>
            {
                managedFoods.map(managedFood => <ManagedFoodCard key={managedFood._id} managedFood={managedFood}></ManagedFoodCard>)
            }
        </div>
    );
};

export default ManageFoods;