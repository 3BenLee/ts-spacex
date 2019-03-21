import * as React from "react";
import LaunchItems from "./LaunchItems";
import { Button } from "react-bootstrap";

interface IState {
  readonly clippedLaunches: any[];
  readonly pastLaunches: any[];
  readonly seeMore: boolean;
}

class Launches extends React.Component<{}, IState, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      clippedLaunches: [],
      pastLaunches: [],
      seeMore: false
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches/past")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ pastLaunches: data });
        console.log("shit", data);
      });
  }

  render() {
    return (
      <div>
        <h2>I love git</h2>
        <h3>I hate git! Yes , No?</h3>
        <p>Ben has a spaceship!</p>
        <h2>I love git</h2>
        <h3>I hate git! Yes , No?</h3>
        <p>Ben has a spaceship!</p>
        <h3>I hate git! Yes , No?</h3>
        <p>Ben has a spaceship!</p>
        <Button />
      </div>
    );
  }
}

export default Launches;
