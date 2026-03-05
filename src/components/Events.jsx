import React, { useState } from "react";

const upcomingEvents = [
  {
    title: "Upcoming Event 1",
    date: "10 July 2025",
    description: "Join us for this amazing upcoming event!",
    image: "/assets/eventwim.jpg"
  }
];

const pastEvents = [
  {
    title: "Past Event 1",
    date: "12 Jan 2025",
    description: "Insert stuff here",
    image: "/assets/eventwim.jpg"
  },
  {
    title: "Past Event 2",
    date: "20 Feb 2025",
    description: "Insert info here",
    image: "/assets/eventwim.jpg"
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const EventCard = ({ event }) => (
    <div
      onClick={() => setSelectedEvent(event)}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
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
      <h1 className="font-[DMSerif] text-7xl mb-14 text-center">
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

      {/* Modal Popup */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center p-6 z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6 space-y-3">
              <h2 className="font-[DMSerif] text-3xl">
                {selectedEvent.title}
              </h2>

              <p className="text-gray-500">
                {selectedEvent.date}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {selectedEvent.description}
              </p>

              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;