import Mysteries from "../components/Mysteries";
import PrayerList from "../components/PrayersList";
import Steps from "../components/Steps";
import MysteryGroup from "../components/MysteryGroup";

/**
* RosaryPage.jsx
* 
* This page acts as the main container for the interactive Rosary guide.
* It brings together all core components (Steps, PrayersList, MysteryGroup)
* and prepares the logic needed to pray the Rosary in a structured, guided way.
* 
* Responsibilities:
* - Determine the correct mystery group for the current day of the week.
* - Retrieve all mystery, prayer, and step data from i18n.
* - Track the user's current mystery using component state.
* - Render the prayer steps, mysteries of the day, and main prayers.
* - Provide controls to advance through the mysteries.
* 
* Notes:
* - This page will evolve into the "main screen" of the application.
* - Styling and routing can be added later as the project grows.
* - The logic here ensures that App.jsx can stay clean and minimal.
*/


function RosaryPage() {
    return (
        <div>
            <Steps />
            <Mysteries />
            <PrayerList />
            <MysteryGroup />
        </div>
    );
}

export default RosaryPage;