import React from "react";

const upcomingEvents = [
  {
    title: "Stay tuned for upcoming events!",
    date: "",
    description: "...",
    image: "/assets/favicon2.png",
    link: "https://www.facebook.com/share/14EDXLUvWEQ/?mibextid=wwXIfr"
  }
];

const pastEvents = [
  {
    title: "Halloween Cruise",
    date: "30 Decemeber 2025",
    description: "UNSW WIM",
    image: "/assets/event1.JPG",
    link: "https://facebook.com/events/s/halloween-cruise/4135606586767549/"
  },
  {
    title: "Unmute - Own The Mic",
    date: "24 July 2025",
    description: "WIM x WIESOC x Toastmasters",
    image: "/assets/event2.JPG",
    link: "https://facebook.com/events/s/unmute-own-the-mic/1088587339860332/"
  },
  {
    title: "Networking Night",
    date: "18 July 2025",
    description: "WIM x WIC",
    image: "/assets/event3.JPG",
    link: "https://facebook.com/events/s/gcg-x-ais-x-wic-x-wim-x-capita/1428097231646461/"
  },
  {
    title: "Clubs Takeover",
    date: "16 July 2025",
    description: "UNSW WIM",
    image: "/assets/event4.JPG",
    link: "https://facebook.com/events/s/wimsoc-clubs-takeover/1286601323058648/"
  },
  {
    title: "Bite For A Better Cause",
    date: "26 June 2025",
    description: "UNSW WIM",
    image: "/assets/event5.JPG",
    link: "https://facebook.com/events/s/wimsoc-bite-for-a-better-cause/695680129897211/"
  },
  {
    title: "Linkedin Photoshoot",
    date: "4 June 2025",
    description: "WIM x FPSG",
    image: "/assets/event6.JPG",
    link: "https://facebook.com/events/s/wim-x-fpsg-linkedin-photoshoot/1231261295178875/"
  },
];

const Events = () => {

  const EventCard = ({ event }) => (
    <div
      onClick={() => window.open(event.link, "_blank")}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer transform hover:-translate-y-2"
    >
     <img
        src={event.image}
        alt={event.title}
        className={`w-full h-56 ${
          event.image.includes("favicon")
            ? "object-contain bg-white p-6"
            : "object-cover"
        }`}
      />

      <div className="p-6 space-y-2">
        <h3 className="font-[DMSerif] text-2xl">{event.title}</h3>
        <p className="text-gray-500 text-sm">{event.date}</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8f7f4] min-h-screen flex flex-col items-center px-6 pt-12 pb-20">

      {/* Title */}
      <h1 className="font-[DMSerif] text-7xl mb-12 text-center">
        Events
      </h1>

      {/* Upcoming Events */}
      <section className="w-full max-w-6xl mb-20">
        <h2 className="font-[DMSerif] text-5xl mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full max-w-6xl">
        <h2 className="font-[DMSerif] text-5xl mb-10">
          Past Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;