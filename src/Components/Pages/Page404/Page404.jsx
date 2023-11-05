import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <Link to={'/'}>
                <button className="btn btn-outline ml-5 mt-5"><FaArrowLeft></FaArrowLeft>Home</button>
            </Link>
            <div className="flex justify-center items-center my-20">
                <img className=" w-[600px] h-[600]" src="https://i.ibb.co/9T8ykCT/222468-P1-PZG2-870.jpg" alt="" />
            </div>
        </div>
    );
};

export default Page404;