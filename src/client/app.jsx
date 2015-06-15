'use strict';

var React = require('react');
var AppComponent = require('./component/AppComponent.jsx');
var css = require("!style!css!sass!./style/app.scss");

//console.log('Loaded the app componet');

React.render(<AppComponent />, document.getElementById('header'));