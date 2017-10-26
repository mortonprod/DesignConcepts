import * as ReactDOM from "react-dom";
import * as React from "react";
import {CreateRouter,Auth} from "@mortonprod/react-nav-component";
import "@mortonprod/react-nav-component/dist/index.css";
import config from "./config";


const auth = new Auth(config);

const props = {
    Auth:auth,
    routes:[
        {
            name: "route1",
            location: "/",
            element: Route1
        },
        {
            name: "route2",
            location: "/2",
            element: Route2
        },
        {
            name: "route3",
            location: "/3",
            element: Route2
        },
        {
            name: "route4",
            location: "/4",
            element: Route2
        },
        {
            name: "route5",
            location: "/5",
            element: Route2
        },
        {
            name: "route6",
            location: "/6",
            function: function (props){
                return <Route3 input={"test input"} />
            }
        }
    ]
}


function Route1(){
    return (
        <div>
            <h1>
                Route 1
            </h1>
        </div>
    )
}

function Route2(){
    return (
        <div>
            <h1>
                Route 2
            </h1>
        </div>
    )
}

function Route3(props){
    return (
        <div>
            <h1>
                Route 3 + {props.input}
            </h1>
        </div>
    )
}


ReactDOM.render(
    <CreateRouter {...props} />,
    document.getElementById("root"),
);