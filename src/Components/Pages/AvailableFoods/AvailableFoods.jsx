import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";
import { useEffect, useState } from "react";
const AvailableFoods = () => {
    const loadedFoods = useLoaderData();
    const [searchedFoods, setSearchedFoods] = useState(loadedFoods);
    const [dropdownFoods, setDropdownFoods] = useState([]);

      // for dropdown 
    useEffect(()=>{
        const foodName = loadedFoods.filter((dropdownFood, index) => index===loadedFoods.findIndex(obj=> dropdownFood.FoodName===obj.FoodName));
        setDropdownFoods(foodName)
    }, [loadedFoods])

    // getting dropdown value 
    const handleSearch = (e) => {
        e.preventDefault();
        const fieldValue = e.target.fName.value;
        const filteredFood = loadedFoods.filter(searchedFood => searchedFood.FoodName === fieldValue);
        setSearchedFoods(filteredFood)
    }
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Search foods by name:</h1>
                <div className="form-control my-5">
                    <form onSubmit={handleSearch}>
                        <label className="input-group">
                            <select name="fName" className="input input-bordered">
                                {
                                    dropdownFoods.map(singleFood => <option key={singleFood._id}>
                                        {
                                            singleFood.FoodName
                                        }
                                    </option>)
                                }
                            </select>
                            <input type="submit" className="btn bg-[#e39ce8]" value="Search" />
                        </label>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-5">
                {
                    searchedFoods.map(availableFood => <AvailableFoodCard key={availableFood._id} availableFood={availableFood}></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;