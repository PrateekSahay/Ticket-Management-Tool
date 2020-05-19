import React from 'react'
import {SimpleCard} from '../Card/Card'
import {Grid} from '@material-ui/core'
import './TicketDetails.scss'

type IProps = {
    ticketOpenCount : number
}

    const TicketDetails = (props:IProps) => {
    return (
        <>
            <Grid container direction = "row" className = "DetailsContainer" spacing = {4}>
                <Grid item md={3}><SimpleCard name = "ticketOpenCard" counter = {props.ticketOpenCount} cardName ="Ticket's Open"/></Grid>
                <Grid item md={3}><SimpleCard name = "ticketClosedCard" counter = {15} cardName ="Ticket's Closed"/></Grid>
                <Grid item md={3}><SimpleCard name = "agentOnlineCard" counter = {10} cardName ="Agent's Online"/></Grid>                
            </Grid>            
        </>
    )
}

export default TicketDetails;
