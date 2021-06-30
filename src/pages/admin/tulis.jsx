import {Portal} from 'solid-js/web'

const Tulis = () => (
	<div>
		<div className="grid grid-cols-4">
			<div className="col-span-1">
				<p>Hai</p>
			</div>
			<div className="col-span-3">
				
			</div>
		</div>

		<Portal mount={document.head}>
			<title>Tulis</title>
		</Portal>
	</div>
)

export default Tulis