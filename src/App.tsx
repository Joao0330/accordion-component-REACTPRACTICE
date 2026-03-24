import { Accordion } from './components/Accordion';
import { accordionData } from './data';

function App() {
	const content = accordionData;

	return (
		<>
			<div className='min-h-screen bg-blue-200 flex flex-col gap-15 items-center justify-center py-10'>
				<h1 className='text-4xl font-bold'>Accordion Component</h1>

				<Accordion items={content} />
			</div>
		</>
	);
}

export default App;
