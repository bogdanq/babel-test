import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './button'

export const App = () => {
    return <Button textBTN='buttonName' />
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);