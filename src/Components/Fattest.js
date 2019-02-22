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

class Fattest extends Component {
    state = {}
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h6" component="h6">You were Fattest in: {this.props.maxWeightMonth}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

Fattest.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Fattest);