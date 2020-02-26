import React from 'react'
import { ListaSalas } from './ListaSalas'
import { Horario } from './Horario'

import $ from 'jquery'
import { FormAddClase } from './FormAddClase';
import { Schedule } from './Schedule';

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
                        <div className='column is-2'>
                            <button onClick={ this.handleClickAdd } className="button is-rounded is-success">
                                <span className="icon is-large">
                                    <i className="fa fa-plus"></i>
                                </span>
                            </button>

                            <button className="button is-rounded is-warning">
                                <span className="icon is-large">
                                    <i className="fa fa-pencil-square-o"></i>
                                </span>
                            </button>

                            <button className="button is-rounded is-link">
                                <span className="icon is-large">
                                    <i className="fa fa-info"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='row' id='over-scroll'>
                    <Schedule/>
                </div>
                <FormAddClase/>
            </div>
        )
    }
}