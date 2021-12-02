import React,{useState} from 'react'
import './count.css'
const Count = () => {
    const[data, setData] = useState();
    const [int, setInt] = useState();
    // int == setInterVal
    function afterClick(){
        let conv = parseInt(data);
       

            let interVal = setInterval(function(){
                if(conv > 0){

                    conv += -1;
                    setData(conv);
                    
                    
                } 
            },1000);
            setInt(interVal);
            
                  

    }
    function pause(){ 
        // int == interVal
        clearInterval(int);

    }

    function reset(){
        pause();
        setData('');
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
                        <button className='button' onClick={reset}>Reset</button>
                        <button className='button' onClick={pause}>Pause</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Count
