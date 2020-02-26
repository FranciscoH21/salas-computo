import React from 'react'

export class ListaSalas extends React.Component {
    render() {
        return (
            <div className="field">
                <p className="control has-icons-left">
                    <span className="select">
                        <select>
                            <option>Sala 1</option>
                            <option>Sala 2</option>
                            <option>Sala 3</option>
                            <option>Sala 4</option>
                        </select>
                    </span>
                    <span className="icon is-small is-left has-text-black">
                        <i className="fa fa-desktop"></i>
                    </span>
                </p>
            </div>
        )
    }
}