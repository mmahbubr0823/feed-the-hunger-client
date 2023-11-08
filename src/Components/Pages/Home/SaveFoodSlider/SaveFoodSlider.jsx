import Marquee from "react-fast-marquee";
const SaveFoodSlider = () => {
    return (
        <div className="flex my-10">
                <button className="btn bg-[#c800ff]">Attention:</button>
            <Marquee pauseOnHover={true}>
                <p className="text-lg font-medium text-[#ff00ff]">Let us not waste foods. Save foods!! Save people!!</p>
            </Marquee>
        </div>
    );
};

export default SaveFoodSlider;