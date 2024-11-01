import AnimationWrapper from "../common/page_animation";
import Footer from "../components/footer";

const HowToUse = () => {
  return (
    <AnimationWrapper>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-900">
          How to Use Genesis
        </h1>
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-md">
          <ol className="list-decimal text-lg leading-relaxed text-gray-700">
            <li className="mb-4 pl-2">
              Sign up with your email address or social media accounts. Your
              personal information is kept confidential and secure.
            </li>
            <li className="mb-4 pl-2">
              Use the &ldquo;Report Incident&ldquo; button to submit your case.
              You can provide as much detail as you feel comfortable with, and
              our AI will offer emotional support along the way.
            </li>
            <li className="mb-4 pl-2">
              Our AI system will interact with you, offering real-time guidance
              and comfort before your report is forwarded to the relevant
              authorities.
            </li>
            <li className="mb-4 pl-2">
              Track the status of your case. Authorities will reach out if
              further action is required.
            </li>
            <li className="mb-4 pl-2">
              Browse our resources section for information on gender-based
              violence, survivor stories, and legal rights.
            </li>
            <li className=" pl-2">
              If you need immediate emotional support, click on the &ldquo;Contact Us&ldquo; button to chat with our experts, which is available
              24/7.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </AnimationWrapper>
  );
};

export default HowToUse;
