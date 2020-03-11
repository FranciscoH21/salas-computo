import React from 'react'
import { ListaSalas } from './ListaSalas'
import { Horario } from './Horario'

import $ from 'jquery'
import { FormAddClase } from './FormAddClase';
import { Schedule } from './Schedule';
import { NewSchedule } from './NewSchedule';

export class Home extends React.Component {
    handleClickAdd(e) {
        $(".modal").toggleClass("is-active");
      }

    render() {
        return (
            <div className='container box'>
                <div className='row'>
                    <div className='columns'>
                        <div className='column is-2'>
                            <ListaSalas />
                        </div>
                        <div className='column is-8 has-text-centered'>
                            <h3 className='title is-3'>Horario</h3>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='row' id='over-scroll'>
                    <NewSchedule/>
                </div>
                <FormAddClase/>
            </div>
        )
    }
}