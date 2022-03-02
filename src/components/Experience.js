import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      startDate: "",
      endDate: "",
      company: "",
      title: "",
      disc: "",
      edit: false,
    };
  }

  handleStartDateChange = (e) => {
    this.setState({ startDate: e.target.value });
  };

  handleEndDateChange = (e) => {
    this.setState({ endDate: e.target.value });
  };

  handleCompanyChange = (e) => {
    this.setState({ company: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDiscChange = (e) => {
    this.setState({ disc: e.target.value });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { startDate, endDate, company, title, disc, edit } = this.state;

    return (
      <div id="experience">
        <p className="expLength">
          <span>
            {startDate ? startDate : "20XX"} - {endDate ? endDate : "20XX"}
          </span>
          <p className="title">{title ? title : "Web Dev"}</p>
        </p>
        <h4 className="company">{company ? company : "GoogAppFlix"}</h4>
        <p className="disc">
          {disc
            ? disc
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>

        {edit && (
          <form id="exp-edit" className="edit-form">
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
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" onChange={this.handleTitleChange} />
            <label htmlFor="company">Company: </label>
            <input
              id="company"
              type="text"
              onChange={this.handleCompanyChange}
            />
            <label htmlFor="Disccription">Disccription: </label>
            <input id="disc" type="text" onChange={this.handleDiscChange} />
            <button onClick={this.toggleEdit}>Close Edit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Experience;
