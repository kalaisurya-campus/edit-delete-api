import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/homepage/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
