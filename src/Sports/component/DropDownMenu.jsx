import {makeStyles, Menu, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";


const useStyles = makeStyles((theme) => ({
    button: {
        color: 'darkred'
    }
}));


export default function DropDownMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSelect = (value) => {
        props.onSelect(value);
        handleClose();
    }

    return (
        <div>
            <Button
                className={classes.button}
                variant="contained"
                color="inherit"
                onClick={handleClick}
            >
                {props.label}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={!!(anchorEl)}
                onClose={handleClose}
            >
                {
                    props.items.map(item => (
                        <MenuItem onClick={() => onSelect(item)}>
                            {item}
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}