import React, { Component } from "react";

class Info extends Component {
  constructor() {
    super();

    this.state = {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
      address: "",
      phone: "",
      email: "",
      github: "",
      edit: false,
      editPhoto: false,
    };
  }

  handlePhotoChange = (e) => {
    this.setState({
      photo: e.target.value,
    });
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleGithubChange = (e) => {
    this.setState({
      github: e.target.value,
    });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  toggleEditPhoto = () => {
    this.setState((prevState) => ({
      editPhoto: !prevState.editPhoto,
    }));
  };

  render() {
    const { photo, address, phone, email, github, edit, editPhoto } =
      this.state;

    let profilePhoto = {
      backgroundImage: "url(" + photo + ")",
    };

    return (
      <div id="info">
        <div className="header"></div>
        <div
          id="profile-photo"
          style={profilePhoto}
          onClick={this.toggleEditPhoto}
        />
        <div className="address">
          <h2>Address</h2>
          <p>{address ? address : "123 Galaxy Way"}</p>
        </div>
        <div className="phone">
          <h2>Phone Number</h2>
          <p>{phone ? phone : "000-000-0000"}</p>
        </div>
        <div className="email">
          <h2>Email</h2>
          <p>{email ? email : "placeholder@email.com"}</p>
        </div>
        <div className="github">
          <h2>Github</h2>
          <p>github.com/{github ? github : "user-name"}</p>
        </div>
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Edit
        </button>

        {edit && (
          <form id="infor-edit" className="edit-form">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              onChange={this.handleAddressChange}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="number"
              placeholder="Enter your PhoneNo."
              onChange={this.handlePhoneChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={this.handleEmailChange}
            />
            <label htmlFor="github">Github Username</label>
            <input
              id="github"
              type="text"
              placeholder="Enter your github user name"
              onChange={this.handleGithubChange}
            />
            <button type="button" onClick={this.toggleEdit}>
              Close Edit
            </button>
          </form>
        )}

        {editPhoto && (
          <form id="photo-edit" className="edit-form">
            <label htmlFor="photo">Photo URL</label>
            <input id="photo" type="text" onChange={this.handlePhotoChange} />
            <button type="button" onClick={this.toggleEditPhoto}>
              Close Edit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Info;
