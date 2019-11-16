const ReactDOM = require('react-dom');
const React = require('react');
const ItemsList = require('./components/ItemsList.jsx');

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Huawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
);
