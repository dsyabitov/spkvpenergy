import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import autoBind from 'react-autobind';
import EventItem from './EventItem'
import './EventsCarousel.css'
import Api from "./Api";
import LoadingOverlay from 'react-loading-overlay';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const EVENTS_TO_LOAD = 5;
const MAX_EVENTS = 10;

class EventsCarousel extends Component {
    index = 0;
    events = [];

    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            nextDisabled: false,
            prevDisabled: true,
            loadingActive: true,
            items: [
                {
                    name: "---",
                    start: "---",
                    end: "---",
                    params: "---"
                },
                {
                    name: "---",
                    start: "---",
                    end: "---",
                    params: "---"
                },
                {
                    name: "---",
                    start: "---",
                    end: "---",
                    params: "---"
                },
            ]
        }
    }

    render() {
        console.log("EventsCarousel render");

        let r = this.state.items.map( (item, i) => <EventItem key={i} item={item} /> )

        return (
            <LoadingOverlay
                active={this.state.loadingActive}
                spinner
                text='Loading your content...'
            >
                <div className={"events-container"}>
                    <Carousel
                        next={ (next, active) => this.handleNext(next, active) }
                        prev={ (prev, active) =>  this.handlePrev(prev, active)}
                        indicators={false}
                        autoPlay={false}
                        className={"carousel"}

                        NavButton={({onClick, className, style, next, prev}) => {
                            style = {
                                height: "100%"
                            }
                            console.log("NavButton" + style);
                            if (next) {
                                return (
                                    <IconButton
                                        disabled = {this.state.nextDisabled}
                                        color="primary"
                                        margin-left="auto"
                                        onClick={onClick}
                                        style={style}
                                    >
                                        <ChevronRight/>
                                    </IconButton>
                                )
                            } else {
                                return (
                                    <IconButton
                                        disabled = {this.state.prevDisabled}
                                        color="primary"
                                        margin-left="auto"
                                        onClick={onClick}
                                        style={style}
                                    >
                                        <ChevronLeft/>
                                    </IconButton>
                                )
                            }
                        }}
                    >
                        {
                            r
                        }
                    </Carousel>
                </div>
            </LoadingOverlay>
        );
    }

    handleNext(next, active) {
        this.index++;
        this.setState({
            prevDisabled: false,
        });
        console.log(`index ${this.index}`);
        console.log(`NEXT! we left ${active}, and are now at ${next}, index ${this.index}`);

        this.mapItems(next);
        if (this.index + 1 == this.events.length - 1) {
            this.loadNextData();
        }
    }

    handlePrev(prev, active) {
        this.index--;

        this.setState({
            nextDisabled: false,
        });

        console.log(`PREV! we left ${active}, and are now at ${prev}, index ${this.index}`);
        this.mapItems(prev);

        if (this.index - 1 == 0 ){
            this.loadPrevData();
        }
    }

    mapItems(currentIndex) {
        let next = currentIndex + 1;
        if (next == this.state.items.length) {
            next = 0;
        }

        let prev = currentIndex - 1;
        if (prev < 0) {
            prev = this.state.items.length - 1;
        }

        if (this.index == this.events.length - 1) {
            this.setState({
                nextDisabled: true,
            })
        } else {
            this.mapItem(next, this.index + 1);
        }

        if (this.index == 0) {
            this.setState({
                prevDisabled: true,
            })
        } else {
            this.mapItem(prev, this.index - 1);
        }

        console.log(`( Next == ${next}, Number == ${this.state.items[next].number} ), (Prev == ${prev}, Number == ${this.state.items[prev].number})`);
    }

    mapItem(itemIndex, eventIndex) {
        let items = this.state.items;

        let api = new Api();

        items[itemIndex].name = this.events[eventIndex].getName();
        items[itemIndex].start = api.formatDate(new Date(this.events[eventIndex].getStart() * 1000));
        items[itemIndex].end = api.formatDate(new Date(this.events[eventIndex].getEnd() * 1000));
        items[itemIndex].params = this.events[eventIndex].getParams();

        this.setState({
            items:items
        })
    }

    loadNextData() {
        this.setState({
            loadingActive: true,
        })
        console.log(`Load NEXT data before: index = ${this.index} ; events = ${this.events}`);

        let api = new Api();
        api.loadEventsBackward(new Date((this.events[this.events.length - 1].getStart() - 1) * 1000), EVENTS_TO_LOAD, (err, resp) => {
            if (err != null) {
                console.log(err);
                return;
            }

            resp.getEventsList().forEach( (v,i) => {
                console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());
                this.events.push(v);
                if (this.events.length > MAX_EVENTS) {
                    this.events.shift();
                    this.index--;
                }
            });

            console.log(`Load NEXT data after: index = ${this.index} ; events = ${this.events}`);

            this.setState({
                loadingActive: false,
            })
        });
    }

    loadPrevData() {
        this.setState({
            loadingActive: true,
        })
        console.log(`Load PREV data before: index = ${this.index} ; events = ${this.events}`);
        let api = new Api();

        api.loadEventsForward(new Date((this.events[0].getStart() + 1) * 1000), EVENTS_TO_LOAD, (err, resp) => {

            resp.getEventsList().forEach( (v,i) => {
                console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());
                this.events.unshift(v)
                this.index++;
                if (this.events.length > MAX_EVENTS) {
                    this.events.pop();
                }
            });
            console.log(`Load PREV data after: index = ${this.index} ; events = ${this.events}`);

            this.setState({
                loadingActive: false,
            })
        });

    }

    componentDidMount() {
        console.log("EventsTable did mount!");
        let api = new Api();
        api.loadEventsBackward(new Date(), EVENTS_TO_LOAD, (err, resp) => {
            if (err != null) {
                console.log(err);
                return;
            }

            console.log("Events Loaded")
            console.log("haveMore: " + resp.getHavemore());
            console.log("firstDate: " + resp.getFirstdate());
            console.log("lastDate: " + resp.getLastdate());

            const data = [];
            let api = new Api();

            resp.getEventsList().forEach( (v,i) => {
                console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());
                this.events.push(v);
            });
            this.mapItem(0, 0);
            this.mapItem(1, 1);
            this.mapItem(2, 2);

            this.setState({
                loadingActive: false,
            })
        });
    }
}

export default EventsCarousel;
