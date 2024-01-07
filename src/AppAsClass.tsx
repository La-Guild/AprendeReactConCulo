import React from "react";
import {WTF} from "./WTF";

class AppAsClass extends React.Component {
    wtf: WTF;

    constructor(props: any) {
        super(props);
        this.wtf = new WTF();
    }

}