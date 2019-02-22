import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme
            .mixins
            .gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});



class Title extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', margin: '15px'}}>
                <Paper className={classes.root} elevation={2}>
                    <Typography variant="h4" component="h3">
                        FIND WEATHER
                    </Typography>
                    <Typography component="p">
                        Find out weather in specified location
                    </Typography>
                    <Typography component="p">
                        Also, find out Weather-forecast for next 5 days!!
                    </Typography>
                </Paper>
            </div>
        );
    }
}

Title.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Title);