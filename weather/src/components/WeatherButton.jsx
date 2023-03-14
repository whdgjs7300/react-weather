import { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {




    return (  
        <div>
            <Button variant="warning">현재날씨</Button>{' '}
            
            {
                cities.map((item,i)=>{
                    return <Button onClick={()=> setCity(item)} variant='warning'>{item}</Button>
                })
            }
        </div>
    );
}

export default WeatherButton;