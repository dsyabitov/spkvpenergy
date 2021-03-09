import "./InfoPanel.css"
import "./OperativeData.css"
import React, { Component } from 'react'
import autoBind from 'react-autobind';
import InfoPanel from './InfoPanel';
import Api from './Api'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const MIN_PHAZE_VOLTAGE = 200;
const MAX_PHAZE_VOLTAGE = 250;
const MIN_BETWEEN_PHAZE_VOLTAGE = 360;
const MAX_BETWEEN_PHAZE_VOLTAGE = 410;
const GOOD='./good.svg'
const BAD='./bad.svg'
const UNKNOWN='./unknown.svg'

class OperativeData extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            image: UNKNOWN,
            lastDate: "12/12/2020 14:00:00",
            alarms: "НЕТ",
            online: "ОНЛАЙН",
            values: [" ", " ", " ", " ", " ", " "],
        }
    }

    render() {
        return (
            <div className={"operative-data"}>
                <div className={"operative-data-row-0"}>
                    <Card className={"infopanel-card"}>
                        <CardMedia
                            className={"infopanel-media-large"}
                            image={this.state.image}
                        />
                        <CardContent className={"infopanel-content"}>
                            <Typography color="textSecondary">
                                Состояние
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {this.state.online}
                            </Typography>
                            <Typography color="textSecondary">
                                Аварии
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {this.state.alarms}
                            </Typography>
                            <Typography color="textSecondary">
                                Последние данные
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {this.state.lastDate}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={"operative-data-row-1"}>
                    <InfoPanel caption={"Напряжение на фазе А"} value={this.state.values[0]} min={MIN_PHAZE_VOLTAGE} max={MAX_PHAZE_VOLTAGE}/>
                    <InfoPanel caption={"Напряжение на фазе B"} value={this.state.values[1]} min={MIN_PHAZE_VOLTAGE} max={MAX_PHAZE_VOLTAGE}/>
                    <InfoPanel caption={"Напряжение на фазе C"} value={this.state.values[2]} min={MIN_PHAZE_VOLTAGE} max={MAX_PHAZE_VOLTAGE}/>
                    <InfoPanel caption={"Межфазное напряжение AB"} value={this.state.values[3]} min={MIN_BETWEEN_PHAZE_VOLTAGE} max={MAX_BETWEEN_PHAZE_VOLTAGE}/>
                    <InfoPanel caption={"Межфазное напряжение AC"} value={this.state.values[4]} min={MIN_BETWEEN_PHAZE_VOLTAGE} max={MAX_BETWEEN_PHAZE_VOLTAGE}/>
                    <InfoPanel caption={"Межфазное напряжение BC"} value={this.state.values[5]} min={MIN_BETWEEN_PHAZE_VOLTAGE} max={MAX_BETWEEN_PHAZE_VOLTAGE}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        //console.log("LastDataTable mounted!");
        this.loadData()
    }

    loadData() {
        let api = new Api();
        let stream = api.receiveLastData();

        stream.on('data', response => {
            // console.log(response.getDatatime());
            const values = [];
            response.getLastdataList().forEach(v => {
                let name = v.getParamname();
                let value = v.getValue();
                // console.log(name);
                // console.log(value);
                values.push(value);
            })

            let img = UNKNOWN;
            if (response.getOnline()) {
                img = GOOD
            }
            if (response.getAlarm()) {
                img = BAD;
            }
            this.setState({
                values: values,
                lastDate: api.formatDate(new Date(response.getDatatime() * 1000)),
                online: response.getOnline() ? "ОНЛАЙН":"ОФФЛАЙН",
                alarms: response.getAlarm() ? "ЕСТЬ":"НЕТ",
                image: img,
            });
        });

        stream.on('status', status => {
            console.log(status.code);
            console.log(status.details);
            console.log(status.metadata);
            this.startLoadData();
        });

        stream.on('end', end => {
            console.log("stream end");
            this.startLoadData();
        });
    }

    startLoadData() {
        this.setState({
            values: [" ", " ", " ", " ", " ", " "],
            lastDate: "--/--/---- --:--:--",
            online: "--------",
            alarms: "--------",
            image: UNKNOWN,
        });
        setTimeout(()=>{
            this.loadData();
        }, 5000)
    }


}

export default OperativeData;
