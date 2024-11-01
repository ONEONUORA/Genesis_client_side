import AnimationWrapper from "../common/page_animation";
import Footer from "../components/footer";

const TermsAndConditions = () => {
  return (
    <AnimationWrapper>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-900">
          Terms and Conditions
        </h1>
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-md">
          <ol className="mx-auto max-w-4xl list-decimal text-lg leading-relaxed text-gray-700">
            <li className="mb-4">
              You must provide accurate and truthful information when using our
              platform. You are solely responsible for any information you
              submit.
            </li>
            <li className="mb-4">
              All reports and interactions made on{" "}
              <span className="font-bold">Genesis</span> are confidential.
              However, depending on the nature of the report, we may be required
              to share your information with legal authorities for further
              investigation.
            </li>
            <li className="mb-4">
              Our AI is designed to offer emotional support and guide users.
              However, AI responses are not a substitute for professional or
              legal advice.
            </li>
            <li className="mb-4">
              Misuse of the platform, including submitting false reports or
              abusive behavior, will result in immediate termination of your
              account and possible legal action.
            </li>
            <li className="mb-4">
              <span className="font-bold">Genesis</span> reserves the right to
              modify these terms at any time. Continued use of the platform
              signifies acceptance of any updated terms.
            </li>
            <li>
              While we strive to ensure the platform&lsquo;s reliability,{" "}
              <span className="font-bold">Genesis</span> is not liable for any
              damages resulting from the use or inability to use the platform.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </AnimationWrapper>
  );
};

export default TermsAndConditions;
