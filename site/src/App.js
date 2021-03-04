import './App.css';
import React from 'react';
import VoltageChart from "./VoltageChart";
import OperativeData from './OperativeData'
import EventsCarousel from "./EventsCarousel";

function App() {
    return (
        <div className={"body"}>
            <OperativeData/>
            <EventsCarousel/>
            <VoltageChart/>
        </div>
    );
}

export default App;
