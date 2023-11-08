import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import MyFoodRequestCart from "./MyFoodRequestCart";
import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
    const {user} = useAuth();
    const loadedFoods = useLoaderData();
    const [requestedFoods, setRequestedFoods] = useState(loadedFoods);

    useEffect(() => {
        const filteredFoods = loadedFoods.filter(filteredFood => filteredFood?.UEmail === user.email);
        setRequestedFoods(filteredFoods);
    }, [loadedFoods, user.email])
    console.log(requestedFoods);
    return (
        <div>
            <Helmet>
                <title>Feed The Hunger || MyFoodRequest</title>
            </Helmet>
            <div>
            {
                requestedFoods.map(requestedFood => <MyFoodRequestCart
                key={requestedFood._id}
                requestedFood={requestedFood}
                ></MyFoodRequestCart>)
            }
            </div>
        </div>
    );
};

export default MyFoodRequest;