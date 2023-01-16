import './style.css'

import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let date = new Date(parseInt(year),parseInt(month) - 1, 1)
        date.setMonth(date.getMonth() - 1)
        onMonthChange(`${date.getFullYear()}-${date.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let date = new Date(parseInt(year),parseInt(month) - 1, 1)
        date.setMonth(date.getMonth() + 1)
        onMonthChange(`${date.getFullYear()}-${date.getMonth() + 1}`)
    }

    return (
        <div className='area-general'>
            <div className="month-area">
                <div className="month-arrow" onClick={handlePrevMonth}>⬅️</div>
                <div className="month-title">{formatCurrentMonth(currentMonth)}</div>
                <div className="month-arrow" onClick={handleNextMonth}>➡️</div>
            </div>
            <div className="resume-area">
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem title="Balanço" value={income - expense} colorLabel={(income - expense) < 0 ? 'red' : (income - expense) == 0 ? 'black' : 'green'}/>
            </div>
        </div>
    )
}