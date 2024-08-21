import { useMemo } from "react";
import "./App.css";

const Grid = () => {
    const cells = useMemo(() => {
        return Array.from({ length: 10000 }, (_, index) => (
            <div key={index} className="cell" />
        ));
    }, []);

    return <div className="grid">{cells}</div>;
};

function App() {
    return (
        <div className="App">
            <Grid />
        </div>
    );
}

export default App;
