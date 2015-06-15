'use strict';

var React = require('react');

var AppComponent = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>Reacj Project --- Webpack!</h1>
				<p>This is a Webpack & ReactJs & Bootstrap & Sass </p>
			</div>
	    );
	}
});

module.exports = AppComponent;