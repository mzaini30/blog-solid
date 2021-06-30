import {lazy} from 'solid-js'

export const routes = [
	{
		path: '/', 
		component: lazy(() => import('./pages/index.jsx'))
	},
	{
		path: '/admin', 
		component: lazy(() => import('./pages/admin/__layout.jsx')), 
		children: [
			{
				path: '/', 
				component: lazy(() => import('./pages/admin/index.jsx'))
			},
			{
				path: '/tulis',
				component: lazy(() => import('./pages/admin/tulis.jsx'))
			}
		]
	},
]