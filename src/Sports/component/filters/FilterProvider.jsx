import React, {useEffect, useState} from "react";


export const FilterContext = React.createContext([]);

export const FilterProvider = ({children, competitions}) => {
    let [sportFilter, setSportFilter] = useState(new Map())
    let [competitionFilter, setCompetitionFilter] = useState(new Map())

    useEffect(() => {
        let sports = new Map();
        let coms = new Map();
        competitions.forEach((com) => {
            if (sports.has(com.sport.id)) {
                let items = sports.get(com.sport.id);
                items.competitions.push(com)
            } else {
                sports.set(com.sport.id, {
                    isOn: true,
                    ...com.sport,
                    competitions: [com]
                });
            }

            coms.set(com.id, {
                ...com,
                isOn: true,
            });
        });

        setSportFilter(sports);
        setCompetitionFilter(coms);
    }, [competitions]);

    const toggleSport = (id) => {
        let currentState = sportFilter.get(id);
        if (currentState) {
            currentState.isOn = !currentState.isOn;
            setSportFilter((prev) =>
                new Map(prev).set(id, currentState)
            );

            currentState.competitions.forEach(com => {
                com.isOn = currentState.isOn;
                setCompetitionFilter((prev) =>
                    new Map(prev).set(com.id, com)
                );
            });
        }
    }

    const toggleCompetition = (id) => {
        let currentState = competitionFilter.get(id);
        if (currentState) {
            currentState.isOn = !currentState.isOn;
            setCompetitionFilter((prev) =>
                new Map(prev).set(id, currentState)
            );
        }
    }

    return (
        <FilterContext.Provider
            value={{
                sports: sportFilter,
                competitions: competitionFilter,
                toggleSport: toggleSport,
                toggleCompetition: toggleCompetition,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}