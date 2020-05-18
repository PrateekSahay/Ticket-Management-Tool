import React, { Component } from 'react'
import { ITicket } from '../Interface/TicketInterface'
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import Ticket from '../Ticket/Ticket'
import {Grid, Paper, GridListTile, GridList} from '@material-ui/core'
import './TicketList.scss' 

type IState = {
    tickets? : ITicket []
}

export class TicketList extends Component<{},IState> {
    constructor(props : {}){
        super(props);
        this.getTickets = this.getTickets.bind(this);
        this.clickTicket = this.clickTicket.bind(this);
        this.state = {
            tickets : [],
        };
    }
    componentDidMount() {
        this.getTickets();        
    }

    clickTicket = () => {
        console.log("Clicked");
    }

    getTickets = () => {
        fetch('https://localhost:44380/api/Tickets/all')
        .then(resp => resp.json())
        .then(data => {
             this.setState({
            tickets : data
        });
        console.log(data);
        console.log(this.state);
        }
        );
    }
    render() {
        return (                
            <>
                <h2 className = "HeaderTicket">Tickets</h2>
                <TableContainer component={Paper} className="tableContainer">
                    <Table className = "table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"><b>Ticket Id</b></TableCell>
                                <TableCell align="center"><b>Status&nbsp;</b></TableCell>
                                <TableCell align="right"><b>Created&nbsp;</b></TableCell>            
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.tickets.map((ticket) => (
                                <TableRow key={ticket.id}>
                                    <TableCell component="th" scope="row" align ="left">{ticket.id}</TableCell>
                                    <TableCell align="center">{ticket.status}</TableCell>
                                    <TableCell align="right">{ticket.created}</TableCell>              
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default TicketList

// <>
            //     <Grid container spacing={5} direction = "column" className = "GridContainer">
            //         {this.state.tickets.map(ticket =>
            //                 <Grid item md = {6} onClick = {this.clickTicket} className = "GridItem">
            //                     <Button><Ticket {...ticket}/></Button>
            //                 </Grid>                            
            //         )}
            //     </Grid>                 
            // </>
                //     {/* <Grid item md={6} onClick = {this.clickTicket}>
                //         <Button>Hello</Button>
                //     </Grid>
                //     <Grid item md={6}>
                //         <Paper>Hello</Paper>
                //     </Grid>
                //     <Grid item md={6}>
                //         <Paper>Hello</Paper>
                //     </Grid> */}
                    
                

                // {/* <GridList  cols={1}>
                // {this.state.tickets.map((ticket) => (
                //     // <GridListTile key={tile.id} cols={1}>
                //         <Button>{ticket.status}</Button>
                //     // </GridListTile>
                //     ))}
                // </GridList> */}
                // {/* {this.state.tickets.map(ticket => <Ticket {...ticket}/>)} */}

