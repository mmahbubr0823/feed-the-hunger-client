import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import MyFoodRequestCart from "./MyFoodRequestCart";
import { Helmet } from "react-helmet-async";
import useFech from "../../Hooks/useFech/useFech";

const MyFoodRequest = () => {
    const {user} = useAuth();
    const {data, isLoading, isFetching, refetch} = useFech();
    const [requestedFoods, setRequestedFoods] = useState(data);
    useEffect(() => {
        const filteredFoods = data?.filter(filteredFood => filteredFood?.UEmail === user.email);
        setRequestedFoods(filteredFoods);
    }, [data, user.email])
    return (
        <div>
            <Helmet>
                <title>Feed The Hunger || MyFoodRequest</title>
            </Helmet>
            {
                requestedFoods?.length ===0 ? 
                <div className="text-center space-y-5">
                    <div className="md:flex p-5 rounded-md gap-5 bg-[#f7f4e9] items-center justify-center">
                    <img className="mx-auto w-[250px] h-[250px]" src="https://i.ibb.co/4VfW3RB/7503990.jpg" alt="" />
                    <p className="text-3xl mt-5 font-semibold">You have not requested any food yet.</p>
                    </div>
                    <Link to={'/availableFoods'}>
                    <button className="btn btn-warning">Request a Food</button>
                    </Link>
                </div>
                :
            <div>
            {
                requestedFoods?.map(requestedFood => <MyFoodRequestCart
                key={requestedFood._id}
                requestedFood={requestedFood}
                refetch={refetch}
                ></MyFoodRequestCart>)
            }
            </div>
              }
        </div>
    );
};

export default MyFoodRequest;