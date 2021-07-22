import {IconButton, makeStyles, Menu, MenuItem} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {RssFeed} from "@material-ui/icons";
import FilterDialog from "./filters/FilterDialog";
import {ViewContext, ViewType} from "./ViewProvider";
import {useModal} from "../js/hooks";
import DropDownMenu from "./DropDownMenu";


const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: '10px',
    }
}));

export function SportsHeader() {
    const classes = useStyles();
    const [show, toggle] = useModal();
    const {view, selectView} = useContext(ViewContext);

    return (
        <div className={classes.header}>
            <DropDownMenu
                label={view}
                items = {[ViewType.Matches, ViewType.Standings]}
                onSelect={(value) => {
                    selectView(value)
                }}
            />
            <IconButton onClick={toggle}>
                <RssFeed/>
            </IconButton>
            <FilterDialog open={show} toggle={toggle}/>
        </div>
    );
}
