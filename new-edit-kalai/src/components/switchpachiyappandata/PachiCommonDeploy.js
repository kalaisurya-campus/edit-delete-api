import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Pachi1 from "./components/pachi1/Pachi1";
import Pachi2 from "./components/pachi2/Pachi2";
import Pachi3 from "./components/pachi3/Pachi3";
import Pachi4 from "./components/pachi4/Pachi4";
let url;
export default class PachiCommonDeploy extends Component {
    constructor(props) {
        super(props);
        url = this.props.match.path;
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={`${url}/`} component={Pachi1} />
                    <Route path={`${url}/pachi2`} component={Pachi2} />
                    <Route path={`${url}/pachi3`} component={Pachi3} />
                    <Route path={`${url}/pachi4`} component={Pachi4} />
                </Switch>
            </div>
        );
    }
}
