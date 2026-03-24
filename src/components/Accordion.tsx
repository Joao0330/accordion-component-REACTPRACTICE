import { useState } from 'react';

interface AccordionProps {
	items: AccordionItems[];
}

export const Accordion = ({ items }: AccordionProps) => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]));
	};

	return (
		<div className='max-w-225 p-10 bg-white rounded-2xl shadow-lg'>
			<ul className='flex flex-col gap-5'>
				{items.map((item, index) => {
					const isOpened = openItems.includes(index);
					return (
						<li key={index} className={`border-b-2 border-gray-300 ${isOpened ? 'pb-6' : 'pb-0'}`}>
							<button className='flex items-center justify-between w-full font-medium cursor-pointer my-6' onClick={() => toggleItem(index)}>
								<h2 className='text-2xl text-start'>{item.title}</h2>
								<span className='text-4xl text-blue-900'>{isOpened ? '-' : '+'}</span>
							</button>
							<p className={`text-gray-600 leading-7 overflow-hidden transition-all duration-300 ${isOpened ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>{item.content}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
