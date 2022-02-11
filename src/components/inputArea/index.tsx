import { useCallback, useState } from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        let errors: string[] = [];

        if(isNaN(new Date(dateField).getTime()))
            errors.push('Data inválida!');
        if(categoryField === '')
            errors.push('Atualize a categoria!');
        if(titleField === '') 
            errors.push('Título vazio!');
        if(valueField <= 0)
           errors.push('Valor inválido!');

        if(errors.length > 0){
            alert(errors.join("\n"));
            return;
        } 

        const[year, month, day] = dateField.split('-');
        let newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))

        let newItem: Item = {
            date: newDate,
            category: categoryField,
            title: titleField,
            value: valueField,
        };

        onAdd(newItem);

        event.target.reset();
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0)

    }, [dateField, categoryField, titleField, valueField]);

    return(
        <form onSubmit={handleSubmit}>
        <C.Container>
            <C.InputArea>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input>
                    <input type="date" id="date"
                            onChange={ (e) => setDateField(e.target.value) }/>
                </C.Input>
            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Input>
                    <select id="category" name="category"
                            onChange={ (e) => setCategoryField(e.target.value) }>
                        <option disabled selected> Selecione um opção </option>
                        <option value="rent">Aluguel</option>
                        <option value="food">Alimentação</option>
                        <option value="salary">Salário</option>
                    </select>
                </C.Input>
            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input>
                    <input type="text" id="title"  placeholder='Salário empresa X'
                            onChange={ (e) => setTitleField(e.target.value) }/>
                </C.Input>
            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input>
                    <input type="text" id="value"  placeholder='1499.99'
                            onChange={ (e) => setValueField(parseFloat(e.target.value)) }/>
                </C.Input>
            </C.InputArea>
            
            <C.InputSubmit>
                <button type="submit"><BsBoxArrowInRight type="submit"/></button>
            </C.InputSubmit>
        </C.Container>
        </form>
    );
}


/* 
    


        <div className="container">
            <form onSubmit={handleSubmit}>
                <label className="InputTitle">
                    <C.InputTitle>Data</C.InputTitle>
                    <input type="date" id="date" 
                            onChange={ (e) => setDateField(e.target.value) }/>
                </label>    
                <label className="InputTitle">
                    <C.InputTitle>Categoria</C.InputTitle>
                    <select id="category" name="category" 
                            onChange={ (e) => setCategoryField(e.target.value) }>
                        <option value="food">Aluguel</option>
                        <option value="rent">Alimentação</option>
                        <option value="salary">Salário</option>
                    </select>
                </label>      
                <label className="InputTitle">
                    <C.InputTitle>Título</C.InputTitle>
                    <input type="text" id="title" 
                            onChange={ (e) => setTitleField(e.target.value) }/>
                </label>     
                <label className="InputTitle">
                    <C.InputTitle>Valor</C.InputTitle>
                    <input type="text" id="title" 
                            onChange={ (e) => setValueField(parseFloat(e.target.value)) }/>
                </label>    
                <input type="submit" value="" />  
            </form>
        </div>
*/