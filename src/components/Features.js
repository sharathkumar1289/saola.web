import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
        
      />
      
      <div className="mt-8">
        
    
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Meet the features</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/fff.png"
          title="Customized Solutions"
          desc="Tailoring software and products to meet the specific needs and objectives of each client, ensuring a perfect fit for their business requirements."
        />
        <FeatureProduct
          imgSrc="/f22.png"
          title="Innovation and Technology"
          desc=" Leveraging cutting-edge technologies and innovative approaches to develop advanced solutions that drive efficiency and competitive "
        />
        <FeatureProduct
          imgSrc="/ffff.png"
          title="Problem-Solving Expertise"
          desc="Demonstrating a strong ability to identify and address complex challenges faced by clients, delivering practical and effective solutions."
        />
        <FeatureProduct
          imgSrc="/ff4.png"
          title="Continuous Support"
          desc="Providing ongoing support and maintenance services post-launch to ensure the long-term effectiveness and performance of the solutions delivered.

          "
        />
      </div>
    </section>
  );
};

export default Features;
