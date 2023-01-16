import React, {useEffect, useState} from 'react';
import {Item} from './types/Item'
import {Category} from './types/Category'

import {items} from './data/items'
import {categories} from './data/categories'

import { TableArea } from './components/TableArea';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { InfoArea } from './components/InfoArea';

import { InputArea } from './components/InputArea';

import './App.css';

function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      }
      else{
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="text">Sistema Financeiro</h1>
        </div>
        <div className="body">
          {/* area de informacoes */}
          <InfoArea 
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          <InputArea onAdd={handleAddItem}/>
          
          <TableArea list={filteredList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
