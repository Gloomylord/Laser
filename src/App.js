import React, {useCallback} from 'react';
import './styles/App.css';
import Laser from "./components/Laser";
import Text from "./components/Text";
import Title from "./components/Title";

function App() {
    let onDragStart = useCallback((e) => e.preventDefault(), []);

    return (
        <div className="App" onDragStart={onDragStart}>
            <Title/>
            <Laser/>
            <Text/>
        </div>
    );
}

export default App;
