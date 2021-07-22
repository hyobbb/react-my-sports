import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import CompetitionLabel from "../CompetitonLabel";
import {FilterContext} from "./FilterProvider";


export function SportTile(props) {
    const {toggleSport} = useContext(FilterContext);

    let sport = props.value;
    let competitions = sport.competitions;
    let isOn = sport.isOn;

    return (
        <div style={{
            borderRadius: 10,
            padding: 10,
            cursor: "pointer",
            overflow: 'scroll',
            border: isOn ? '3px solid darkgreen' : '1px dashed grey',
            backgroundColor: isOn ? 'linen' : 'ghostwhite',
            opacity: isOn ? 1 : 0.5,
        }}
             onClick={() => toggleSport(sport.id)}
        >
            <Typography style={{
                fontSize: 20,
                color: isOn ? 'darkgreen' : 'dimgrey',
                fontWeight: isOn ? 'bold' : 'normal',
                verticalAlign: 'middle',
                textAlign: 'center',
                marginBottom: 20,
            }}
            >
                {sport.name}
            </Typography>
            {
                competitions.map(comp => (
                    <CompetitionTile
                        key={comp.id}
                        enabled={isOn}
                        value={comp}
                    />
                ))
            }
        </div>
    );
}

function CompetitionTile(props) {
    const {competitions, toggleCompetition} = useContext(FilterContext);
    let competition = props.value;
    let isOn = competitions.get(competition.id).isOn;

    return (
        <div
            style={{
                marginBottom: 10,
                opacity: isOn ? 1 : 0.5,
                border: isOn ? '3px solid darkgreen' : '1px dashed grey',
                height: "50px",
                cursor: "pointer",
                verticalAlign : 'middle',
                borderRadius : 10,
                backgroundColor : 'white',
            }}
            id={competition.name}
            onClick={(e) => {
                e.stopPropagation();
                if (props.enabled) {
                    toggleCompetition(competition.id);
                }
            }}
        >
            <CompetitionLabel
                competition={competition}
            />
        </div>
    );
}
