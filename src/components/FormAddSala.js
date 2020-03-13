import React from 'react'

import $ from 'jquery'

export class FormAddSala extends React.Component {
    handleClick(e) {
        $("#formsala").toggleClass("is-active");
    }

    render() {
        return (
            <div className="modal" id='formsala'>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Nueva Sala</p>
                        <button onClick={this.handleClick} class="e-dlg-closeicon-btn e-control e-btn e-lib e-flat e-icon-btn" type="button" title="Close" aria-label="Close"><span class="e-btn-icon fa fa-times"></span></button>
                    </header>
                    <section className="modal-card-body">
                        <form>
                            <div className='columns'>

                                <div className='column is-6'>
                                    <label className="e-textlabel" htmlFor='maestro'>Sala</label>
                                    <input id='sala' className="e-input" type="text" placeholder="Nombre" />

                                    <label className="e-textlabel" htmlFor='materia'>Información</label>
                                    <input id='informacion' className="e-input" type="text" placeholder="Informacion" />
                                </div>
                            </div>
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="e-btn e-flat e-primary">Guardar</button>
                        <button onClick={this.handleClick} className="e-btn e-flat" >Cancelar</button>
                    </footer>
                </div>
            </div>
        )
    }
}