import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')
    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth()) === parseInt(month)){
            newList.push(list[i])
        }

    }
    return newList
}

export const formatDate = (date: Date): string => {
    if(date.getDay() < 10 && date.getMonth() < 10){
        return `0${date.getDay()}/0${date.getMonth()}/${date.getFullYear()}`
    }
    else if(date.getDay() < 10){
        return `0${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }
    else if(date.getMonth() < 10){
        return `${date.getDay()}/0${date.getMonth()}/${date.getFullYear()}`
    }
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`
}