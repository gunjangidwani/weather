import React, {Component} from 'react';
import Chart from './Chart'
import Slimmest from './Slimmest';
import Fattest from './Fattest';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    paperClass: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginLeft: 5
    }
});

class WeightAnalysis extends Component {
    
    constructor() {
        super()
        this.state = {
            JAN: 0,
            FEB: 0,
            MAR: 0,
            APR: 0,
            MAY: 0,
            JUN: 0,
            JUL: 0,
            AUG: 0,
            SEP: 0,
            OCT: 0,
            NOV: 0,
            DEC: 0
        }
    }

    handleChange = (event) => {
        event.persist()
        // console.log(event)
        this.setState({
            [event.target.id]: parseInt(event.target.value)
        }, this.updateState());
    };

    updateState = () => {}

    handleOnPropChange = () => {
        console.log(this.state)
        this.props.handleOnChange(this.state);
    }
    render() {

        const {classes, WgtMon} = this.props;
        return (
            <div>
                <form className={classes.container} noValidate="noValidate" autoComplete="off">
                    <TextField
                        id="JAN"
                        label="January"
                        className={classes.textField}
                        value={this.state.JAN}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="FEB"
                        label="February"
                        className={classes.textField}
                        value={this.state.FEB}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="MAR"
                        label="March"
                        className={classes.textField}
                        value={this.state.MAR}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="APR"
                        label="April"
                        className={classes.textField}
                        value={this.state.APR}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="MAY"
                        label="May"
                        className={classes.textField}
                        value={this.state.MAY}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="JUN"
                        label="June"
                        className={classes.textField}
                        value={this.state.JUN}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="JUL"
                        label="July"
                        className={classes.textField}
                        value={this.state.JUL}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="AUG"
                        label="August"
                        className={classes.textField}
                        value={this.state.AUG}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="SEP"
                        label="September"
                        className={classes.textField}
                        value={this.state.SEP}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="OCT"
                        label="Octuber"
                        className={classes.textField}
                        value={this.state.OCT}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="NOV"
                        label="November"
                        className={classes.textField}
                        value={this.state.NOV}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>
                    <TextField
                        id="DEC"
                        label="December"
                        className={classes.textField}
                        value={this.state.DEC}
                        onChange={(e) => this.handleChange(e)}
                        margin="normal"
                        variant="outlined"
                        type="number"/>

                </form>
                <Button variant="contained" color="primary" className={classes.paperClass} onClick={this.handleOnPropChange}>Calculate</Button>
                <div className={classes.paperClass}>
                    {this.props.minWeightMonth && <Slimmest minWeightMonth={this.props.minWeightMonth}/>}
                    {this.props.maxWeightMonth && <Fattest maxWeightMonth={this.props.maxWeightMonth}/>}
                </div>
                {this.props.wgtMon.length > 0 && <Chart wgtMon={this.props.wgtMon}/>}
            </div>
        );
    }
}

WeightAnalysis.proopTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(WeightAnalysis);