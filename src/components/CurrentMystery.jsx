/**
* CurrentMystery.jsx
*
* This component displays the currently active Rosary mystery.
* It is used inside the RosaryPage to show the mystery that the
* user is meditating on at the moment.
*
* Responsibilities:
* - Receive a single mystery through props.
* - Render its title.
* - Ensure that nothing breaks if the mystery is not yet available.
*
* Catholic context:
* - Each Rosary mystery invites the user to meditate on a moment of salvation history.
*   This component helps present that moment clearly and peacefully.
*/


function CurrentMystery({ selectedMystery }) { 
    if (!selectedMystery) return null;

    return <p>{selectedMystery}</p>;
}

export default CurrentMystery;