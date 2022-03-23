import React, { Component } from "react";
import Info from "./components/Info";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <>
        <h1 className="header">Resume Builder</h1>
        <div id="cv">
          <Bio />
          <Info />
          <Education />
          <Experience />
        </div>
      </>
    );
  }
}

export default App;
