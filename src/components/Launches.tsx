import * as React from "react";
import LaunchItems from "./LaunchItems";
import { Button } from "react-bootstrap";

interface IState {
  readonly clippedLaunches: any[];
  readonly pastLaunches: any[];
  readonly seeMore: boolean;
}

class Launches extends React.Component<{}, IState> {
  state = {
    clippedLaunches: [],
    pastLaunches: [],
    seeMore: false
  };

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches/past")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ pastLaunches: data });
        console.log("fetch", data);
      });
  }

  render() {
    return (
    <div>
      <h2>I love git</h2>
      <Button />
    </div>

  }
}

export default Launches;
