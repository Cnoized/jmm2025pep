import React from 'react';
import ReactDOM from 'react-dom';
import KnotDiagram from './components/KnotDiagram';
import './styles/KnotDiagram.css';

const App = () => {
    return (
        <div>
            <h1>Knot Diagram Application</h1>
            <KnotDiagram />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));