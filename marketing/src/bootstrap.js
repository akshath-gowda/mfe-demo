import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

const mount = (el) => {
    ReactDOM.render(<h2>
        <App />
    </h2>, el)
}

// isolation
if (process.env.NODE_ENV === 'development') {
    const ele = document.getElementById('_marketing-dev-root');
    if (ele) {
        mount(ele)
    }
}

export { mount };