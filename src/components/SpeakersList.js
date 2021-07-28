import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestSpeaksers, {REQUEST_STATUS} from "../hooks/useRequestSpeakers"; 

function SpeakersList({ showSessions }) {

    const {
        setSpeakersData,
        requestStatus,
        error,
        onFavoriteToggle
    } = useRequestSpeaksers(2000)
    

    if (hasErrored === true){
        return (
            <div className="text-danger">
                ERROR: <b>loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    //if (isLoading === true) return <div>Loading...</div>

    return (
        <div className="continer speakers-list">
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className="row">
                    {speakerData.map(function (speaker){        
                        return (
                            <Speaker 
                                key={speaker.id} 
                                speaker={speaker} 
                                showSessions={showSessions} 
                                onFavoriteToggle={() => {
                                    onFavoriteToggle(speaker.id);
                                }}
                            />
                        );        
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;