import {Portal} from 'solid-js/web'

const Index = () => (
	<div>
		<Portal mount={document.head}>
			<title>Blog</title>
		</Portal>
	</div>
)

export default Index