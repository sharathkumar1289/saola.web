import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl hover:text-rose-600 transition-colors duration-300">
              <span className="text-rose-600">Saola </span>Innovations
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              Tailoring Technology To Innovations
            </p>

            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/saolainnovations/"
                target="_blank"
              >
                <FacebookOutlinedIcon className="text-black-800 hover:text-rose-600 hover:-translate-y-1 transition-all duration-300" />
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/saolainnovations/"
                target="_blank"
              >
                <LinkedInIcon className="text-black-800 hover:text-rose-700 hover:-translate-y-1 transition-all duration-300" />
              </Link>
              <Link href="https://twitter.com/skillscrolls/" target="_blank">
                <TwitterIcon className="text-black-800 hover:text-rose-700 hover:-translate-y-1 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/saolainnovations/"
                target="_blank"
              >
                <InstagramIcon className="text-black-800 hover:text-rose-700 hover:-translate-y-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm leading-loose">
                  Address: Nizampet, Hyderabad
                </p>
                <p className="text-sm leading-loose">
                  Email: info@saola.in
                </p>
                <p className="text-sm leading-loose">
                  Phone: +91 9281443441
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies We Work With</h3>
                <p className="text-sm leading-loose hover:text-rose-700 transition-colors duration-300">
                  - Web Development: Next.js, React
                </p>
                <p className="text-sm leading-loose hover:text-rose-700 transition-colors duration-300">
                  - App Development: Java, Flutter
                </p>
                <p className="text-sm leading-loose hover:text-rose-700 transition-colors duration-300">
                  - Internet of Things
                </p>
                <p className="text-sm leading-loose hover:text-rose-700 transition-colors duration-300">
                  - Machine Learning
                </p>
                <p className="text-sm leading-loose hover:text-rose-700 transition-colors duration-300">
                  - Data Analysis: Power BI
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 Saola Innovations - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
