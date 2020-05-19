// import React from 'react';
import React, { Component } from 'react'
import './App.scss';
import TicketList from './components/TicketList/TicketList';
import TicketDetails from './components/TicketDetails/TicketDetails';
import ButtonAppBar from './components/NavBar/NavBar'

// function App() {
//   return (
//     <div className="App">
//       <TicketDetails />
//       <TicketList />
//     </div>
//   );
// }

// export default App;

type IState = {
  ticketCount? : number
}

export class App extends Component<{},IState> {
  constructor(props : {}){
      super(props);
      this.updateCount = this.updateCount.bind(this);
      this.state = {
        ticketCount : 0
      }
  }

  updateCount = (count : number) => {
    this.setState({
      ticketCount : count
    });
    console.log(this.state.ticketCount)
  }

  render() {
    return (
      <div className="App">
      <ButtonAppBar />
      <TicketDetails ticketOpenCount = {this.state.ticketCount}/>
      <TicketList incrementCount = {this.updateCount}/>
    </div>
    )
  }
}

export default App
