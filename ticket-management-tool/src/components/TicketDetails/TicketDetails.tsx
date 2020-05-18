import React from 'react'
import {SimpleCard} from '../Card/Card'
import {Grid} from '@material-ui/core'
import './TicketDetails.scss'

export default function TicketDetails() {
    return (
        <>
            <Grid container direction = "row" className = "DetailsContainer" spacing = {4}>
                <Grid item md={3}><SimpleCard counter = {26} cardName ="Ticket's Open"/></Grid>
                <Grid item md={3}><SimpleCard counter = {15} cardName ="Ticket's Closed"/></Grid>
                <Grid item md={3}><SimpleCard counter = {15} cardName ="Agent's Online"/></Grid>
                {/* <Grid item md={3}><SimpleCard counter = {15} cardName ="Agent's Online"/></Grid>                 */}
            </Grid>            
        </>
    )
}
