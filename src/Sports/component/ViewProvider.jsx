import React, {useState} from "react";

export const ViewType = {
    Matches: 'Matches',
    Standings: 'Standings',
}

export const ViewContext = React.createContext(ViewType.Matches);

export const ViewProvider = ({children, value}) => {
    let [view, setView] = useState(value)

    const selectView = (view) => {
        if (view === ViewType.Matches || view === ViewType.Standings) {
            setView(view);
        }
    }

    return (
        <ViewContext.Provider
            value={{
                view: view,
                selectView: selectView,
            }}
        >
            {children}
        </ViewContext.Provider>
    );
}