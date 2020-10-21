import React from 'react'
import './style.scss'

export default class Field extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    render () {
        return (
            <div className="field-position">
                <div className="field">
                    <div className="porteria">
                        <div id="goal" className="goal"></div>
                    </div>
                </div>
            </div>
        )
    }
}
