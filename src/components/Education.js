import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      degree: "",
      school: "",
      gpa: "",
      edit: false,
    };
  }

  handleStartDateChange = (e) => {
    this.setState({ startDate: e.target.value });
  };

  handleEndDateChange = (e) => {
    this.setState({ endDate: e.target.value });
  };

  handleDegreeChange = (e) => {
    this.setState({ degree: e.target.value });
  };

  handleSchoolChange = (e) => {
    this.setState({ school: e.target.value });
  };

  handleGpaChange = (e) => {
    this.setState({ gpa: e.target.value });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { startDate, endDate, degree, school, gpa, edit } = this.state;

    return (
      <div id="education">
        <h2>Education</h2>
        <p className="eduLength">
          <span>
            {startDate ? startDate : "20XX"} - {endDate ? endDate : "20XX"}
          </span>
          <p className="degree">{degree ? degree : "B.S Web Dev"}</p>
        </p>
        <h4 className="school">{school ? school : "Big Time Uni"}</h4>
        <p className="gpa">{gpa ? gpa : "4.0"}</p>
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>

        {edit && (
          <form id="edu-edit" className="edit-form">
            <label htmlFor="startDate"> Start Date:</label>
            <input
              id="startDate"
              type="text"
              onChange={this.handleStartDateChange}
            />
            <label htmlFor="endDate">End Date: </label>
            <input
              id="endDate"
              type="text"
              onChange={this.handleEndDateChange}
            />
            <label htmlFor="degree">Degree: </label>
            <input id="degree" type="text" onChange={this.handleDegreeChange} />
            <label htmlFor="school">School: </label>
            <input id="school" type="text" onChange={this.handleSchoolChange} />
            <label htmlFor="gpa">GPA: </label>
            <input id="gpa" type="text" onChange={this.handleGpaChange} />
            <button onClick={this.toggleEdit}>Close Edit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
