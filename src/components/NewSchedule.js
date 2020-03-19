import React from 'react'

import {
    Day, Week, Month,TimelineViews, TimelineMonth, WorkWeek, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, Inject, RecurrenceEditorComponent, DragAndDrop, Resize
} from '@syncfusion/ej2-react-schedule';

import { extend, createElement, L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { loadCldr } from '@syncfusion/ej2-base';
//import * as localeTexts from './locale.json';

// Titulos estaticos traducidos (Pasarlos a un archivo separado)
L10n.load({
    'es-MX': {
        'schedule': {
            "day": "Día",
            "week": "Semana",
            "workWeek": "Semana Trabajo",
            "month": "Mes",
            "agenda": "Agenda",
            "weekAgenda": "Agenda Semanal",
            "workWeekAgenda": "Agenda Semanal Trabajo",
            "monthAgenda": "Agenda Mensual",
            "today": "Hoy",
            "noEvents": "Sin eventos",
            "emptyContainer": "No hay eventos agendados este día.",
            "allDay": "Todo el día",
            "start": "Inicio",
            "end": "Fin",
            "more": "Más",
            "close": "Cerrar",
            "cancel": "Cancel",
            "noTitle": "(Sin título)",
            "delete": "Eliminar",
            "deleteEvent": "Eliminar Evento",
            "deleteMultipleEvent": "Eliminar multiples eventos",
            "selectedItems": "Objeto seleccionado",
            "deleteSeries": "Eliminar Serie",
            "edit": "Editar",
            "editSeries": "Editar Serie",
            "editEvent": "Editar Evento",
            "createEvent": "Crear",
            "subject": "Materia",
            "addTitle": "Agregar Materia",
            "moreDetails": "Más Detalles",
            "save": "Guardar",
            "editContent": "¿Desea editar solo este evento o toda la serie?",
            "deleteRecurrenceContent": "¿Desea eliminar solo este evento o toda la serie?",
            "deleteContent": "¿Seguro que quieres eliminar este evento?",
            "deleteMultipleContent": "¿Estás seguro de que deseas eliminar los eventos seleccionados?",
            "newEvent": "Nuevo Evento",
            "title": "Título",
            "location": "Ubicación",
            "description": "Descripción",
            "timezone": "Zona Horaria",
            "startTimezone": "Inicio Zona Horaria",
            "endTimezone": "Fin Zona Horaria",
            "repeat": "Repetir",
            "saveButton": "Guardar",
            "cancelButton": "Cancelar",
            "deleteButton": "Eliminar",
            "recurrence": "Recurrencia",
            "wrongPattern": "El patrón de recurrencia no es válido.",
            "seriesChangeAlert": "Los cambios realizados en instancias específicas de esta serie se cancelarán y esos eventos volverán a coincidir con la serie.",
            "createError": "La duración del evento debe ser más corta que la frecuencia con la que ocurre. Acorte la duración o cambie el patrón de recurrencia en el editor de eventos de recurrencia.",
            "recurrenceDateValidation": "Algunos meses tienen menos de la fecha seleccionada. Para estos meses, la ocurrencia caerá en la última fecha del mes.",
            "sameDayAlert": "Dos ocurrencias del mismo evento no pueden ocurrir en el mismo día.",
            "editRecurrence": "Editar Recurrencia",
            "repeats": "Repetir",
            "alert": "Alerta",
            "startEndError": "La fecha de finalización seleccionada ocurre antes de la fecha de inicio.",
            "invalidDateError": "El valor de la fecha ingresada no es válido.",
            "ok": "Ok",
            "occurrence": "Ocurrencia",
            "series": "Serie",
            "previous": "Anterior",
            "next": "Siguiente",
            "timelineDay": "Línea del tiempo del día",
            "timelineWeek": "Linea del tiempo Semanal",
            "timelineWorkWeek": "Línea del tiempo Semana Trabajo",
            "timelineMonth": "Línea del tiempo Mensual"
        },
        'recurrenceeditor': {
            "none": "Ninguno",
            "daily": "Diariamente",
            "weekly": "Semanalmente",
            "monthly": "Mensualmente",
            "month": "Mes",
            "yearly": "Anualmente",
            "never": "Nunca",
            "until": "Hasta",
            "count": "Contar",
            "first": "Primero",
            "second": "Segundo",
            "third": "Tercero",
            "fourth": "Cuarto",
            "last": "Ultimo",
            "repeat": "Repetir",
            "repeatEvery": "Repetir Cada",
            "on": "Repetir En",
            "end": "Fin",
            "onDay": "Día",
            "days": "Día(s)",
            "weeks": "Semana(s)",
            "months": "Mes(s)",
            "years": "Año(s)",
            "every": "cada",
            "summaryTimes": "veces(s)",
            "summaryOn": "en",
            "summaryUntil": "hasta",
            "summaryRepeat": "Repetir",
            "summaryDay": "día(s)",
            "summaryWeek": "semana(s)",
            "summaryMonth": "mes(s)",
            "summaryYear": "año(s)"
        },
        'datetimepicker': {
            "placeholder": "Por favor seleccione una fecha",
            "today": "Hoy"
        }
    }
})

// Para el idioma español
loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/es-MX/ca-gregorian.json'),
    require('cldr-data/main/es-MX/numbers.json'),
    require('cldr-data/main/es-MX/timeZoneNames.json'));

export class NewSchedule extends React.Component {

    // Lunes a sabado
    week = [1, 2, 3, 4, 5, 6]
    // Lunes a viernes
    workDays = [1, 2, 3, 4, 5]


    // Datos de ejemplo
    data = [{
        Id: 2,
        Subject: 'Sistemas Embebidos',
        StartTime: new Date(2020, 2, 16, 10, 0),
        EndTime: new Date(2020, 2, 16, 12, 0),
        Teacher: 'Juan Martinez Bernaldino',
        Comments: 'Arduino y Java',
    }, {
        Id: 1,
        Subject: 'Visión Artificial',
        StartTime: new Date(2020, 2, 17, 7, 0),
        EndTime: new Date(2020, 2, 17, 9, 0),
        Teacher: 'Kena Puga',
        Comments: 'Python3 y OpenCV',
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
    },
    {
        Id: 3,
        Subject: 'Estructuras de datos',
        StartTime: new Date(2020, 2, 18, 11, 0),
        EndTime: new Date(2020, 2, 18, 13, 0),
        Teacher: 'Rossy Michel',
        Comments: 'JGrasp'
    }, {
        Id: 4,
        Subject: 'Arquitectura Moderna',
        StartTime: new Date(2020, 2, 19, 19, 0),
        EndTime: new Date(2020, 2, 19, 21, 0),
        Teacher: 'Sergio',
        Comments: 'AutoCad'
    }
    ];

    // Para que el intervalo de tiempo sea de 1 horas (No Jala :c)
    onPopupOpen(args) {
        if (args.type === 'Editor') {
            args.duration = 120;
        }
    }

    // ESTA ERA PARA ACOMODARLOS CHIDO, PERO NO SE UTILIZA ESTA
   /* editorTemplate(props: any): JSX.Element {
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
                            locale='es-MX'
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
    }*/

    // ESTE TEMPLATE ES EL QUE SE USA
    editorTemplate(props) {
        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}>
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
                    <DateTimePickerComponent locale='es-MX' format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
                </td></tr>
                <tr><td className="e-textlabel">Hasta</td><td colSpan={4}>
                    <DateTimePickerComponent locale='es-MX' format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
                </td></tr>
                <tr><td className="e-textlabel">Recurrencia</td><td colSpan={4}>
                    <RecurrenceEditorComponent locale='es-MX' data-name='RecurrenceRule' className='e-field' id='RecurrenceRule'></RecurrenceEditorComponent>
                </td></tr></tbody>
        </table> : '');
    }

    render() {
        return (
            <ScheduleComponent
                cssClass='schedule-cell-dimension'
                width='100%' height='100%'
                startHour="7:00" endHour='21:00'
                firstDayOfWeek={1} showWeekend={false}
                showTimeIndicator={true}
                allowResizing={true}
                editorTemplate={this.editorTemplate.bind(this)}
                popupOpen={this.onPopupOpen.bind(this)}
                locale='es-MX'
                eventSettings={{
                    dataSource: this.data,
                    fields: {
                        id: 'Id',
                        subject: { name: 'Subject' },
                        location: { name: 'Teacher' },
                        description: { name: 'Comments' },
                        startTime: { name: 'StartTime' },
                        endTime: { name: 'EndTime' },
                        recurrenceID: {name: 'RecurrenceID'},
                        recurrenceRule: { name: 'RecurrenceRule'},
                        recurrenceException: { name: 'RecurrenceException'}
                    }
                }}
            >
                <ViewsDirective>
                    <ViewDirective workDays={this.week} option='Day' />
                    <ViewDirective workDays={this.week} option='Week' />
                    <ViewDirective workDays={this.workDays} option='WorkWeek' />
                    <ViewDirective workDays={this.week} option='Month' />
                    <ViewDirective option='Agenda' />
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
            </ScheduleComponent>
        )
    }
}