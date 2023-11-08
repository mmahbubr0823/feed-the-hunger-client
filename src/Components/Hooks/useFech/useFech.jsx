import { useQuery } from "@tanstack/react-query";

const useFech = () => {
    const {data, isLoading, isFetching, refetch}= useQuery({
        queryKey:['requestedFoods'],
        queryFn: async()=>{
            const data = fetch('https://assignment-11-server-wine-theta.vercel.app/requested-foods');
            return (await data).json();
        }
    })
    return {data, isLoading, isFetching, refetch};
};

export default useFech;