import React from 'react'
import { Button } from 'rsuite'
import Field from './Field/Field.jsx'
import './style.scss'

export default class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    showInfo() {
        var div = document.getElementById('goal')
        var divOffset = this.offset(div)
        console.log(divOffset.left, divOffset.top)
    }

    render () {
        return (
            <div>
                <div className="titulo">
                    <h1>Fuzzy Logic.</h1>
                    <Button onClick={() => this.showInfo()}>Mostrar info</Button>
                </div>
                <Field />
            </div>
        )
    }
}
