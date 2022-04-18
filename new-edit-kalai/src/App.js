import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/homepage/Home";
import Image from "./components/imageupload/Image";
import Todolist from "./components/todolist/Todolist";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/image" component={Image} />
                    <Route path="/todo" component={Todolist} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
