import React from 'react'
import { ListaSalas } from './ListaSalas'
import { Horario } from './Horario'

import $ from 'jquery'
import { FormAddSala } from './FormAddSala';
import { FormAddPeriodo } from './FormAddPeriodo';
import { Schedule } from './Schedule';
import { NewSchedule } from './NewSchedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


export class Home extends React.Component {
    handleClickAddSala(e) {
        $("#formsala").toggleClass("is-active");
    }
    handleClickAddPeriodo(e) {
        $("#formperiodo").toggleClass("is-active");
    }
    periodos = ['Enero-Junio 2020', 'Junio-Diciembre 2020'];
    salas = ['1', '2', '3', '4', '5'];
    render() {
        return (
            <div className='container box'>
                <div className='row'>
                    <div className='column is-12 has-text-centered'>
                        <h3 className='title is-3'>Laboratorio de Cómputo</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='columns'>
                        <div className='column is-2'>
                            <label className='e-label' htmlFor='ddlelement'>Periodo</label>
                            <DropDownListComponent id="ddlelement" dataSource={this.periodos} placeholder="Seleccione un periodo" />
                        </div>
                        <div className='column is-1'>
                            <ButtonComponent onClick={this.handleClickAddPeriodo} cssClass='e-round' iconCss='fa fa-plus' isPrimary={true} />
                        </div>
                        <div className='column is-2'>
                            <label className='e-label'>Sala</label>
                            <DropDownListComponent id="dddlelement" dataSource={this.salas} placeholder="Seleccione una sala" />
                        </div>
                        <div className='column is-1'>
                            <ButtonComponent onClick={this.handleClickAddSala} cssClass='e-round' iconCss='fa fa-plus' isPrimary={true} />
                        </div>
                    </div>

                </div>

                <br />
                <div className='row' id='over-scroll'>
                    <NewSchedule />
                </div>
                <FormAddSala />
                <FormAddPeriodo />
            </div >
        )
    }
}