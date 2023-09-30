import { useState, useEffect } from "react";

export default function FileSelect({ socket }) {

    const [fileNames, setFileNames] = useState([])

    useEffect(()=>{
        socket.emit("get_files", (files) => {
            setFileNames(files.map((file) =>
                <option key = {file}>{file}</option>
            ));
        });
    }, [])
    

    return (
        <div className="file-select" >
            <select>
                {fileNames}
            </select>
            <button type="play">Play</button>
        </div>
    );
}