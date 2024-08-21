import "./App.css";

const Grid = () => {
    const cells = Array.from({ length: 6400 }, (_, index) => (
        <div key={index} className="cell" />
    ));

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
