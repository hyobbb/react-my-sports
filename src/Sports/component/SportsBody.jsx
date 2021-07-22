import React, {useContext} from "react";
import {ViewContext, ViewType} from "./ViewProvider";
import ScheduleView from "./schedules/ScheduleView";
import StandingView from "./standings/StandingView";


export default function SportsBody() {
    const {view} = useContext(ViewContext);

    if(view===ViewType.Matches){
        return (
            <ScheduleView/>
        );
    } else {
        return <StandingView/>
    }
}
