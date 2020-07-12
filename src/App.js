import React, {useCallback} from 'react';
import './styles/App.css';
import Laser from "./components/Laser";


function App() {
    let onDragStart = useCallback((e) => e.preventDefault(), []);

    return (
        <div className="App" onDragStart={onDragStart}>
            <Laser/>
        </div>
    );
}

export default App;
