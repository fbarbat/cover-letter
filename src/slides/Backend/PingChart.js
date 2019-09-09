import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';

function createOptions() {
    return {
        chart: {
            id: 'realtime',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Network + GCP + Kubernetes + Micronaut roundtrip',
            align: 'left'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            min: Date.now(),
            labels: {
                formatter: (value, timestamp) => {
                    const date = new Date(timestamp);
                    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                }
            }
        },
        yaxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Round trip (ms)'
            }
        },
        legend: {
            show: false
        }
    }
};

function getWidth() {
    return document.body.clientWidth > 600 ? undefined : document.body.clientWidth - 60;
}

function getHeight() {
    return document.body.clientWidth > 600 ? 350 : undefined;
}

function generateNextDataPoint() {
    return {
        x: Date.now(),
        y: Math.floor(Math.random() * 200)
    };
}


function PingChart() {

    const [options] = useState(createOptions);

    const [series, setSeries] = useState(() => [{data: [generateNextDataPoint()]}]);
    const [width, setWidth] = useState(getWidth);
    const [height, setHeight] = useState(getHeight);

    function onResize() {
        setWidth(getWidth());
        setHeight(getHeight());
    }

    function tick() {
        setSeries([
            {
                data: [...(series[0].data), generateNextDataPoint()]
            }
        ]);
    }

    useEffect(() => {
        const processId = setInterval(tick, 1000);
        window.addEventListener('resize', onResize);
        return () => {
            clearInterval(processId);
            window.removeEventListener('resize', onResize);
        }
    });

    return <ReactApexChart type="line" options={options} series={series} width={width} height={height}/>;
}

export default PingChart;