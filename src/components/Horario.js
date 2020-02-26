import React from 'react'

export class Horario extends React.Component {
    _renderHoras() {

    }

    render() {
        var dias =  ["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sábado"] 

        var numbers = [];
        for (var i = 7; i <= 21; i++) {
            numbers[i - 7] = i + ":00"
        }
        return (
            <div className='container'>
                <div className='row has-text-centered'>
                    <div className='columns'>
                        <div className='column is-1'>
                            <span className='title is-6'>Hora</span>
                            <ul>
                                {
                                    numbers.map((number, index) => {
                                        return <p className='' key={index}>{number}</p>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='column is-2 celda'>
                            <span className='title is-6'>Lunes</span>
                        </div>
                        <div className='column is-2 celda'>
                            <span className='title is-6'>Martes</span>
                        </div>
                        <div className='column is-2 celda'>
                            <span className='title is-6'>Miercoles</span>
                        </div>
                        <div className='column is-2 celda'>
                            <span className='title is-6'>Jueves</span>
                        </div>
                        <div className='column is-2 celda'>
                            <span className='title is-6'>Viernes</span>
                        </div>
                        <div className='column is-1 celda'>
                            <span className='title is-6'>Sábado</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}