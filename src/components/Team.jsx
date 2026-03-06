import React from "react";

// TO-DO: Update with more profesh/updated pics;
const teamData = [
  {
    section: "Executives",
    members: [
      { name: "Zainab Atif", role: "President", img: "/assets/Zainab.png" },
      { name: "Riya Jain", role: "Vice President Externals", img: "/assets/Riya.png" },
      { name: "Lily Smith", role: "Vice President Internals", img: "/assets/Lily.png" },
      { name: "Safiya Safiya", role: "Treasurer", img: "/assets/Safiya.png" },
      { name: "Tara Nandwani", role: "Secretary", img: "/assets/Headshot.jpg" },
      { name: "Yashaswini Mallikarjunaiah", role: "Grievance Officer", img: "/assets/Yashu.png" },
    ],
  },
  {
    section: "Directors",
    members: Array.from({ length: 1 }, () => ({ name: "TBA..."})),
    members: [ 
      { name: "TBA", img: "/assets/dot.gif"}
      /*{ name: "Member", role: "Events Director", img: "/assets/team/default.png" },
      { name: "Member", role: "Events Director", img: "/assets/team/default.png" },
      { name: "Member", role: "HR Director", img: "/assets/team/default.png" },
      { name: "Member", role: "HR Director", img: "/assets/team/default.png" },
      { name: "Member", role: "PR/Pubs Director", img: "/assets/team/default.png" },
      { name: "Member", role: "PR/Pubs Director", img: "/assets/team/default.png" },
      { name: "Member", role: "IT Director", img: "/assets/team/default.png" },
      { name: "Member", role: "IT Director", img: "/assets/team/default.png" },*/
    ],
  },
  {
    section: "Subcommittee Members",
    members: [
      { name: "TBA", img: "/assets/dot.gif"},
      // { name: "Member", role: "Events Subcommittee"},
      // { name: "Member", role: "Events Subcommittee"},
    ],
  },
];

const Team = () => {
  return (
    <div className="bg-[#f8f7f4] min-h-screen px-6 lg:px-20 pt-14 pb-20">
      <h1 className="text-6xl font-[DMSerif] text-center mb-12">
        Meet the Team
      </h1>

      <div className="flex justify-center mb-12 overflow-hidden">
        <img
          src="/assets/team.jpg"
          alt="Team Banner"
          className="w-[80%] max-w-3xl h-[400px] object-cover rounded-lg shadow-md"
          style={{ objectPosition: "center bottom" }}
        />
      </div>

      {teamData.map((group) => (
        <div key={group.section} className="mb-12">
          <h3 className="text-3xl font-bold mb-8">{group.section}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {group.members.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.role}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="p-4">
                  <p className="font-semibold text-lg">{member.name}</p>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;