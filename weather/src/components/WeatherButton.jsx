import { Button } from 'react-bootstrap';

const WeatherButton = () => {

    return (  
        <div>
            <Button variant="warning">현재날씨</Button>{' '}
            <Button variant="warning">paris</Button>{' '}
            <Button variant="warning">new york</Button>{' '}
        </div>
    );
}

export default WeatherButton;