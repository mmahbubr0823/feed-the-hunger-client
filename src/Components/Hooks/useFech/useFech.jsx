import { useQuery } from "@tanstack/react-query";

const useFech = () => {
    const {data, isLoading, isFetching, refetch}= useQuery({
        queryKey:['requestedFoods'],
        queryFn: async()=>{
            const data = fetch('http://localhost:5000/requested-foods');
            return (await data).json();
        }
    })
    return {data, isLoading, isFetching, refetch};
};

export default useFech;