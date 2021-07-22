import {useContext, useState} from "react";
import {FilterContext} from "../component/filters/FilterProvider";


export function useModal () {
    const [showModal, updateShowModal] = useState(false);
    const toggleModal = () => updateShowModal(state=>!state);

    return [showModal, toggleModal];
}

export function useMatchFilter() {
    const {competitions} = useContext(FilterContext);
    const [selectedDate, handleDateChange] = useState(new Date());

    let enabledCompetitions = Array.from(competitions.values())
        .filter(com => com.isOn);

    const getDateVariable = () => {
        const target = selectedDate
        const year = target.getFullYear();
        const month = target.getMonth();
        const date = target.getDate();

        const start = new Date(year, month, date, 0)
        const end = new Date(year, month, date, 23, 59)
        return {
            startDate: start.toJSON(),
            endDate: end.toJSON()
        }
    }

    return {
        ...getDateVariable(),
        competitions : enabledCompetitions,
        handleDateChange : handleDateChange
    };
}
