import AnimationWrapper from "../common/page_animation";
import Footer from "../components/footer";
import {Link} from "react-router-dom"

const PrivacyPolicy = () => {
  return (
  
    <AnimationWrapper>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-center text-4xl font-bold text-blue-900">
        Privacy Policy
      </h1>
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-md">
        <p className="text-lg leading-relaxed text-gray-700">
          At <span className="font-bold">Genesis</span>, we value your privacy
          and are committed to protecting your personal information. Here&lsquo;s how
          we collect, use, and protect your data:
        </p>
        <ul className="ml-8 mt-4 list-disc text-lg leading-relaxed text-gray-700">
          <li className="mb-4">
            <span className="font-bold">Information Collection:</span> We
            collect personal information, such as your name, email address, and
            details of any reports submitted. This information is stored
            securely and is only accessible by authorized personnel.
          </li>
          <li className="mb-4">
            <span className="font-bold">Use of Data:</span> The information you
            provide is used to help authorities respond to your report, provide
            you with emotional support, and improve user experience through AI
            interactions.
          </li>
          <li className="mb-4">
            <span className="font-bold">Confidentiality:</span> Your data is
            kept confidential. We will not share it with third parties without
            your consent, except when required by law.
          </li>
          <li className="mb-4">
            <span className="font-bold">AI Data Usage:</span> We may collect
            anonymized data from AI interactions to improve the platform.
            However, no personal details are shared without consent.
          </li>
          <li className="mb-4">
            <span className="font-bold">Cookies:</span> Our platform uses
            cookies to track your preferences and improve user experience.
          </li>
          <li className="mb-4">
            <span className="font-bold">Data Security:</span> We use advanced
            encryption and security measures to protect your data.
          </li>
          <li>
            <span className="font-bold">User Rights:</span> You can access,
            modify, or delete your information anytime. If you have concerns,
            reach us at <Link to='/contact_us' className="text-blue-500">Contact Us.</Link>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </AnimationWrapper>
  );
};

export default PrivacyPolicy;
