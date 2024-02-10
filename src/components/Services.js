import React from 'react';
import Image from "next/image";
import { useTheme } from "next-themes";

const ServiceCard = ({ imgSrc, title, desc }) => {
  const { theme } = useTheme(); // Accessing the current theme

  return (
    <div className={`flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black-700' : 'bg-white'} transition-all ease-in-out duration-400 overflow-hidden text-${theme === 'dark' ? 'gray-300' : 'gray-700'} hover:text-white rounded-lg shadow-2xl p-3 group`}>
      <Image
        src={imgSrc}
        width={250}
        height={250}
        alt="service"
        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
      />
      <h2 className={`font-semibold my-4 text-2xl text-${theme === 'dark' ? 'gray-300' : 'gray-700'} text-center`}>{title}</h2>
      <p className={`text-md text-${theme === 'dark' ? 'gray-400' : 'gray-700'} font-medium text-center`}>{desc}</p>
    </div>
  );
};

const Services = () => {
  const { theme } = useTheme(); // Accessing the current theme

  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'} py-12`}>
      <div className="container mx-auto px-5 md:px-16">
        <span className="service-name text-center text-blue-900 uppercase font-bold">OUR SERVICES</span>
        <h2 className="title text-center text-3xl text-blue-900 font-bold mt-4">Explore What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ServiceCard
            imgSrc="/web.svg"
            title="Web Development"
            desc="We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients."
          />
          <ServiceCard
            imgSrc="/app.svg"
            title="Mobile App Development"
            desc="We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility."
          />
          <ServiceCard
            imgSrc="/hosting.svg"
            title="Domain and Hosting Services"
            desc="We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space."
          />
          <ServiceCard
            imgSrc="/consultation.svg"
            title="General IT Consultations"
            desc="Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
