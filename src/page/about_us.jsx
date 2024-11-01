import AnimationWrapper from "../common/page_animation";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <AnimationWrapper>
      <div className="min-h-screen bg-gray-100 p-8 ">
        <h1 className="mb-6 text-4xl font-bold text-blue-900 text-center">About Us</h1>
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-bold">Genesis</span>, we believe that every
            voice matters and that everyone has the right to feel safe. Our
            mission is to provide survivors of gender-based violence with a
            safe, discreet, and empowering platform to report incidents, access
            emotional support, and receive the justice they deserve.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Our platform integrates AI technology to offer real-time comfort and
            guidance before your issue is forwarded to the relevant authorities.
            Whether you need immediate support or a trusted space to share your
            experience, <span className="font-bold">Genesis</span> is here to
            help you regain control of your life.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            We stand with you. Together, we can end the cycle of violence and
            create a future where safety and dignity are guaranteed for all.
          </p>
        </div>
      </div>
      <Footer />
    </AnimationWrapper>
  );
};

export default AboutUs;
