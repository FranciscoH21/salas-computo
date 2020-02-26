import React, { Component } from 'react'
import Timetable from 'react-timetable-events'
import moment from 'moment'

export class Schedule extends Component {
    state = {
        events: {
            Lunes: [
                {
                    id: 1,
                    name: 'BDD',
                    type: 'custom',
                    startTime: moment('2018-02-23T11:00:00'),
                    endTime: moment('2018-02-23T13:00:00')
                },
                {
                    id: 5,
                    name: 'Redes de computadoras',
                    type: 'custom',
                    startTime: moment('2018-02-23T07:00:00'),
                    endTime: moment('2018-02-23T09:00:00')
                }
            ],
            Martes: [
                {
                    id: 2,
                    name: 'Programacion Web',
                    type: 'custom',
                    startTime: moment('2018-02-22T12:00:00'),
                    endTime: moment('2018-02-22T14:00:00')
                },
                {
                    id: 3,
                    name: 'Sistemas embebidos',
                    type: 'custom',
                    startTime: moment('2018-02-22T16:00:00'),
                    endTime: moment('2018-02-22T18:00:00')
                }
            ],
            Miercoles: [{
                id: 4,
                name: 'Inteligencia Artificial',
                type: 'custom',
                startTime: moment('2018-02-22T11:00:00'),
                endTime: moment('2018-02-22T13:00:00')
            }],
            Jueves: [],
            Viernes: [],
            Sabado: []
        }
    }
    render() {
        return (
            <Timetable
                events={this.state.events}
                hoursInterval={[7, 21]}
                timeLabel='Hora'
            />
        )
    }
}