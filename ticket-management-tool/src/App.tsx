import React from 'react';
import './App.scss';
import TicketList from './components/TicketList/TicketList';
import TicketDetails from './components/TicketDetails/TicketDetails';

function App() {
  return (
    <div className="App">
      <TicketDetails />
      <TicketList />
    </div>
  );
}

export default App;
