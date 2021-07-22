import {useQuery} from "@apollo/client";
import {FETCH_COMPETITIONS, FETCH_FOOTBALL_STANDINGS, FETCH_MATCHES, FETCH_SEASONS} from "./graphql";

export function useFetchMatch(variables) {
    const {loading, error, data} = useQuery(FETCH_MATCHES, {
        variables : variables
    });

    if(data) {
        const matches = data['matches'];
        return {loading, error, matches}
    }
    return {loading, error, data};
}


export function useFetchCompetitions() {
    const {loading, error, data} = useQuery(FETCH_COMPETITIONS);

    if(data) {
        const query = data['competitions'];
        const competitions = query.map(com=>{
            return {
                sport : com.sport,
                id : com.id,
                name : com.shortName,
                logoUrl : com.logoUrl,
            }
        });
        return {loading, error, competitions};
    } else {
        return {loading, error};
    }
}


export function useFetchSeasons() {
    const {loading, error, data} = useQuery(FETCH_SEASONS);

    if(data) {
        const seasons = data['seasons'];
        return {loading, error, seasons};
    } else {
        return {loading, error};
    }
}

export function useFetchFootballStandings(season_id) {
    const {loading, error, data} = useQuery(FETCH_FOOTBALL_STANDINGS,
        {
            variables : {
                season_id : season_id
            }
        }
    );

    if(data) {
        const standings = data['footballStandings'];
        return {loading, error, standings};
    } else {
        return {loading, error};
    }
}
