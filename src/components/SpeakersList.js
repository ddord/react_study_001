import { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay"; 
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakersList({ showSessions }) {

    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord,
    } = useRequestDelay(2000, data);

    const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

    if (requestStatus === REQUEST_STATUS.FAILURE){
        return (
            <div className="text-danger">
                ERROR: <b>loading Speaker Data Failed {error}</b>
            </div>
        );
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
                    {speakersData
                        .filter(function (speaker) {
                            return (
                                speaker.first.toLowerCase().includes(searchQuery) ||
                                speaker.last.toLowerCase().includes(searchQuery)
                            );
                        })
                        .filter(function (speaker) {
                            return speaker.sessions.find((session) => {
                                return session.eventYear === eventYear;
                            });
                        })                        
                        .map(function (speaker){        
                        return (
                            <Speaker 
                                key={speaker.id} 
                                speaker={speaker} 
                                showSessions={showSessions}
                                onFavoriteToggle={(doneCallback) => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite,
                                    }, doneCallback);
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