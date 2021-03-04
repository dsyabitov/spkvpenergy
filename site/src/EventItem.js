import './EventItem.css'
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class EventItem extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div className={"event-item"}>
                <Card className={"event-item-card"}>
                    <CardContent className={"event-item-card-content"}>
                        <Typography color="textSecondary">
                           Авария:
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {this.props.item.name}
                        </Typography>
                        <Typography color="textSecondary">
                            Начало:
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {this.props.item.start}
                        </Typography>

                        <Typography color="textSecondary">
                            Окончание:
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {this.props.item.end}
                        </Typography>

                        <Typography color="textSecondary">
                            Параметры:
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {this.props.item.params}
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default EventItem;
