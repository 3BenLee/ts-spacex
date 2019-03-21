import * as React from "react";
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
        console.log("shit", data);
      });
  }

  render() {
    return (
      <div>
        <h2>I love git</h2>
        <h3>I hate git!</h3>
        <p>I want to go run today.</p>
        <h1>It's too late.</h1>
        <p>Boo!</p>
        <h2>it's nice weather today.</h2>
        <Button />
      </div>
    );
  }
}

export default Launches;
