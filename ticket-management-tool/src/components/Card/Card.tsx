import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'
import './Card.scss'

 
type ColorProp = {
    counter : number,
    cardName : string
    name : string
};

export class SimpleCard extends Component<ColorProp> {
    // useStyles = makeStyles({

    //     title: {
    //       fontSize: 50,
    //     },
    //     pos: {
    //       marginBottom: 12,
    //     },
    //   });
      
    // classes = this.useStyles();
    render() {
        return (
            <div>
                <Card className= {this.props.name}>
                    <CardContent>
                        <Typography className="CounterWrapper" color="textSecondary" gutterBottom>
                            <b className = "Counter">{this.props.counter}</b>
                        </Typography>
                        <Typography className="CardNameWrapper" color="textSecondary">
                            <b>{this.props.cardName}</b>
                        </Typography>
                    </CardContent>    
                </Card>
            </div>
        )
    }
}
