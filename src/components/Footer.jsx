import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "/images/logo.png";

export default function Footer() {
  return (
    <div className="">
      <footer className="bg-[#184C3A] bg-[url('https://i.ibb.co/rfphsmfV/11.png')] bg-no-repeat bg-bottom-left bg-size-[50%_100%] text-white md:pt-20 pt-10">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-center p-4">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center mb-3">
              <img src={logo} alt="logo" className="w-24 rounded-full" />
              <h2 className="text-3xl font-bold">AgroNet</h2>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Happen active county. Winding morning ambition shyness evident to
              poor. Because elderly new to the point to main success.
            </p>

            {/* Email Box */}
            <div className="flex bg-white rounded-full overflow-hidden shadow-md">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 text-gray-700 outline-none"
              />
              <button className="bg-[#EFB940] text-black font-bold px-4 cursor-pointer">
                GO
              </button>
            </div>
          </div>

          {/* Explore */}
          <div className=" border-l border-gray-600 pl-4">
            <h3 className="text-xl font-semibold mb-5">Explore</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-[#EFB940] cursor-pointer">About Us</li>
              <li className="hover:text-[#EFB940] cursor-pointer">
                Meet Our Team
              </li>
              <li className="hover:text-[#EFB940] cursor-pointer">Services</li>
              <li className="hover:text-[#EFB940] cursor-pointer">
                News & Media
              </li>
              <li className="hover:text-[#EFB940] cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#EFB940] cursor-pointer">
                Volunteers
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <img
                  src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-2-150x150.jpg"
                  alt="post1"
                  className="w-22 rounded-md object-cover"
                />
                <div>
                  <p className=" text-[#EFB940]">April 14, 2023</p>
                  <p className="hover:text-[#EFB940] cursor-pointer">
                    Announcing if the resolution sentiments
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-1-150x150.jpg"
                  alt="post2"
                  className="w-22 rounded-md object-cover"
                />
                <div>
                  <p className="text-[#EFB940]">April 14, 2023</p>
                  <p className="hover:text-[#EFB940] cursor-pointer">
                    The Super Soil Organic Farming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center space-x-3">
                <div className="w-10 h-8 flex items-center justify-center border-2 border-dashed border-[#EFB940] rounded-full text-[#EFB940]">
                  <FaHome className="w-4 h-4" />
                </div>
                <span>151 Bhuapur Singuria Road, Ghatail , Tangail</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center border-2 border-dashed border-[#EFB940] rounded-full text-[#EFB940]">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span>agronet@krishilink.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center border-2 border-dashed border-[#EFB940] rounded-full text-[#EFB940]">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span>+880 1605654180</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-600 text-center text-gray-300 md:flex justify-around bg-[#1a4133] py-6 md:mt-32 mt-12 ">
          <p className="text-sm">
            © Copyright 2025. All Rights Reserved by AgroNet
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-[#EFB940]">
              Terms
            </a>
            <a href="#" className="hover:text-[#EFB940]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#EFB940]">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
