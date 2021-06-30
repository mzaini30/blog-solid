import {Portal} from 'solid-js/web'

const Index = () => (
	<div>
		<div className="p-5">
			<h1 className='text-3xl'>Bentar. Belum selesai blognya...</h1>
		</div>

		<Portal mount={document.head}>
			<title>Blog</title>
		</Portal>
	</div>
)

export default Index