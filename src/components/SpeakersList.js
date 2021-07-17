import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

function SpeakersList({ showSessions }) {

    const [speakerData, setSpeakersData] = useState(data);

    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

    useEffect(() =>{

        async function dealyFunc() {
            await delay(2000);
            setSpeakersData(data);
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


    return (
        <div className="continer speakers-list">
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
        </div>
    );
}

export default SpeakersList;