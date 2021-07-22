import React, {useState} from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CompetitionLabel from "../CompetitonLabel";
import DropDownMenu from "../DropDownMenu";
import FootballStanding from "./FootballStanding";


export default function StandingPanel(props) {
    const competition = props.competition;
    const seasons = props.seasons;
    const [selected, setSeason] = useState(seasons[0]);
    const getSeasonName = (season) =>
        season.name.split(' ').reverse()[0];


    return (
        <ExpansionPanel
            defaultExpanded={seasons.length > 0}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "space-between"
                }}>
                    <CompetitionLabel
                        competition={competition}
                    />
                    <DropDownMenu
                        label={getSeasonName(selected)}
                        items={seasons.map(season => getSeasonName(season))}
                        onSelect={(name) => {
                            setSeason(seasons.find(season => season.name === name))
                        }}
                    />
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <StandingTable
                    sport = {competition.sport}
                    season = {selected}
                />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}


function StandingTable(props){

    if (props.sport.name === 'football') {
        return (
            <FootballStanding
                season={props.season}
            />
        )
    } else if (props.sport.name === 'basketball') {
        return null;
    }
}