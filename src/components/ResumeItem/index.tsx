import './style.css'

type Props = {
    title: string
    value: number
    colorLabel?: string
}

export const ResumeItem = ({title, value, colorLabel}: Props) => {
    return (
        <div className='resume-item'>
            <div className="title">{title}</div>
            <div className="value" style={{color: `${colorLabel}`}}>R$ {value}</div>
        </div>
    )
}