import React from "react";
import {UncontrolledCarousel} from "reactstrap";
const images = [
    {
        key: '1',
        src: require("../img/hindu auto 1.jpg"),
        captionText: "",
    },
    {
        key: '2',
        src: require("../img/hindu auto 2.jpg"),
        captionText: "",
    },
    {
        key: '3',
        src: require("../img/hindu auto 3.jpg"),
        captionText: "",
    },
];
const Slider = () => <UncontrolledCarousel items={images}/>;

export default Slider;