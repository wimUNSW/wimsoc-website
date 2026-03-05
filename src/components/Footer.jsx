import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Society info */}
        <div className="space-y-4">
          <h2 className="font-[DMSerif] text-3xl">
            WIM UNSW
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Women in Management Society — UNSW  
            Empowering women in leadership, networking, and professional development.
          </p>
        </div>

        {/* social media links- replace w/ icons */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Follow Us</h3>

          <div className="flex flex-col gap-2 text-gray-400 underline">

            <a href="https://www.instagram.com/unsw_wim/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>

            <a href="https://www.facebook.com/wimsoc" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>

            <a href="https://www.linkedin.com/company/unsw-wim/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>

          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact</h3>

          <p className="text-gray-400 text-sm">
            Email: unswwimteam@gmail.com
          </p>
        </div>

      </div>

      {/* idk if we can have this i just thought it looked cool */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} WIM UNSW. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;