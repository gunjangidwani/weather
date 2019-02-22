import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Form extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.container} >
                    <Typography>
                        PLease enter the location to find the weather details
                    </Typography>
                    <form className={classes.container} onSubmit={this.props.getWeather}>
                        <TextField
                            type="text"
                            name="location"
                            placeholder="Location..."
                            id="outlined-required"
                            label="Location"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"/>
                        <Button type="submit" variant="contained" color="primary" size="small">Find Weather</Button>
                    </form>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);