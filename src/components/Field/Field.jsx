import React from 'react'
import './style.scss'

export default class Field extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    render () {

        const position_player = {
            top: this.props.player.top,
            left: this.props.player.left,
            transform: `rotate(${this.props.playerRotation}deg)`
        }

        const position_ball = {
            top: this.props.ball.top,
            left: this.props.ball.left
        }

        return (
            <div className="field-position">
                <div className="field">

                    <div className="corner superior-izquierda">
                        <div id="SuperiorIzquierda" className="goal" />
                    </div>

                    <div className="porteria-position">
                        <div className="porteria">
                            <div id="goal" className="goal"></div>
                        </div>
                    </div>

                    <div className="corner inferior-derecha">
                        <div id="InferiorDerecha" className="goal" />
                    </div>
                </div>

                {
                    this.props.has_start ? 
                    <div className="triangle" style={position_player} /> :
                    null
                }

                {
                    this.props.has_start ?
                    <div id="ball" className="ball" style={position_ball} /> :
                    null
                }
            </div>
        )
    }
}
