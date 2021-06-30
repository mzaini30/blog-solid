import {Route, Link} from 'solid-app-router'

const Layout = () => (
	<div>
		<div className="w-full bg-gray-300 justify-between flex">
			<div className="">
				<Link className="text-gray-900 no-underline p-2 hover:bg-blue-300 inline-block" href='/admin'>beranda</Link>
				<Link className="text-gray-900 no-underline p-2 hover:bg-blue-300 inline-block" href='/admin/tulis'>tulis</Link>	
			</div>
			<div className="">
				<Link className="text-gray-900 no-underline p-2 hover:bg-blue-300 inline-block" href='/'>lihat blog</Link>
			</div>
			
		</div>

		<div className="p-3">
			<Route></Route>
		</div>
	</div>
)

export default Layout