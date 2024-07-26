import React from 'react';
import Link from "next/link";
import { Facebook, Instagram, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="mt-3 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Whether you're interested in commissioning a piece, joining a workshop, or just want to appreciate the art of paper quilling, I'd love to hear from you.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <SocialLink href="https://facebook.com/zawhtiketh" icon={<Facebook />} label="Facebook" />
              {/* <SocialLink href="https://instagram.com/zawhtiketh" icon={<Instagram />} label="Instagram" />
              <SocialLink href="mailto:zawhtike@example.com" icon={<Mail />} label="Email" /> */}
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-lg shadow-2xl mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Workshop Inquiry</h3>
            <p className="text-gray-300 mb-6">
              Interested in learning the art of paper quilling? Send a message to join our next workshop!
            </p>
            <Link href="https://m.me/zawhtiketh" className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Message on Facebook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300" aria-label={label}>
    <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300">
      {React.cloneElement(icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
    </span>
  </Link>
);

export default ContactSection;