import React, { Component } from 'react'
import { ITicket } from '../Interface/TicketInterface'

export class Ticket extends Component<ITicket> { 
    render() {
        return (
            <div>
                <div>{this.props.id}</div>
                <div>{this.props.created}</div>                
                <div>{this.props.status}</div>                
                {/* {this.props.conversations&&this.props.conversations.map(conversation => conversation&&<div>{conversation.content}</div>)}
        {this.props.notes.map(note => <div>{note.note}</div>)} */}
            </div>
        )
    }
}

export default Ticket
