import './App.css';
import io from 'socket.io-client';

import FileUpload from './components/FileUpload.jsx'
import FileSelect from './components/FileSelect.jsx'
import Tuning from './components/Tuning.jsx'

const socket = io.connect("http://192.168.15.179:3001");

function App() {
  return (
    <div className="App">
      <FileUpload socket={socket} />
      <FileSelect socket={socket} />
      <Tuning socket={socket} />
    </div>
  );
}

export default App;
