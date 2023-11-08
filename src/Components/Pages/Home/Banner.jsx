import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" flex items-center gap-5 bg-[#f2f7e8] py-4 px-8 rounded-md">
            <div className="w-1/2">
                <div>
                    <h1 className="text-4xl font-semibold">Lets <span className="text-[#e95e8c]">Feed</span> Them </h1>
                    <p className="text-sm mt-3">Feeding the hunger is a noble initiative aimed at alleviating food insecurity in our community. By collaborating with local food banks, shelters, and volunteers, this program strives to provide nourishing meals to those in need. Through food drives, fundraisers, and distribution events, it ensures that individuals and families struggling with hunger have access to essential sustenance.... </p>
                </div>
                <div className="flex gap-10 mt-5">
                    <button className="btn bg-[#fc6969]">
                        Read More
                    </button>
                    <Link to={'/addFood'}>
                        <button className="btn bg-[#f74cd4]">
                            Donate
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2">
                <img className="rounded-md" src="https://i.ibb.co/y6f805w/close-up-people-holding-apples-bag.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;