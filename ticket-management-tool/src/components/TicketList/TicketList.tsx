import React, { Component } from 'react'
import { ITicket } from '../Interface/TicketInterface'
import { Button } from '@material-ui/core';
import Ticket from '../Ticket/Ticket'

type IState = {
    tickets : ITicket []
}

export class TicketList extends Component<{},IState> {
    constructor(props : {}){
        super(props);
        this.getTickets = this.getTickets.bind(this);
        this.state = {
            tickets : [{
                id : 1,
                created : "ticket 1",
                status : "status",
                conversations : [
                    {
                        id : "id",
                        created : "created",
                        title : "title",
                        content : "content"
                    }
                ],
                notes : [
                    {
                        note : "note 1",
                    },
                    {
                        note : "note 2",
                    }
                ]
            }
        ]
        }
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
            <div>
                <Button onClick={this.getTickets}>Get</Button>
                {this.state.tickets.map(ticket => <Ticket {...ticket}/>)}
            </div>
        )
    }
}

export default TicketList

