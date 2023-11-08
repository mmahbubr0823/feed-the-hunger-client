import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLoaderData } from "react-router-dom";
import ManagedFoodCard from "./ManagedFoodCard";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Feed The Hunger || ManageFoods</title>
            </Helmet>
            {
                managedFoods.map(managedFood => <ManagedFoodCard key={managedFood._id} managedFood={managedFood}></ManagedFoodCard>)
            }
        </div>
    );
};

export default ManageFoods;