import * as React from 'react'
import LaunchItems from './LaunchItems'

// interface ILaunches {
//   mission_name: string;
// }

// interface IState {
//   pastLaunches: ILaunches[] | null;
// }

interface IState {
  readonly pastLaunches: any[]
}

// class Launches extends React.Component<ILaunches, IState> {
class Launches extends React.Component<{}, IState> {
  state = {
    pastLaunches: []
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches/past')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ pastLaunches: data })
        console.log('fetch', data)
      })
  }

  render() {

    const launchCards = this.state.pastLaunches.map((launch: any) => {
      return <LaunchItems
        key={launch.id}
        title={launch.mission_name}
        number={launch.flight_number}
        year={launch.launch_year}
        date={launch.launch_date_local} />
    })

    return (
      <div>
        {launchCards}
      </div>
    )
  }
}

export default Launches