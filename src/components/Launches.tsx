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

  toggleSeeMore = () => {

  }

  render() {
    const launches: any[] = [];
    const clippedLaunches: any[] = [];
    const launchData = this.state.pastLaunches;
    const clipNumber = 4;

    if (launchData) {launchData.map((launch: any) => {
      launches.push(
        <LaunchItems
          key={launch.id}
          title={launch.mission_name}
          number={launch.flight_number}
          year={launch.launch_year}
          date={launch.launch_date_local}
        />)}

    if (launches > clipNumber) {
      this.setState(launches.slice(0,4)

    }

      return <React.Fragment>
        {this.state.clippedLaunches}
        <Button onClick={this.toggleSeeMore()} />
        </React.Fragment>
      }
  }
}

export default Launches;
