import React from 'react';

const sponsorsList = [
  {
    name: "Jane Street",
    logo: "/assets/JaneStreet.png",
  },
  {
    name: "University of New South Wales",
    logo: "/assets/UNSW.png",
  },
  {
    name: "Arc - UNSW Student Life",
    logo: "/assets/arcclubs.png",
  },
  {
    name: "UNSW Business School",
    logo: "/assets/UNSW-bs.jpg",
  }
];

const Sponsors = () => {
  return (
    <div className="bg-[#f8f7f4] min-h-screen flex flex-col items-center px-6 pt-12 pb-20">

      {/* Hero */}
      <div className="w-full flex flex-col items-center text-center px-6 pb-14">
        <h1 className="font-[DMSerif] text-7xl mb-6">
          Sponsors
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          We would like to thank the following sponsors for their continued support:
        </p>
      </div>

      {/* Sponsors */}
      <div className="w-full max-w-5xl px-6 mb-20">
        <div className="grid sm:grid-cols-2 gap-10">

          {sponsorsList.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex justify-center items-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-32 object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Prospectus */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-12 text-center mb-16">

        <h2 className="font-[DMSerif] text-4xl mb-6">
          Become a Sponsor
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Interested in supporting our society? Download our sponsorship prospectus
          to learn more about partnership opportunities and benefits.
        </p>

        <a
          href="https://drive.google.com/file/d/1S1DWYkwhnrjPjjZgZRQMBPC4yFXFpbTl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#C62218] text-white rounded-xl hover:bg-[#a81f19] transition text-lg inline-block"
        >
          View Prospectus
        </a>
      </div>

      {/* Sponsor Contact */}
      <div className="text-center pb-20 px-6">
        <p className="text-gray-700 mb-4">
          If your organisation is interested in becoming a sponsor, contact us at:
        </p>

        <a
          href="mailto:unsw.wim.industry@gmail.com"
          className="px-6 py-2 bg-[#C62218] text-white rounded-lg hover:bg-[#a81f19] transition inline-block"
        >
          unsw.wim.industry@gmail.com
        </a>
      </div>

    </div>
  );
};

export default Sponsors;