import React from "react";
import Modal from "../Modal/modal";
import backdrop from "../Backdrop/backdrop";
import "./project.css";

class Project extends React.Component {
  state = {
    creating: false
  };

  openModal = () => {
    this.setState({ creating: true });
  };

  closeModal = () => {
    this.setState({ creating: false });
  };

  render() {
    const { ...props } = this.props;
    return (
      <>
        {this.state.creating && <backdrop />}
        {this.state.creating && (
          <Modal
            title={props.name}
            info={props.info}
            cancel={this.closeModal}
          />
        )}
        <div className="project">
          <h1 onClick={this.openModal}>{props.name}</h1>
          <h3 className="language">{props.lang}</h3>
          <a className="source" target="_blank" href={props.sourcelink}>
            {" "}
            View Source{" "}
          </a>
        </div>
      </>
    );
  }
}

export default Project;
