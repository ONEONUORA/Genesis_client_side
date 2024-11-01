import Image1 from "../assets/help.jpg";
import Image2 from "../assets/police.jpg";
import Image3 from "../assets/hands.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bot from "../assets/chatbot.png";
import Footer from "../components/footer";
import Image4 from "../assets/prison.jpg";
import Move from "../components/moving";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    alert(`Thanks for signing up, ${email}!`);
    setEmail(""); // Reset email field
  };

  return (
    <>
      <Move />
      <div className="sticky top-0 z-10 float-right mr-[4rem]">
        <button>
          <Link to="/chatbot">
            <img src={Bot} alt="Chatbot" className="w-[80px]" />
          </Link>
        </button>
      </div>
      <div className="relative h-screen w-full">
        <img
          src={Image1}
          alt="Background Image"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 flex w-full flex-col items-center bg-black bg-opacity-50 p-8 text-white">
          <h1 className="text-4xl font-extrabold leading-tight tracking-wide md:text-6xl lg:text-8xl">
            Genesis
          </h1>
          <p className="mt-4 text-base font-light tracking-wider md:text-lg lg:text-2xl">
            Your New Beginning Starts Here
          </p>
          <Link to='/signin' className="mt-5 rounded-full bg-blue-700 px-3 py-2 font-semibold">
            Get Help Now
          </Link>
        </div>
      </div>

      <div className="flex h-screen flex-col md:flex-row">
        <div className="flex w-full flex-col justify-center p-8 text-center md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">Speak Up.....</h1>
          <img src={Image3} alt="Image" className="mt-4 h-auto w-full" />
          <p className="mt-4 text-xl font-semibold text-blue-800">
            We stand with you
          </p>
        </div>

        <img
          src={Image2}
          alt="Image"
          className="h-full w-full object-cover md:w-1/2"
        />
      </div>

      <div className="bg-gray-100 py-10">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          What Our Users Say
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="italic text-gray-700">
              &ldquo;Genesis provided me with the resources I needed to report
              my situation safely. The support I received made all the
              difference.&ldquo;
            </p>
            <h3 className="mt-4 font-semibold">— Sarah L.</h3>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="italic text-gray-700">
              &ldquo;I felt heard and understood. Genesis connected me with
              professionals who truly care about helping survivors.&ldquo;
            </p>
            <h3 className="mt-4 font-semibold">— John D.</h3>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="italic text-gray-700">
              &ldquo;Thanks to Genesis, I found the courage to speak up. The
              platform made it easy for me to access help discreetly.&ldquo;
            </p>
            <h3 className="mt-4 font-semibold">— Emily R.</h3>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-white py-10">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          What We Offer
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gray-200 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Confidential Reporting</h3>
            <p>
              Safe and anonymous reporting tools to help you share your story.
            </p>
          </div>
          <div className="rounded-lg bg-gray-200 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Support Resources</h3>
            <p>Access to counseling, legal aid, and local support services.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-semibold">Is my information safe?</h3>
            <p>
              Yes, we prioritize your privacy and safety. All reports are
              confidential.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-semibold">How do I report an incident?</h3>
            <p>
              You can report an incident using our confidential reporting tool.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-semibold">
              What support services are available?
            </h3>
            <p>
              We provide access to counseling, legal advice, and community
              support resources.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <img src={Image4} alt="Image" />
        </div>
        <div className="bg-black py-10">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Our Mission
          </h2>

          {/* Flex container for the boxes */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-5 md:grid-cols-3">
            {/* Empowering Survivors Box */}
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h3 className="mb-4 text-xl font-semibold">
                Empowering Survivors
              </h3>
              <p className="text-gray-700">
                We provide a safe platform for survivors to take the first step
                toward healing and justice.
              </p>
            </div>

            {/* Ending Violence Box */}
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Ending Violence</h3>
              <p className="text-gray-700">
                Our mission is to put an end to violence through awareness,
                advocacy, and action.
              </p>
            </div>

            {/* Reporting Violence, Restoring Hope Box */}
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h3 className="mb-4 text-xl font-semibold">
                Reporting Violence, Restoring Hope
              </h3>
              <p className="text-gray-700">
                Through reporting, we help restore hope for a future free from
                fear and oppression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="py-10">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          Stay Updated
        </h2>
        <form onSubmit={handleNewsletterSignup} className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 rounded-l-lg border p-2 md:w-80"
            required
          />
          <button
            type="submit"
            className="rounded-r-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-center text-gray-600">
          Join our newsletter for updates and resources.
        </p>
      </div>
      {/* Footer section */}

      <Footer />
    </>
  );
};

export default Home;
