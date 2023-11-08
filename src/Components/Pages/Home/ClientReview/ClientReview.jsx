import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi';

const ClientReview = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-10 font-bold'>What our <span className='text-[#ff0066]'>donors</span> say:</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className="border-2 p-3 rounded-md shadow-md shadow-gray-50">
                    <div className='flex justify-between items-center '>
                    <div className="flex items-center gap-5 my-5">
                        <img className="w-[60px] rounded-full" src="https://i.ibb.co/DQDW3Xk/hardy.png" alt="" />
                        <h1 className="font-bold">John Doe</h1>
                    </div>
                    <div className='flex'>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStarHalf className='text-[gold]'></BiSolidStarHalf></span>
                    </div>
                    </div>
                    <p className="text-sm">
                    Feed the People is a grassroots initiative dedicated to providing nourishment and support to those in need. Through community-driven efforts and partnerships with local organizations, they strive to alleviate hunger and promote food security, ensuring that everyone has access to nutritious meals and essential resources.
                    </p>
                </div>
                <div className="border-2 p-3 rounded-md shadow-md shadow-gray-50">
                    <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-5 my-5">
                        <img className="w-[60px] rounded-full" src="https://i.ibb.co/DQDW3Xk/hardy.png" alt="" />
                        <h1 className="font-bold">John Doe</h1>
                    </div>
                    <div className='flex'>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStarHalf className='text-[gold]'></BiSolidStarHalf></span>
                    </div>
                    </div>
                    <p className="text-sm">
                    Feed the People is a grassroots initiative dedicated to providing nourishment and support to those in need. Through community-driven efforts and partnerships with local organizations, they strive to alleviate hunger and promote food security, ensuring that everyone has access to nutritious meals and essential resources.
                    </p>
                </div>
                <div className="border-2 p-3 rounded-md shadow-md shadow-gray-50">
                    <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-5 my-5">
                        <img className="w-[60px] rounded-full" src="https://i.ibb.co/DQDW3Xk/hardy.png" alt="" />
                        <h1 className="font-bold">John Doe</h1>
                    </div>
                    <div className='flex'>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStar className='text-[gold]'></BiSolidStar></span>
                        <span ><BiSolidStarHalf className='text-[gold]'></BiSolidStarHalf></span>
                    </div>
                    </div>
                    <p className="text-sm">
                    Feed the People is a grassroots initiative dedicated to providing nourishment and support to those in need. Through community-driven efforts and partnerships with local organizations, they strive to alleviate hunger and promote food security, ensuring that everyone has access to nutritious meals and essential resources.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;