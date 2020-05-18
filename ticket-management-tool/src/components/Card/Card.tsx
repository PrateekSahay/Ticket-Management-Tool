import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'

 
type ColorProp = {
    counter : number,
    cardName : string
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
                <Card>
                    <CardContent color="colorToAssign">
                        <Typography className="CounterWrapper" color="textSecondary" gutterBottom>
                            <b className = "Counter">{this.props.counter}</b>
                        </Typography>
                        <Typography className="CardNameWrapper" color="textSecondary">
                            {this.props.cardName}
                        </Typography>
                    </CardContent>    
                </Card>
            </div>
        )
    }
}
