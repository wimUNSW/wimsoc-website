import React from "react";

// Empty name and picture for now; TO-DO
const teamData = [
  {
    section: "Executives",
    members: [
      { name: "Member", role: "President", img: "/assets/team/default.png" },
      { name: "Member", role: "Vice President", img: "/assets/team/default.png" },
      { name: "Member", role: "Treasurer", img: "/assets/team/default.png" },
      { name: "Member", role: "Secretary", img: "/assets/team/default.png" },
      { name: "Member", role: "Grievance Officer", img: "/assets/team/default.png" },
    ],
  },
  {
    section: "Directors",
    members: [
      { name: "Member", role: "Events Director", img: "/assets/team/default.png" },
      { name: "Member", role: "Events Director", img: "/assets/team/default.png" },
      { name: "Member", role: "HR Director", img: "/assets/team/default.png" },
      { name: "Member", role: "HR Director", img: "/assets/team/default.png" },
      { name: "Member", role: "PR/Pubs Director", img: "/assets/team/default.png" },
      { name: "Member", role: "PR/Pubs Director", img: "/assets/team/default.png" },
      { name: "Member", role: "IT Director", img: "/assets/team/default.png" },
      { name: "Member", role: "IT Director", img: "/assets/team/default.png" },
    ],
  },
  {
    section: "Subcommittee Members",
    members: [
      { name: "Member", role: "Events Subcommittee"},
      { name: "Member", role: "Events Subcommittee"},
    ],
  },
];

const Team = () => {
  return (
    <div className="bg-white py-20 px-6 lg:px-20">
      <h2 className="text-4xl font-[DMSerif] text-center mb-12">Meet the Team</h2>

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
                <div className="w-full h-48 overflow-hidden">
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