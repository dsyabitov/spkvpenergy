import "./VoltageChart.css"
import React, { Component } from "react";
import Chart from "react-apexcharts";
import Api from "./Api"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class VoltageChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "voltage",
                    width: "100%",
                    height: 700,
                    events: {
                        scrolled: function (chartContext, {xaxis}) {
                            console.log("Scrolled!");
                            console.log(xaxis.min + " : " + xaxis.max);
                        },
                        zoomed: (chartContext, { xaxis, yaxis }) => {
                            console.log("Zoomed!")
                            this.loadData(new Date(xaxis.min), new Date(xaxis.max));
                            console.log(xaxis.min + " : " + xaxis.max);
                        }
                    },
                    toolbar: {
                        tools: {
                            download: false,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: false,
                            home: false,
                            reset: false
                        }
                    }
                },
                xaxis: {
                    type: "datetime",
                    //datetimeUTC: false -- не работает
                },
                noData: {
                    text:"Loading..."
                }
            },
            series: [],
        };
    }

    render() {
        return (
            <div className="voltage-chart">
                <Card className={"voltage-chart-card"}>
                    <CardContent className={"voltage-chart-card-content"}>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            max-width="100%"
                            height="400px"
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }
    loadData(start, end) {
        this.setState({
            series: []
        })

        let api = new Api();
        api.loadChartData(start, end, 500, (err, resp) =>{
            if (err != null) {
                console.log(err);
                return;
            }
            const seriesList = [];

            resp.getSeriesList().forEach(s => {
                const data = [];
                s.getValuesList().forEach(v => {
                    data.push({
                        x: v.getX() + 3 * 60 * 60 * 1000,
                        y: v.getY()
                    })
                });
                let ser = {
                    name: s.getName(),
                    data: data
                }
                seriesList.push(ser);
            });

            this.setState({
                series: seriesList
            })
        })

    }
    componentDidMount() {
        console.log("Component did mount!");
        this.loadData(new Date(Date.now() - 24 * 60 * 60 * 1000), new Date());
    }
}

export default VoltageChart;
