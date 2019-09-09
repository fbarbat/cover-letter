import React from 'react';
import ResponsiveText from "../../shared/ResponsiveText";
import PingChart from "./PingChart";
import {Slide} from "spectacle";

function Backend(){
    return (
        <Slide bgColor="secondary">
            <ResponsiveText textSize="1em" textColor="primary" textAlign="left">
                I have also worked on backend a lot. Maybe most of my career.
            </ResponsiveText>
            <ResponsiveText textSize="1em" textColor="primary" textAlign="left">
                Just as an example, this graph below is showing in real time latency to a Java (GraalVM)
                Micronaut backend service deployed on a Kubernetes cluster on Google Cloud Platform.
            </ResponsiveText>
            <ResponsiveText textSize="1em" textColor="primary" textAlign="left"
                        style={{marginBottom: '30px'}}>
                <span style={{textDecoration: 'line-through'}}>See the code here</span> {'//TODO:'} implement
                it :)
            </ResponsiveText>
            <PingChart/>
        </Slide>
    );
}

export default Backend;

