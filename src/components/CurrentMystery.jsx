function CurrentMystery({ selectedMystery }) { 
    if (!selectedMystery) return null;

    return <p>{selectedMystery}</p>;
}

export default CurrentMystery;