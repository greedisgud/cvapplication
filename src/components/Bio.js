import React, { Component } from "react";

class Bio extends Component {
  constructor() {
    super();
    this.state = { name: "", title: "", bio: "", edit: false };
  }

  handleNameChage = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleTitleChage = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleBioChage = (e) => {
    this.setState({
      bio: e.target.value,
    });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { name, title, bio, edit } = this.state;

    return (
      <div id="bio">
        <h2 className="name">{name ? name : "Your Name"}</h2>
        <h3 className="title">{title ? title : "Title"}</h3>
        <h3 className="bio">Bio</h3>
        <p className="bioPara">
          {bio
            ? bio
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>

        {edit && (
          <form id="bio-edit" className="edit-form">
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={this.handleNameChage} />
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" onChange={this.handleTitleChage} />
            <label htmlFor="bio">Bio: </label>
            <input id="bio" type="text" onChange={this.handleBioChage} />
            <button type="button" onClick={this.toggleEdit}>
              Close Edit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Bio;
