import React from "react";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";


export default function MatchTable(props) {
    const matches = props.matches;
    const handleMatchInfo = () => {
    }

    const getTime = (datetime) => {
        let hour = datetime.getHours();
        let minute = datetime.getMinutes();

        return (hour > 9 ? hour : '0' + hour) + ':' + (minute > 9 ? minute : '0' + minute);
    }
    if (matches.length > 0) {
        return (
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width="10%">Time</TableCell>
                            <TableCell align="left" width="15%">Location</TableCell>
                            <TableCell align="center">Match</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            matches.map(match =>
                                (
                                    <TableRow key={match.id} onClick={() => handleMatchInfo(match)}>
                                        <TableCell>{getTime(new Date(match.scheduledDateUtc))}</TableCell>
                                        <TableCell>{match.location}</TableCell>
                                        <TableCell
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <TeamContainer
                                                team={match.awayTeam}
                                                isHome={false}
                                            />
                                            <ResultContainer
                                                result={null}
                                            />
                                            <TeamContainer
                                                team={match.homeTeam}
                                                isHome={true}
                                            />
                                        </TableCell>
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
                flex : 1,
                textAlign: 'center',
                margin: 20,
            }}>
                No match for this date
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
            width: '50%'
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

function ResultContainer(props) {
    const result = props.result;

    return (
        <div style={{
            display: "flex",
            width: '60px',
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Typography> VS </Typography>
        </div>
    );
}


