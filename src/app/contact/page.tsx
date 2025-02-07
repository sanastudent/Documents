

import ContactForm from "@/components/ui/contact-form";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
    
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
        <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home . Pages <span className="text-[#FB2E86]">Contact us</span>
          </p>
        </div>
      </div>


{/* About Us Section */}
<div className="flex flex-col md:flex-row gap-10 md:gap-28 justify-center mt-14 px-4 sm:px-8 md:px-16 -ml-8">  {/* Added -ml-8 */}
  <div className="text-center md:text-left">
    <h1 className="font-josefin text-[#151875] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
      Information About us
    </h1>
    <p className="font-josefin text-[#8A8FB9] text-sm sm:text-base md:text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, <br />
      illum nihil eum quasi similique aperiam sit harum id incidunt! Enim <br />
      pariatur, quia fugiat fuga dolorum molestias inventore tempore commodi.
    </p>
    <div className="flex justify-center md:justify-start space-x-4 mt-8">
      <button className="w-6 h-6 rounded-full bg-[#5625DF] text-white flex items-center justify-center">
        <span></span>
      </button>
      <button className="w-6 h-6 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">
        <span></span>
      </button>
      <button className="w-6 h-6 rounded-full bg-[#37DAF3] text-white flex items-center justify-center">
        <span></span>
      </button>
    </div>
  </div>

  {/* Contact Way Section */}
  <div className="text-center md:text-left">
    <h1 className="font-josefin text-[#151875] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
      Contact Way
    </h1>
    <div className="flex flex-col items-center md:items-start gap-8">
      <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
        <div className="flex items-center text-center md:text-left">
          <button className="w-6 h-6 rounded-full bg-[#5726DF] text-white flex items-center justify-start pl-4">
            <span></span>
          </button>
          <div className="ml-4">
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block font-josefin">Tel-877-37-98</span>
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block font-josefin">E-Mail: Shop@store.com</span>
          </div>
        </div>
        <div className="flex items-center text-center md:text-left">
          <button className="w-6 h-6 rounded-full bg-[#FB2E86] text-white flex items-center justify-start pl-4">
            <span></span>
          </button>
          <div className="ml-4">
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">Support Forum</span>
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">For over 24 hours</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
        <div className="flex items-center text-center md:text-left">
          <button className="w-6 h-6 rounded-full bg-[#FFB265] text-white flex items-center justify-start pl-4">
            <span></span>
          </button>
          <div className="ml-4">
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">20 Mrgrat, St London,</span>
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">Great Britain, MKJS</span>
          </div>
        </div>
        <div className="flex items-center text-center md:text-left">
          <button className="w-6 h-6 rounded-full bg-[#1BE982] text-white flex items-center justify-start pl-4">
            <span></span>
          </button>
          <div className="ml-4">
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">Free Standard shipping</span>
            <span className="text-[#8A8FB9] text-sm sm:text-base md:text-sm block">on all orders</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Get in Touch Section */}
<div className="flex flex-col md:flex-row justify-between items-center py-16 px-8 space-y-8 md:space-y-0">
  {/* Left side: Form */}
  <div className="w-full ml-24 md:w-1/2 flex flex-col items-center md:items-start space-y-6">
    <h1 className="font-josefin text-[#151875] text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-6">
      Get in Touch
    </h1>
    <p className="font-josefin text-[#8A8FB9] text-sm sm:text-base md:text-lg mb-10 text-center md:text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing <br />
      elit. Illo, iure? Vero, dolorem non? Doloremque, explicabo <br />
     Consectetur obcaecati.
    </p>



    {/* Form */}
 
      <ContactForm/>
  
    </div>

  {/* Right side: Image */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0">
    <Image
      src="/group.png"
      alt="Contact"
      width={450}
      height={492}
      className="w-[600px] sm:w-[250px] md:w-[300px] lg:w-[550px] h-auto object-cover"
    />
  </div>
</div>





    </>
  );
}



























   {/* <form className="space-y-6 w-full max-w-md mx-auto md:mx-0">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Name and Email Input Fields */}
        {/* <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
        />
      </div>
      {/* Subject Input Field */}
      {/* <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      />
      // {/* Message Textarea */}
      // <textarea
      //   placeholder="Your Message"
      //   className="w-full p-3 h-32 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      // ></textarea>
      {/* Submit Button */}
  //     <button
  //       type="submit"
  //       className="w-full sm:w-[157px] h-[44px] py-3 bg-[#FB2E86] text-white text-sm rounded-md hover:bg-[#DB1D6E] mx-auto md:mx-0"
  //     >
  //       Send Email
  //     </button>
  //   </form>
  // </div> */} */} */}
