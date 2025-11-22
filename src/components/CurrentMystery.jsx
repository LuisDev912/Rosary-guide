function CurrentMystery({ currentMystery }) { 
    if (!currentMystery) return null;

    return (
        <div className="Current-mystery">
            <h3>{currentMystery}</h3>
        </div>
    );
}

export default CurrentMystery;