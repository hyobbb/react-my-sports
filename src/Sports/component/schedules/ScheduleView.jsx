import React from "react";
import {
    makeStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SchedulePanel from "./SchedulePanel";
import {useMatchFilter} from "../../js/hooks";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {useFetchMatch} from "../../js/graphql/hooks";


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightBold,
        verticalAlign: 'bottom',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        margin: '20px',
    },
}));


export default function ScheduleView() {
    const classes = useStyles();
    const {startDate, endDate, competitions, handleDateChange} = useMatchFilter();
    let {loading, error, matches} = useFetchMatch({
        startDate: startDate,
        endDate: endDate,
        competitions : competitions.map(com=>com.id)
    });

    if (loading) {
        return <>Loading</>
    }

    if (error) {
        return <>{error.toString()}</>
    }

    return (
        <div>
            <Typography className={classes.title}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={startDate} onChange={handleDateChange}/>
                </MuiPickersUtilsProvider>
            </Typography>
            {
                competitions.map(com => (
                    <SchedulePanel
                        competition={com}
                        matches={matches.filter(match => match.competition.id === com.id)}
                    />
                ))
            }
        </div>
    );
}
