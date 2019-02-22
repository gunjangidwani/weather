import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = ({
    card: {
        width: 160,
        height: 300,
        padding: 10,
        margin: 10
    },
    image: {
        height: 100,
        width: 97
    },
    paraFont: {
        fontSize: 33,
        margin: 0,
        color: '#fff',
        backgroundColor: '#333'
    }
});

class Forecast extends Component {

    render() {
        const classes = this.props;
        const {day} = this.props;
        if (!day) 
            return null;
        return (
            <Card className={classes.card}>

                <img src={day.condition.icon} className={classes.image}/>

                <CardContent className={classes.paraFont}>
                    <Typography variant="h5" component="h2">{day.avgtemp_c}°C</Typography>
                    <Typography component="p" style={{margin: '20'}}>{day.condition.text}</Typography>
                </CardContent>
            </Card>
        );
    }
}

Forecast.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Forecast);