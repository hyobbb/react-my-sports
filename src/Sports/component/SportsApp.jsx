import React from "react";
import {SportsHeader} from "./SportsHeader";
import {FilterProvider} from "./filters/FilterProvider";
import {ViewProvider, ViewType} from "./ViewProvider";
import {useFetchCompetitions} from "../js/graphql/hooks";
import SportsBody from "./SportsBody";


export default function SportsApp() {
    const {loading, error, competitions} = useFetchCompetitions()

    if(loading) {
        return <>Loading</>
    }

    if(error) {
        return <>{error.toString()}</>
    }

    return (
        <div style={{
            marginLeft: '30px',
            marginRight: '30px',
            marginTop: '20px',
            overflow: 'auto',
        }}>
            <FilterProvider
                competitions={competitions}
            >
                <ViewProvider
                    value={ViewType.Matches}
                >
                    <SportsHeader/>
                    <SportsBody/>
                </ViewProvider>
            </FilterProvider>
        </div>
    )
}
