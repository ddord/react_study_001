import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADINIG: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

function useRequestSpeaksers(delayTime = 1000){

    const [speakerData, setSpeakersData] = useState(data);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADINIG);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

    useEffect(() =>{

        async function dealyFunc() {
            try {
                await delay(delayTime);
                //throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setSpeakersData(data);
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
            
            
        }
        dealyFunc();        
    }, []);


    function onFavoriteToggle(id) {
        const speakerRecPrevious = speakerData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecupdated = {
            ...speakerRecPrevious,
            favorite: !speakerRecPrevious.favorite
        };
        const speakerDataNew = speakerData.map(function (rec) {
            return  rec.id === id ? speakerRecupdated : rec;
        });

        setSpeakersData(speakerDataNew)
    }

    return {
        speakerData,
        requestStatus,
        error,
        onFavoriteToggle
    };

}