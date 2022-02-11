import * as C from "./styles"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../resumeItem";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => 
{
    const handlePrevMonth = () => {
        const[year, month] = currentMonth.split('-');
        let currentDate = new Date( parseInt(year), parseInt(month) - 1, 1 );
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        const[year, month] = currentMonth.split('-');
        let currentDate = new Date( parseInt(year), parseInt(month) - 1, 1 );
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>
                    <BsArrowLeftCircle/>
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>
                    <BsArrowRightCircle/>
                </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem title="Balanço" value={income-expense} color={(income-expense) > 0 ? '#3ec481' : '#C64042'}/>
            </C.ResumeArea>
        </C.Container>
    );
}