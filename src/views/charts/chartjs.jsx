import React from 'react';
import { Doughnut, Line, Bar, Radar, Pie, Polar } from 'react-chartjs-2';
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import * as d from './chartjs-data';

//Doughnut Chart
const doughnutData = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Orange'
    ],

    datasets: [{
        data: d.chartData.doughnutData.data,
        backgroundColor: [
            '#fc4b6c',
            '#1e88e5',
            '#ffb22b',
            '#26c6da',
            '#fd7e14'
        ],
        hoverBackgroundColor: [
            '#fc4b6c',
            '#1e88e5',
            '#ffb22b',
            '#26c6da',
            '#fd7e14'
        ]
    }]
};

//Pie Chart
var pieData = {
    labels: [
        'Green',
        'Blue',
        'Indigo'
    ],
    datasets: [{
        data: d.chartData.pieData.data,
        backgroundColor: [
            '#26c6da',
            '#1e88e5',
            '#7460ee'
        ],
        hoverBackgroundColor: [
            '#26c6da',
            '#1e88e5',
            '#7460ee'
        ]
    }]
}

//Bar Chart
var barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Apple',
        backgroundColor: '#26c6da',
        borderColor: '#26c6da',
        data: d.chartData.barData.data.a
    },
    {
        label: 'Google',
        backgroundColor: '#1e88e5',
        borderColor: '#1e88e5',
        data: d.chartData.barData.data.b
    }]
};

//Line chart
var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Income',
        backgroundColor: 'rgb(38, 198, 218)',
        borderColor: 'rgb(38, 198, 218)',
        pointBorderColor: '#fff',
        data: d.chartData.lineData.data.a
    }, {
        label: 'Outcome',
        backgroundColor: 'rgb(246, 249, 252)',
        borderColor: 'rgb(246, 249, 252)',
        pointBorderColor: '#fff',
        data: d.chartData.lineData.data.b
    }]
};

// Rader Chart
var radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
        label: 'Apple',
        backgroundColor: 'rgba(252, 75, 108,0.2)',
        borderColor: 'rgba(252, 75, 108,0.2)',
        data: d.chartData.radarData.data.a
    }, {
        label: 'Google',
        backgroundColor: 'rgba(38, 198, 218,0.2)',
        borderColor: 'rgba(38, 198, 218,0.2)',
        data: d.chartData.radarData.data.b
    }]
};

//Polar Chart
var polarData = {
    datasets: [{
        data: d.chartData.polarData.data,
        backgroundColor: [
            '#fc4b6c',
            '#1e88e5',
            '#fd7e14',
            '#26c6da'
        ],
        label: 'My dataset'
    }],
    labels: [
        'Label 1',
        'Label 2',
        'Label 3',
        'Label 4'
    ]
};


class Chartjs extends React.Component {
    render() {
        return <div>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            <Row>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Pie Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Pie data={pieData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Bar Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Bar data={barData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Poppins" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Poppins" } }] } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Doughnut Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Doughnut data={doughnutData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Line Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Poppins" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Poppins" } }] } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Polar Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Polar data={polarData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Radar Chart</CardTitle>
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                <Radar data={radarData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Poppins" } } }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/*--------------------------------------------------------------------------------*/}
            {/*End Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
        </div>
    }
}

export default Chartjs;
