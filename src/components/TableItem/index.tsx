import './style.css'
import { Item } from '../../types/Item'

import { formatDate } from '../../helpers/dateFilter'

import { Category } from '../../types/Category'
import { categories } from '../../data/categories'

type Props = {
    item: Item
}

export const TableItem = ({item}: Props) => {
    return (
        <tr className='row'>
            <td className='col'>{formatDate(item.date)}</td>
            <td className='col'>
                <div className='div-table' style={{backgroundColor:`${categories[item.category].color}`}}>
                    {categories[item.category].title}        
                </div>
            </td>
            <td className='col'>{item.title}</td>
            <td className='col'>
                <div style={{color: categories[item.category].expense ? 'red' : 'green'}}>
                    R$ {item.value}
                </div>
            </td>
        </tr>
    )
}