import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Home.css';

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]); // 仅在count更改时更新

    useEffect(() => {
        console.log("wqd");
    }, []); // 仅在组件挂载和卸载时执行

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