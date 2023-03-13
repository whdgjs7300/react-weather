import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {

    return (  
        <div>
            <Button variant="warning">현재날씨</Button>{' '}
            
            {
                cities.map((item)=>{
                    return <Button variant='warning'>{item}</Button>
                })
            }
        </div>
    );
}

export default WeatherButton;