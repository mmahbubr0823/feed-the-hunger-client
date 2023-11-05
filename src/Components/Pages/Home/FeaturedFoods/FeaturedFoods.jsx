import { useLoaderData } from 'react-router-dom';
import FeaturedFoodsCard from './FeaturedFoodsCard';
import { useEffect, useState } from 'react';

const FeaturedFoods = () => {
    const loadedFoods = useLoaderData();
    const [featuredFoods, setFeaturedFoods] = useState([]);
    useEffect(()=>{
        const sortedItems = loadedFoods.sort((a, b) =>b.FoodQuantity - a.FoodQuantity)
        setFeaturedFoods(sortedItems)
    }, [loadedFoods])
    return (
        <div className='mx-auto'>
           <div className='grid grid-cols-2 gap-4 my-5'>
           {
                featuredFoods.slice(0, 6).map(featuredFood =><FeaturedFoodsCard key={featuredFood._id} featuredFood={featuredFood}></FeaturedFoodsCard>)
            }
           </div>
        </div>
    );
};

export default FeaturedFoods;