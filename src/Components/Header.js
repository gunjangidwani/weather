import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import cyan from '@material-ui/core/colors/cyan'


const styles = {
    root: {
        flexGrow: 1
    },
    linkStyle : {
        textDecoration: 'none'
    },
    colr: {
        colr: cyan[600]
    }
};


class Header extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.colr}>
                    <Toolbar>
                        <Typography variant="h6">
                            <Button variant="contained"> <Link to="/" className={classes.linkStyle}> Weather </Link> </Button>
                            <Button variant="contained"> <Link to={'/SI'} className={classes.linkStyle}>Simple Interest</Link> </Button>
                            <Button variant="contained"> <Link to={'/WA'} className={classes.linkStyle}>Weight Analysis</Link> </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);