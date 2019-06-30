import React from "react";
import { render } from "react-dom";
import "./index.css";
import Project from "./Projects/projects";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Project
            name="Project 1"
            lang="C#"
            sourcelink="https://github.com/nerrma/Software2Assignment"
          />
          <Project
            name="Project 2 "
            lang="Node JS"
            sourcelink="https://github.com/nerrma/nerch"
          />
          <Project
            name="Project 3"
            lang="React JS"
            sourcelink="https://github.com/nerrma/react-portfolio"
          />
          <Project name="Project 4" lang="Python" info="This was made using " />
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("projects"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
