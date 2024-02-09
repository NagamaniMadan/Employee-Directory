import React from "react";

const TeamMember = ({ member }) => (
  <div className="team-member" key={member.id}>
    <img src={member.img} alt="employee" />
    <div>
      <h3 className="employee_name">
        {member.first_name} {member.last_name}
      </h3>
      <p className="grey">{member.email}</p>
    </div>
  </div>
);

export default function EmployeeCard({ title, data }) {
  return (
    <>
      <h2 className="grey ma-l2">{title}</h2>
      <div className="flex flex-wrap">
        {data.length > 0 ? (
          data.map((member) => <TeamMember key={member.first_name} member={member} />)
        ) : (
          <p>No {title.toLowerCase()} found.</p>
        )}
      </div>
    </>
  );
}
