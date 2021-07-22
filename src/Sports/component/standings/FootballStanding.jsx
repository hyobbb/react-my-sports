import React from "react";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {useFetchFootballStandings} from "../../js/graphql/hooks";


export default function FootballStanding(props) {
    const season = props.season;
    const {loading, error, standings} = useFetchFootballStandings(season.id);
    if(loading) {
        return <>Loading</>
    }
    if(error) {
        return <>{error.toString()}</>
    }

    if (standings.length > 0) {
        return (
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell align="center">Points</TableCell>
                            <TableCell align="center">Played</TableCell>
                            <TableCell align="center">W</TableCell>
                            <TableCell align="center">D</TableCell>
                            <TableCell align="center">L</TableCell>
                            <TableCell align="center">GF</TableCell>
                            <TableCell align="center">GA</TableCell>
                            <TableCell align="center">GD</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            standings.map(data =>
                                (
                                    <TableRow key={data.team.id}>
                                        <TableCell align="center">{data.position}</TableCell>
                                        <TableCell align="center">
                                            <TeamContainer
                                                team={data.team}
                                                isHome={true}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{data.points}</TableCell>
                                        <TableCell align="center">{data.played}</TableCell>
                                        <TableCell align="center">{data.won}</TableCell>
                                        <TableCell align="center">{data.drawn}</TableCell>
                                        <TableCell align="center">{data.lost}</TableCell>
                                        <TableCell align="center">{data.goalsFor}</TableCell>
                                        <TableCell align="center">{data.goalsAgainst}</TableCell>
                                        <TableCell align="center">{data.goalDifference}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else {
        return (
            <div style={{
                flex: 1,
                textAlign: 'center',
                margin: 20,
            }}>
                Data doesn't exist
            </div>
        )
    }

}


function TeamContainer(props) {
    const isHome = props.isHome;
    const team = props.team;

    return (
        <div style={{
            overflow: "hidden",
        }}>
            <div style={{
                display: 'flex',
                flexDirection: isHome ? "row" : "row-reverse",
            }}>
                <img
                    src={team.logoUrl}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                />
                <Typography>{team.name}</Typography>
            </div>
        </div>
    )
}