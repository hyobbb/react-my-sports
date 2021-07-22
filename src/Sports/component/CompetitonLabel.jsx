import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        whiteSpace: "pre-line",
        overflow: 'scroll',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    title: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightBold,
        verticalAlign: 'middle',
    },
}));


export default function CompetitionLabel(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img
                className={classes.logo}
                src={props.competition.logoUrl}
            />
            <Typography
                color= "textPrimary"
                className={classes.title}
            >
                {props.competition.name}
            </Typography>
        </div>
    );
}