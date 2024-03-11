import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { Page404 } from './components/404/404'
import './index.scss'
import { Home } from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Page404 />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'products/:productsId',
				element: <div>Soon...</div>,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
