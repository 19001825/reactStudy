import React, { useRef, useState } from 'react';
import Total from '../../Component/Total'
import Btn from '../../Component/Btn'
import History from '../../Component/History';

const Calculator = () => {
    let check = /^[0-9]+$/; 
    const keys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','='];
    const [num, setNum] = useState(0);
    const [form, setForm] = useState('');
    const [history, putHistory] = useState({
        idx : '',
        txt: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        putHistory({
          ...history,
          [name]: value
        });
    };
    const nextId = useRef(1);

    const reSetNum = () => {
        setNum(0);
    }
    const inNumber = no => {
        if(num[num.length-1] == no && !check.test(no)) return
        else (num == '0')?setNum(no):setNum(num+no)
        if(no == '='){
            // setNum(eval(num));
            nextId.current += 1;
            setForm(num + '=' + eval(num));
            reSetNum();
        }
    }

    return (
        <div className='Wrapper'>
            <History data={form}/>
            <Total rs={num} onChange={onChange}/>
            <div className='buttonWrapper'>
                {keys.map((str, index) => <Btn key={index} val={str} callBack={inNumber}/>)}
            </div>
        </div>
    )
}

export default Calculator