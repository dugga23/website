import React from "react";
import { useNavigate } from "react-router-dom";

function Resource() {
  const navigate = useNavigate();

  const navi = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div>
        <section>
          <h1 className="text-[40px] text-center font-bold">Career with Us</h1>
          <p className="text-[25px] text-center font-sans">
            We regard the Eminence Infotech team as co-founders in our business.
            The entire team from The Software House has invested an incredible
            amount of time to truly understand our business, our users and their
            needs.
          </p>
        </section>
        <br />
        <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 pl-4 pr-4 md:pl-20 md:pr-20">
          <div className="md:w-1/2">
            <h1 className="pt-20 text-[25px] font-semibold">
              Join Rishus Infotech, your gateway to the IT industry and beyond.
              Explore opportunities with leading companies and kickstart your
              career journey today!
            </h1>
            <p className="text-[30px] font-bold">
              Pursue Further Information Here
            </p>
            <button
              onClick={navi}
              className="text-[20px] font-bold bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Click Here
            </button>
          </div>
          <div className="text-center md:w-1/2">
            <img
              src="\pexels-fox-1595385 (1).jpg"
              width="800"
              height="800"
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h1 className="text-center text-[40px] pt-10">
            Internship Training Courses Offered
          </h1>
          <div className="bg-black bg-opacity-10">
            <div className="text-center flex flex-wrap justify-center">
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Software Development:</h1>
                <p>
                  Overview of software development Introduction to programming
                  languages (e.g., Python, Java, C++) Basics of software
                  engineering principles (e.g., OOP, algorithms, data
                  structures) Overview of version control systems (e.g., Git)
                  Introduction to software development methodologies (e.g.,
                  Agile, Scrum)
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Website Development</h1>
                <p>
                  Introduction to website development Different types of
                  websites (e.g., static websites, dynamic websites, e-commerce
                  websites) HTML, CSS, JavaScript basics Introduction to popular
                  web development frameworks (e.g., React, Angular, Vue.js)
                  Basics of responsive web design Web hosting and domain
                  registration
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Game Development:</h1>
                <p>
                  Introduction to game development Overview of game engines
                  (e.g., Unity, Unreal Engine) Basics of game design principles
                  Introduction to scripting languages for game development
                  (e.g., C#, JavaScript) Overview of 2D and 3D game development
                  Basics of game monetization strategies
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>App Development</h1>
                <p>
                  Introduction to app development Overview of mobile app
                  development platforms (e.g., Android Studio, Xcode) Basics of
                  mobile app design Introduction to app development frameworks
                  (e.g., Flutter, React Native) Basics of app testing and
                  debugging
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Graphic Designing</h1>
                <p>
                  Introduction to graphic design Overview of graphic design
                  software (e.g., Adobe Photoshop, Illustrator, InDesign) Basics
                  of typography, color theory, and composition Introduction to
                  logo design, branding, and visual identity Basics of image
                  editing and manipulation
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Social Media Marketing</h1>
                <p>
                  Introduction to social media marketing Overview of popular
                  social media platforms (e.g., Facebook, Instagram, Twitter)
                  Basics of creating social media marketing strategies
                  Understanding social media analytics Introduction to paid
                  advertising on social media platforms
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>E-commerce Website Developmentt</h1>
                <p>
                  Introduction to e-commerce Overview of popular e-commerce
                  platforms (e.g., Shopify, WooCommerce, Magento) Basics of
                  setting up an online store Understanding payment gateways and
                  security Basics of e-commerce SEO and marketing strategies
                </p>
              </section>
              <section className="border border-gray-300 p-4 mb-4 md:w-1/2 lg:w-1/3">
                <h1>Google Facebook Ads</h1>
                <p>
                  Introduction to online advertising Overview of Google Ads and
                  Facebook Ads platforms Basics of creating ad campaigns
                  Understanding ad targeting and bidding strategies Basics of ad
                  performance tracking and optimization For each topic, you can
                  create detailed articles, tutorials, guides, or video content
                  to educate your audience. Make sure to keep the content
                  informative, engaging, and up-to-date with the latest trends
                  and technologies in each field.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resource;
