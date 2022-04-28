import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router";
import Firsts from "./components/first/Firsts";
import Seconds from "./components/second/Seconds";
import Third from "./components/third/Third";
let url;
export default class extends Component {
    constructor(props) {
        super(props);
        url = this.props.match.path;
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={`${url}/`} component={Firsts} />
                    <Route path={`${url}/second`} component={Seconds} />
                    <Route path={`${url}/third`} component={Third} />
                </Switch>
            </div>
        );
    }
}
