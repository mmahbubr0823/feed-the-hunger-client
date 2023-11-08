import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";
import SaveFoodSlider from "./SaveFoodSlider/SaveFoodSlider";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Feed The Hunger || Home</title>
            </Helmet>
            <SaveFoodSlider></SaveFoodSlider>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;