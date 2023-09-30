import { useState, useEffect} from "react";

export default function OctaveTuning({ socket, octave }) {
    const [upperValues, setUpperValues] = useState([])
    const [lowerValues, setLowerValues] = useState([])

    useEffect(()=>{
        socket.emit("get_tuning_values", octave, (upper, lower) => {
            setUpperValues(upper.map((e) => ""+e));
            setLowerValues(lower.map((e) => ""+e));
        });
    }, [])

    const upperInputs = upperValues.map((val, i) => {
        return <input
            type="text"
            className="tuning-input"
            onChange={(e) => newTuning("u", i, e)}
            defaultValue={upperValues[i]}
            key = {"u"+i}
        />
    })

    const lowerInputs = lowerValues.map((val, i) => {
        return <input
            type="text"
            className="tuning-input"
            onChange={(e) => newTuning("l", i, e)}
            defaultValue={lowerValues[i]}
            key = {"l"+i}
        />
    })

    function newTuning(ul, i, val) {
        if (ul === "u") {
            const oldUpper = upperValues
            oldUpper[i] = val
            setUpperValues(oldUpper)
        } else {
            const oldLower = lowerValues
            oldLower[i] = val
            setLowerValues(oldLower)
        }
    }

    return (
        <div className="octave-tuning" >
            <div>{upperInputs}</div>
            <div>{lowerInputs}</div>
        </div>
    );
}