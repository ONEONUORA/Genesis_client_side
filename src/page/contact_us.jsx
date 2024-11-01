import bgImage5 from "../assets/contact.png";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <>
      <div className="mb-5">
        <div className="flex flex-col justify-center text-center">
          <h3 className="mb-6 text-4xl font-bold text-blue-900">Contact Us</h3>

          <h6 className="mb-7 text-xl font-semibold text-red-400">
            <i className="bi bi-arrow-right-short"></i>
            Support Without Limits: We are Open 24/7
            <i className="bi bi-arrow-left-short"></i>
          </h6>
        </div>

        <div className="flex justify-center gap-5">
          <div className="">
            <img
              src={bgImage5}
              alt="Image of a nurse on call"
              className="w-[60%]"
            />
          </div>

          <div className="">
            <p className="my-5 font-bold text-gray-600">
              Reach Our Support Team
            </p>
            <div>
              <div className="mt-1 flex gap-6">
                <p className="text-red-500">SEND A MESSAGE</p>
                <div className="flex gap-5 text-[3rem] text-blue-600">
                  <a href='mailto:onuorabube44@gmail.com?subject=Inquiry%20about%20your%20services&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."'>
                    <i className="bi bi-envelope"></i>
                  </a>
                  <a href="https://wa.me/2349072611604" target="_blank">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>

              <div className="mt-1 flex gap-10">
                <p className="text-red-500">CALL US</p>
                <div className="mt-2">
                  <ul>
                    <li>09012345Genesis</li>
                    <li>07098756Genesis</li>
                    <li>08065312Genesis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
