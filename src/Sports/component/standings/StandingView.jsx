import React, {useContext} from "react";
import {
    makeStyles,
} from "@material-ui/core";
import {useFetchSeasons} from "../../js/graphql/hooks";
import {FilterContext} from "../filters/FilterProvider";
import StandingPanel from "./StandingPanel";


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


export default function StandingView() {
    const classes = useStyles();
    const {competitions} = useContext(FilterContext);
    let enabled = Array.from(competitions.values()).filter(com => com.isOn);
    const {loading, error, seasons} = useFetchSeasons();

    if (loading) {
        return <>Loading</>
    }

    if (error) {
        return <>{error.toString()}</>
    }

    return (
        <div>
            {
                enabled.map(com => (
                    <StandingPanel
                        competition={com}
                        seasons={seasons.filter(season => season.competition.id === com.id)}
                    />
                ))
            }
        </div>
    );
}
