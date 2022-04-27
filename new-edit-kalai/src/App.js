import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/homepage/Home";
import Image from "./components/imageupload/Image";
import Todolist from "./components/todolist/Todolist";
import Formsdata from "./components/formsdata/Formsdata";
import Javascript from "./components/javascriptimportant/Javascript";
import Commondatas from "./components/switchstatementsin/Commondatas";
import PachiCommonDeploy from "./components/switchpachiyappandata/PachiCommonDeploy";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/image" component={Image} />
                    <Route path="/todo" component={Todolist} />
                    <Route path="/login" component={Formsdata} />
                    <Route path="/javascripts" component={Javascript} />
                    <Route path="/common" component={Commondatas} />
                    <Route path="/commonpachi" component={PachiCommonDeploy} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
