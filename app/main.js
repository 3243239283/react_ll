import React from 'react'
import ReactDOM from 'react-dom'


//引入子组件
import Four from './components/Four.js'
import App from './components/App.js'
import Three from './components/Three.js'


const Main = React.createClass({
	render: function() {
		return (
			<div>
				<Three />
				<Four />
				<App />
			</div>
		);
	}
})

ReactDOM.render(
  <Main />,
  document.getElementById('example')
);