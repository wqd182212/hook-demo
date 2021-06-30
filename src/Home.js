import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Home.css';

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]); // 仅在count更改时更新

    useEffect(() => {
        console.log('wqd');
    }, []); // 仅在组件挂载和卸载时执行

    useEffect(() => {
        let a = setInterval(() => console.log('a'), 5000);
        return () => {
            // 清除
            clearInterval(a);
        }
    });

    return (
        <div>
            <Button onClick={() => setCount(count => count + 1)} style={{ margin: 10 }}>
                {count}
            </Button>
        </div>
    );
}

export default Home;