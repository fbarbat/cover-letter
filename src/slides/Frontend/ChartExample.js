import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";

const options = {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    }
};

const series = [
    {
        name: "Production knowledge points :) ",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
];

function getWidth() {
    return document.body.clientWidth > 560 ? 500 : document.body.clientWidth - 120;
}

function getHeight() {
    return document.body.clientWidth > 560 ? 250 : undefined;
}

function ChartExample() {
    const [width, setWidth] = useState(getWidth);
    const [height, setHeight] = useState(getHeight);

    useEffect(() => {
        function onResize() {
            setWidth(getWidth());
            setHeight(getHeight());
        }

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });

    return (
        <div style={{
            backgroundColor: 'white',
            textAlign: 'center',
            display: 'inline-block',
            paddingTop: 30,
            marginTop: 30,
            paddingRight: 30
        }}>
            <Chart type="bar" style={{'display': 'inline-block'}} options={options} series={series}
                   width={width} height={height}/>
        </div>
    );
}

export default ChartExample;