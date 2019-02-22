import React, {Component} from 'react';
import Forecast from './Forecast';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const style = ({
    image: {
        height: 100,
        width: 97
    },
    paraFont: {
        fontSize: 41,
        margin: 0,
        color: '#7a9fe8'
    },
    divStyle: {
        textAlign: 'center',
        justifyContent: 'space-around',
        padding: '10px 0 10px 0',
        color: '#58605f'
    }
});

class Weather extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.divStyle}>

                    {this.props.location && <img src={this.props.icon} className={classes.image}/>}
                    {
                        this.props.location && <p className={classes.paraFont}>
                                {this.props.temp}°C
                            </p>
                    }
                    {
                        this.props.location && <p>
                                Humidity: {this.props.humidity}
                            </p>
                    }
                    {
                        this.props.location && <p>
                                Description: {this.props.desc}
                            </p>
                    }

                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    {
                        this.props.forecast5Day && this
                            .props
                            .forecast5Day
                            .map((day, idx) => {
                                return <Forecast day={day.day} key={idx}/>;
                            })
                    }

                </div>
            </React.Fragment>
        );
    }
}

Weather.protTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(Weather);
