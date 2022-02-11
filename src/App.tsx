import { useState, useEffect } from 'react';

import "./style/global.css"
import * as C from "./App.styles"

/****** TYPES ******/ 
import { items } from './database/items';
import { Item } from './types/Item';
import { categories } from './database/categories';
import { Category } from './types/Category';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';

const App = () => {
	const [list, setList] = useState<Item[]>(items);
	const [filteredList, setFilteredList] = useState<Item[]>([]);
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);

	useEffect( () => {
		setFilteredList( filterListByMonth(list, currentMonth) );
	}, [list, currentMonth])

	useEffect( () => {
		let iIncome = 0;
		let iExpense = 0;

		filteredList.forEach( (i) => {
			if(categories[i.category].expense)
				iExpense += i.value;
			else
				iIncome += i.value;
		} )

		setIncome(iIncome);
		setExpense(iExpense);

	}, [filteredList])

	const handleMonthChange = (newMonth: string) => 
	{
		setCurrentMonth(newMonth);
	}

	const handleAddItem = (item: Item) => {
		let newList = [...list];
		newList.push(item);
		setList(newList);
	}

	return (
		<C.Container>
			<C.Header>
				<C.HeaderTitle>Histórico Financeiro</C.HeaderTitle>
			</C.Header>

			<C.Body>
				
				{/*Informações*/}
				<InfoArea 
					currentMonth={currentMonth}
					onMonthChange={handleMonthChange}
					income={income}
					expense={expense}
				></InfoArea>

				{/* Inserção */}
				<InputArea onAdd={handleAddItem}/>

				{/* Itens */}
				<TableArea list={filteredList}/>

			</C.Body>
		</C.Container>
	);
}

export default App;
