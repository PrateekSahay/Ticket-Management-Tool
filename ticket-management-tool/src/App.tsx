import React from 'react';
import './App.scss';
import {Button} from '@material-ui/core';
import TicketList from './components/TicketList/TicketList';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <TicketList />
    </div>
  );
}

export default App;
