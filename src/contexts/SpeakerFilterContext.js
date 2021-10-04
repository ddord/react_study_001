import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider ({ children, startingShowSessions = false, satrtingEventYear = "2019" }) {

    const { 
        showSesstions, setShowSessions, 
        eventYear, setEventYear, 
        searchQuery, setSearchQuery, 
        EVENT_YEARS, 
    } = useSpeakerFilter(
        startingShowSessions, satrtingEventYear,
    );

    return (
        <SpeakerFilterContext.Provider value={{ 
            showSesstions, setShowSessions, 
            eventYear, setEventYear, 
            searchQuery, setSearchQuery, 
            EVENT_YEARS, 
        }}>
        {children}
        </SpeakerFilterContext.Provider>
    );
}

export { SpeakerFilterContext, SpeakerFilterProvider };