import {Portal} from 'solid-js/web'
import {createSignal, createEffect} from 'solid-js'

const [data, setData] = createSignal({tulisan: '<p>hello <strong>world</strong></p>'})
const [tulisan, setTulisan] = createSignal('')

const Tulis = () => (
	<div>
		<div className="grid grid-cols-4">
			<div className="">
				<p>Hai</p>
			</div>
			<div className="col-span-3">
				<div className="rounded grid gap-2 grid-cols-2 bg-green-100 p-3 shadow bordered" style='height: calc(100vh - 70px)'>
					<div 
						className="focus:outline-none p-2 bg-green-200 overflow-auto rounded" 
						contenteditable 
						onInput={x => setData({tulisan: x.target.innerHTML})} 
						innerHTML={data().tulisan}
					></div>
					<textarea 
						value={data().tulisan} 
						onInput={x => setData({tulisan: x.target.value})} 
						cols="30" 
						rows="10" 
						className="bg-green-200 p-2 focus:outline-none rounded"
					></textarea>
				</div>
			</div>
		</div>

		<Portal mount={document.head}>
			<title>Tulis</title>
		</Portal>
	</div>
)

export default Tulis