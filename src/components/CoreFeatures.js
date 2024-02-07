import React, { useState } from "react";
import Image from "next/image";

const CoreFeatures = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col gap-4 flex-1 p-6 md:px-12 lg:px-24">
      <span className="text-rose-600 uppercase block font-semibold tracking-widest">
        CORE FEATURES
      </span>
      <h2 className="capitalize text-2xl md:text-3xl xl:text-5xl font-bold my-3">
      Bridging Solutions to Real-World Challenges
      </h2>
      <h4 className="capitalize text-l md:text-xl xl:text-2xl font-bold my-3">
      Innovative Product Development for Practical Solutions
      </h4>
      <p className="text-lg leading-loose text-justify">
      we go beyond traditional software development. We specialize in crafting holistic products and solutions aimed at solving real-world problems for organizations, institutions, and SMEs. Our multidisciplinary team is committed to creating impactful solutions that address your specific challenges and drive tangible results.
      </p>
      {/* <p className="text-lg leading-loose text-justify">
        Journey through the "Tech Cosmos" with Skillscrolls, where we not only
        explore but pioneer the frontiers of data science, machine learning,
        and cutting-edge technologies like Azure, Fabric, Databricks, and Power
        Automate. Your success story is meticulously crafted with "IT Artistry,"
        where our tailored solutions evolve alongside your unique business
        needs, from data management to cloud computing.
      </p> */}
      {expanded && (
        <>
          <p className="text-lg leading-loose text-justify">
          <a className="text-l font-bold"> Problem-Solving Approach:</a> We thrive on challenges and excel in finding creative solutions to complex problems. Whether it's streamlining operations, improving efficiency, or enhancing customer experiences, we're here to help you overcome obstacles and achieve your goals.


          </p>
          <p className="text-lg leading-loose text-justify">
          <a className="text-l font-bold">Cross-Disciplinary Expertise:</a> Our diverse team brings together expertise from various fields, including software development, design, and business strategy. This interdisciplinary approach allows us to develop comprehensive solutions that encompass all aspects of your business needs.

          </p>
          <p className="text-lg leading-loose text-justify">
          <a className="text-l font-bold">End-to-End Support:</a> From ideation to implementation, we provide full-cycle support to ensure that your project is successful every step of the way. Our collaborative process ensures that your vision is brought to life effectively and efficiently.
          </p>
         
        </>
      )}
      <button
        className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full"
        onClick={toggleExpansion}
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default CoreFeatures;
