import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <div className="flex flex-col items-center">
                    <img className="w-28 h-28 rounded-md" src="https://i.ibb.co/dGphmgc/6895997.jpg" alt="" />
                    <a className=" normal-case lg:text-xl xl:text-4xl font-semibold">Feed The <span className="text-[#fa4a4a]">Hunger</span></a>
                </div>
                <p>Provides Foods since 2000</p>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </aside>
            <nav>
                <div className="grid grid-cols-3 gap-4">
                    <div className="mr-5">
                        <header className="footer-title">Address</header>
                        <p>
                            Level-4, 34, Awal Centre, Banani, Dhaka <br />
                            Support: web@xxxxx.com <br />
                            Helpline: 01xxxxxxx <br />
                            (Available : Sat - Thu, 10:00 AM to 7:00 PM)
                        </p>
                    </div>
                    <div>
                        <header className="footer-title">Useful links</header>
                       <ul>
                        <li>Blog</li>
                        <li>Success</li>
                        <li>Donate</li>
                        <li>Terms and Conditions</li>
                       </ul>
                    </div>
                    <div>
                        <header className="footer-title">Follow Us</header>
                        <ul className="space-y-2">
                        <li><FaFacebook className="text-2xl"></FaFacebook></li>
                        <li><FaTwitter  className="text-2xl"></FaTwitter></li>
                        <li><FaInstagram  className="text-2xl"></FaInstagram></li>
                        <li><FaYoutube  className="text-2xl"></FaYoutube></li>
                       
                       </ul>
                    </div>
                </div>
            </nav>
        </footer>
            
        </div>
    );
};

export default Footer;