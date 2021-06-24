import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Home.css';

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    });

    useEffect(() => {
        console.log('wqd');
    });

    return (
        <div>
            <p>{ count }</p>
            <Button onClick={() => setCount(count + 1)}>
                click
            </Button>
        </div>
    );
}

export default Home;