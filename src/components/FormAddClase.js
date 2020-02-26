import React from 'react'

import $ from 'jquery'

export class FormAddClase extends React.Component {
    handleClick(e) {
        $(".modal").toggleClass("is-active");
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Clase</p>
                        <button onClick={this.handleClick} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form>
                            <div className='columns'>

                                <div className='column is-6'>
                                    <label className="label" htmlFor='maestro'>Maestro</label>
                                    <input id='maestro' className="input is-rounded is-success" type="text" placeholder="Maestro" />

                                    <label className="label" htmlFor='materia'>Materia</label>
                                    <input id='materia' className="input is-rounded is-success" type="text" placeholder="Materia" />

                                    <label className="label" htmlFor='carrera'>Carrera</label>
                                    <input id='carrera' className="input is-rounded is-success" type="text" placeholder="Carrera" />

                                </div>
                                <div className='column is-6'>
                                    <div className="field">
                                        <label className="label">Hora</label>
                                        <div className="control">
                                            <div className="select">
                                                <select>
                                                    <option>07:00</option>
                                                    <option>08:00</option>
                                                    <option>09:00</option>
                                                    <option>10:00</option>
                                                    <option>11:00</option>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <label className='label'>Cantidad</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="answer"/>
                                             1 hora
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="answer"/>
                                             2 horas
                                        </label>
                                        </div>
                                </div>
                            </div>

                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-rounded is-success">Guardar</button>
                        <button onClick={this.handleClick} className="button is-rounded is-warning" >Cancelar</button>
                    </footer>
                </div>
            </div>
        )
    }
}