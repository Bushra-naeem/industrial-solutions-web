import React from "react";
import { team_members } from "../assets/assets";

const Team = () => {
  return (
    <div className="container mx-auto px-4 md:8 lg:px-40 py-12" id="pages">
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="text-base text-gray-500 mb-2 flex items-center gap-2">
          See Our Team Member.
        </h3>
        <h1 className="text-4xl font-bold mb-4">
          Let's Check our creative team.
        </h1>
        <p className="text-gray-600 w-full max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit viverra purus
          senectus sapien habitant rutrum himenaeos curabitur posuere.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {team_members.map((member, index) => (
          <div key={index} className="p-2">
            {/* Image with fixed height */}
            <div className="w-full">
              <img
                className="h-4/5 w-full border border-gray-300 object-cover mb-4"
                src={member.img}
                alt={member.name}
              />
            </div>

            {/* Name and role */}
            <h5 className="text-2xl font-semibold">{member.name}</h5>
            <p className="text-gray-500 text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
