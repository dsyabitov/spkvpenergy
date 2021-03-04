const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
const {StringResponse, StringRequest, ChartDataRequest, ChartDataResponse, EventsRequest} = require('./energy_pb.js');
const {EnergyClient} = require('./energy_grpc_web_pb.js');
const api = new EnergyClient(window.location.protocol + "//" + window.location.host);

enableDevTools([
    api,
]);

class Api {
    test() {
        var request = new StringRequest();
        request.setMessage('Ping');
        api.ping(request, {}, function (err, response) {
            if (err != null) {
                alert("Code: " + err.code + "\nMessage: " + err.message);
            } else {
                alert(response.getMessage());
            }
        });
    }

    loadChartData(start, end, step, callback) {
        let r = new ChartDataRequest();
        r.setStart(Math.round((start.getTime()/1000)));
        r.setEnd(Math.round(end.getTime()/1000));
        r.setStep(step);
        api.chartData(r, {}, function (err, response){
            if (err != null) {
                console.log("chartDataErr: " + err.code + ":" + err.message);
                callback(err);
                return;
            }

            callback(null, response);
        });
    }

    loadEventsForward(start, limit, callback) {
        let r = new EventsRequest();
        r.setCount(limit);
        r.setForward(Math.round(start.getTime()/1000));
        api.events(r, {}, function (err, response) {
            if (err != null) {
                console.log("EventsErr: " + err.code + ":" + err.message);
                callback(err);
                return;
            }

            callback(null, response);
        });
    }

    loadEventsBackward(start, limit, callback) {
        let r = new EventsRequest();
        r.setCount(limit);
        r.setBackward(Math.round(start.getTime()/1000));
        api.events(r, {}, function (err, response) {
            if (err != null) {
                console.log("EventsErr: " + err.code + ":" + err.message);
                callback(err);
                return;
            }

            callback(null, response);
        });
    }

    receiveLastData() {
        let r = new StringRequest();
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 1);

        return api.lastData(r, {deadline: deadline.getTime()});
    }

    formatDate(date) {
        return this.twoDigit(date.getDate()) + "/" + this.twoDigit(date.getMonth() + 1) + "/" + date.getFullYear() + " "
            + this.twoDigit(date.getHours()) + ":" + this.twoDigit(date.getMinutes()) + ":" + this.twoDigit(date.getSeconds());
    }

    twoDigit(val) {
        let res = "" + val;
        if (res.length == 1)  {
            return "0" + res;
        }
        return res;
    }
}

export default Api;

