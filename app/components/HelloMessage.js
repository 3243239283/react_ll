import React from 'react';
import Three from './Three.js';


var HelloMessage = React.createClass({
	render: function() {
		return (
			<div>
				<Three />
				<h1>HelloMessage components</h1>
			</div>
		);
	}
})

export default HelloMessage
