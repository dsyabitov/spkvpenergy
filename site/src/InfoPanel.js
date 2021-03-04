import "./InfoPanel.css"
import React, { Component } from 'react'
import autoBind from 'react-autobind';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const GOOD='./good.svg'
const BAD='./bad.svg'
const UNKNOWN='./unknown.svg'

class InfoPanel extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            image: UNKNOWN,
        }
    }

    render() {
        return (
            <Card className={"infopanel-card"}>
                <CardMedia
                    className={"infopanel-media"}
                    image={this.state.image}
                />
                <CardContent className={"infopanel-content"}>
                    <Typography color="textSecondary" gutterBottom align={"center"}>
                        {this.props.caption}
                    </Typography>
                    <Typography variant="h3" component="h3" align={"center"}>
                        {this.props.value}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    static getDerivedStateFromProps(props, state) {
        if (props.value == " ")  {
            return {
                image: UNKNOWN
            }
        } else if (props.value > props.max || props.value < props.min) {
            return {
                image: BAD
            }
        } else {
            return {
                image: GOOD
            }
        }
    }
}

export default InfoPanel;
