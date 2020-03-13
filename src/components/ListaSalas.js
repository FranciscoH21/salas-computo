import React from 'react'

export class ListaSalas extends React.Component {
    render() {
        return (
            <div className="field">
                <p className="control has-icons-left">
                    <span className="select">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
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