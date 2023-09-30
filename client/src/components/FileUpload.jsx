
export default function FileUpload({ socket }) {

    function upload(file) {
        socket.emit("upload", file, file.name, (status) => {
            console.log(status)
        });
    }

    return (
        <div className="file-upload" >
            <input
                type="file"
                accept=".mid"
                onInput={(e) => upload(e.target.files[0])} />
        </div>
    );
}