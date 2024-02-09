import React, { useEffect, useState } from "react";

import EmployeeCard from "./EmployeeCard";
import Header from "./Header";
import Footer from "./Footer";

import { MOCK_API_URL, TEAM_ADMIN, TEAM_MEMBER } from "../../constants";

function TeamDirectory() {
  const [admin, setAdmin] = useState([]);
  const [members, setMembers] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([]);

  const getfilteredTeamMembers = (searchString) => {
    if (searchString === "") {
      setFilteredEmployeeList(employeeList);
    }
    const filteredList = employeeList.filter((data) => {
      if (
        searchString &&
        data?.first_name !== undefined &&
        !data.first_name.toLowerCase().includes(searchString.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
    setFilteredEmployeeList(filteredList);
  };

  const handleInputChange = (event) => {
    setSearchEmployee(event.target.value);
    getfilteredTeamMembers(event.target.value);
  };

  useEffect(() => {
    fetch(MOCK_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeList(data);
        setFilteredEmployeeList(data);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  useEffect(() => {
    const admins = filteredEmployeeList.filter(
      (admin) => admin.role === TEAM_ADMIN
    );
    const members = filteredEmployeeList.filter(
      (member) => member.role === TEAM_MEMBER
    );
    setAdmin(admins);
    setMembers(members);
  }, [filteredEmployeeList]);

  return (
    <>
      <div className="page-layout">
        <Header
          handleInputChange={handleInputChange}
          value={searchEmployee}
        ></Header>
        <div className="employee-container pa-4">
          <EmployeeCard title="Administrators" data={admin}></EmployeeCard>
          <hr className="divider-border" />
          <EmployeeCard title="Members" data={members}></EmployeeCard>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default TeamDirectory;
