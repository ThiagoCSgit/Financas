import './style.css'

import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 2, 16),
            category: 'food',
            title: 'Rick`s Burguer',
            value: 42.50
        }
        onAdd(newItem)
    }

    return (
        <div className='container-input'>
            <button type='button' onClick={handleAddEvent}>Adicionar</button>
        </div>
    )
}