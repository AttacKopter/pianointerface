import { useState } from "react";
import OctaveTuning from "./OctaveTuning.jsx"

export default function Tuning({ socket }) {
    const [octave, setOctave] = useState(0)

    return (
        <div className="tuning" >
            <select id="octaveSelect" onChange={(e) => setOctave(e.target.value)}>
                <option value={0}>Select an Octave</option>
                <option value={1}>Octave 1</option>
                <option value={2}>Octave 2</option>
                <option value={3}>Octave 3</option>
                <option value={4}>Octave 4</option>
                <option value={5}>Octave 5</option>
                <option value={6}>Octave 6</option>
                <option value={7}>Octave 7</option>
            </select>
        {octave !== 0 ? <OctaveTuning socket={socket} octave = {octave} /> : null}
        </div>
    );
}