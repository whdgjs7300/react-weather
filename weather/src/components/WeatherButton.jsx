import { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, }) => {




    return (  
        <div>
            
            
            {
                cities.map((item,i)=>{
                    return <Button key={item} onClick={()=> setCity(item)} variant='warning'>{item}</Button>
                })
            }
        </div>
    );
}

export default WeatherButton;