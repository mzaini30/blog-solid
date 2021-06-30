import { render } from "solid-js/web";
import {Router} from 'solid-app-router'
import App from "./App";
import {routes} from './routes'
import 'virtual:windi.css'

render(() => (
	<Router routes={routes}>
		<App></App>
	</Router>
), document.querySelector('#root'))