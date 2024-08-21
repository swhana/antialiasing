import React, { useEffect, useState } from "react";
import "./App.css";

const Grid = () => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        // 초기 셀 배열 생성
        const initialCells = Array.from({ length: 10000 }, (_, index) => (
            <div key={index} className="cell" />
        ));
        setCells(initialCells);

        // 원 그리기 로직
        const centerX = 50; // 그리드의 중심 X (행)
        const centerY = 50; // 그리드의 중심 Y (열)
        const radius = 20; // 원의 반지름

        // 셀 업데이트
        setCells((prevCells) => {
            return prevCells.map((cell, index) => {
                const i = Math.floor(index / 100); // 행 계산
                const j = index % 100; // 열 계산
                const distance = Math.sqrt(
                    (i - centerX) ** 2 + (j - centerY) ** 2
                );
                if (distance <= radius) {
                    return <div key={index} className="colored-cell" />;
                }
                return cell;
            });
        });
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
