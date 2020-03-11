import React from 'react'

import {
    Day, Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, Inject, RecurrenceEditorComponent, DragAndDrop
} from '@syncfusion/ej2-react-schedule';

import { extend, createElement, L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Guardar',
            'cancelButton': 'Cancelar',
            'deleteButton': 'Eliminar',
            'newEvent': 'Agregar evento',
            'editEvent': 'Editar evento',
            'deleteEvent': 'Eliminar evento',
            'addTitle': 'Materia'
        }
    }
})

export class NewSchedule extends React.Component {

    // Lunes a sabado
    workDays = [1, 2, 3, 4, 5, 6]


    // Datos de ejemplo
    data = [{
        Id: 2,
        Subject: 'Sistemas Embebidos',
        StartTime: new Date(2020, 2, 9, 10, 0),
        EndTime: new Date(2020, 2, 9, 12, 30),
        Teacher: 'Juan Martinez Bernaldino',
        Comments: 'Arduino y Java'
    }];

    // ESTA ERA PARA ACOMODARLOS CHIDO, PERO NO SE UTILIZA ESTA
    editorTemplate(props: any): JSX.Element {
        return (
            <form>
                <div className="e-title-location-row">
                    <div className="e-subject-container">
                        <div className="e-float-input e-control-wrapper">
                            <input className="e-subject e-field" type="text" name="Teacher" id="Teacher" title="Subject" aria-labelledby="label_Subject" />
                            <span className="e-float-line"></span>
                            <label className="e-float-text e-label-top" id="label_Subject" for="Teacher">Maestro</label>
                        </div>
                    </div>
                    <div className="e-location-container">
                        <div className="e-float-input e-control-wrapper">
                            <input className="e-location e-field" type="text" name="Subject" id="Subject" title="Location" aria-labelledby="label_Location" />
                            <span className="e-float-line"></span>
                            <label className="e-float-text e-label-top" id="label_Location" for="Location">Materia</label>
                        </div>
                    </div>
                </div>

                <div className='e-start-end-row'>
                    <div className='e-start-container'>
                        <DateTimePickerComponent
                            id='InicioHora'
                            data-name='StartTime'
                            value={new Date(props.startTime || props.StartTime)}
                            format='dd/MM/yy hh:mm a'
                        ></DateTimePickerComponent>
                    </div>
                    <div className='e-end-container'>
                        <DateTimePickerComponent
                            id='InicioHora'
                            data-name='EndTime'
                            value={new Date(props.endTime || props.EndTime)}
                            format='dd/MM/yy hh:mm a'
                        ></DateTimePickerComponent>
                    </div>
                </div>
            </form>
        );
    }

    // ESTE TEMPLATE ES EL QUE SE USA
    editorTemplate2(props) {
        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}>
            <tbody>
                <tr><td className="e-textlabel">Materia</td><td colSpan={4}>
                    <input id="Materia" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
                </td></tr>
                <tr><td className="e-textlabel">Maestro</td><td colSpan={4}>
                    <input id="Summary" className="e-field e-input" type="text" name="Teacher" style={{ width: '100%' }} />
                </td></tr>
                <tr><td className="e-textlabel">Información</td><td colSpan={4}>
                    <input id="Materia" className="e-field e-input" type="text" name="Comments" style={{ width: '100%' }} />
                </td></tr>
                <tr><td className="e-textlabel">De</td><td colSpan={4}>
                    <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
                </td></tr>
                <tr><td className="e-textlabel">Hasta</td><td colSpan={4}>
                    <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
                </td></tr>
                <tr><td className="e-textlabel">Recurrencia</td><td colSpan={4}>
                    <RecurrenceEditorComponent ref={recurrObject => this.recurrObject = recurrObject} id='RecurrenceEditor'></RecurrenceEditorComponent>
                </td></tr></tbody>
        </table> : '');
    }

    render() {
        return (
            <ScheduleComponent
                selectedDate={new Date(2020, 2, 9)}
                dayHeaderFormat='Wide'
                rowAutoHeight={true}
                width='100%' height='100%'
                startHour="7:00" endHour='21:00'
                firstDayOfWeek={1} showWeekend={false}
                showTimeIndicator={true}
                editorTemplate={this.editorTemplate2.bind(this)}
                eventSettings={{
                    dataSource: this.data,
                    fields: {
                        id: 'Id',
                        subject: { name: 'Subject' },
                        location: { name: 'Teacher' },
                        description: { name: 'Comments' },
                        startTime: { name: 'StartTime' },
                        endTime: { name: 'EndTime' }
                    }
                }}
                rowAutoHeight={true}
            >
                <ViewsDirective>
                    <ViewDirective workDays={this.workDays} option='Day' />
                    <ViewDirective workDays={this.workDays} option='Week' />
                    <ViewDirective workDays={this.workDays} option='Month' />
                    <ViewDirective option='Agenda' />
                </ViewsDirective>
                <Inject services={[Day, Week, Month, Agenda, DragAndDrop]} />
            </ScheduleComponent>
        )
    }
}