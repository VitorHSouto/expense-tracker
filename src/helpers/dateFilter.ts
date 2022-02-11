import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split("-");

    for (let item in list) 
    {
        if(
            list[item].date.getFullYear() === parseInt(year) &&
            (list[item].date.getMonth() + 1) === parseInt(month)
        )
        {
            newList.push(list[item]);
        }

    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
    let month = date.getMonth() + 1 > 9 ? `${date.getMonth()+1}` : `0${date.getMonth()+1}`;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split("-");
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return `${months[parseInt(month)-1]} de ${year}`;
}