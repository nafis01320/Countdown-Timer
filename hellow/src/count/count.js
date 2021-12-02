import React,{useState} from 'react'
import './count.css'
const Count = () => {
    const[data, setData] = useState();
    function afterClick(){
        let conv = parseInt(data);
         
        while(conv > 0){
            setTimeout(function(){
                conv = conv -1;
            },1000)

            
            setData(conv);
        }
            

        console.log(conv)
        console.log(typeof(conv))
        

    }
    return (
        <>
            <section className='container'>
                <div className='all'>
                    <div className='inputBox'>
                        <input type='text' className='btn' onChange={function(e){
                            let screenValue = e.target.value;
                            setData(screenValue);
                        }}/>
                        <input type='text' className='btn' value ={data} disabled />
                    </div>
                    <div className='logicBtn'>
                        <button className='button' onClick={afterClick}>Start</button>
                        <button className='button'>Reset</button>
                        <button className='button'>Pause</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Count
