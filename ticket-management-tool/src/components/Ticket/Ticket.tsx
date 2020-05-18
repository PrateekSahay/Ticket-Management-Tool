import React, { Component } from 'react'
import { ITicket } from '../Interface/TicketInterface'
import './Ticket.scss'

export class Ticket extends Component<ITicket> { 
    render() {
        return (
            <div>
                <div className = "ticket">Id : {this.props.id} Created : {this.props.created} Status : {this.props.status}</div>
                </div>
        //         {/* <div>{this.props.created}</div>                
        //         <div>{this.props.status}</div>                 */}
        //         {/* {this.props.conversations&&this.props.conversations.map(conversation => conversation&&<div>{conversation.content}</div>)}
        // {this.props.notes.map(note => <div>{note.note}</div>)} */}
            
        )
    }
}

export default Ticket
