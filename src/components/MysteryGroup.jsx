import { useTranslation } from "react-i18next";

/**
MysteryGroup Component

A component that displays a group of Mysteries from the Rosary, such as Joyful, Sorrowful, Glorious, or Luminous mysteries.

Responsibilities:
- Receive a "title" (string) and "items" (array) through props.
- Render a heading for the mystery group.
- Display each mystery as a list item.

Notes:
- This component is intentionally generic so it can be reused four times inside the main Mysteries component.
- Future responsive styling will be added through CSS Modules.
*/

function MysteryGroup({title, items}) {
    const { t } = useTranslation();
    return (
        <>
            <h3>{t(title)}</h3>
            <div className="MysteriesGroup">
                <ol>
                    
                    {items?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))} 
                </ol>
            </div>
        </>
    );
};

export default MysteryGroup;