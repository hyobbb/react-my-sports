import React from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MatchTable from "./MatchTable";
import CompetitionLabel from "../CompetitonLabel";



export default function SchedulePanel(props) {
    const competition = props.competition;
    const matches = props.matches;

    return (
        <ExpansionPanel
            defaultExpanded={matches.length > 0}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                <CompetitionLabel
                    competition={competition}
                />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <MatchTable
                    matches={matches}
                />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

