import React, { useState } from 'react';
import Total from '../../Component/Total'
import Btn from '../../Component/Btn'

const Calculator = () => {
    let check = /^[0-9]+$/; 
    const keys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','='];
    const [num, setNum] = useState(0)
    const inNumber = no => {
        if(num[num.length-1] == no && !check.test(no))return
        else (num == '0')?setNum(no):setNum(num+no)
        if(no == '='){
            setNum(eval(num));
        }
    }
    return (
        <div className='Wrapper'>
            <Total rs={num}/>
            <div className='buttonWrapper'>
                {keys.map((str, index) => <Btn key={index} val={str} callBack={inNumber}/>)}
            </div>
        </div>
    )
}

export default Calculator