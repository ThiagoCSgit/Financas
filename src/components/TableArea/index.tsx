import './styles.css'

import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th style={{width: '100px'}}>Data</th>
                    <th style={{width: '130px'}}>Categoria</th>
                    <th>Título</th>
                    <th style={{width: '150px'}}>Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </table>
    )
}