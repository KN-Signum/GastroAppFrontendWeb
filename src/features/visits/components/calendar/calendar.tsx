import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import plLocale from '@fullcalendar/core/locales/pl';
import enLocale from '@fullcalendar/core/locales/en-gb';
import { useTranslation } from 'react-i18next';
import { GetVisitDto } from '../..';
import { CalendarStyle } from '.';
import { useState } from 'react';

export interface CalendarProps {
  visits: GetVisitDto[];
}

export const Calendar = (props: CalendarProps) => {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState('dayGridMonth');

  const { visits } = props;

  const events = visits.map((visit: GetVisitDto) => ({
    title: visit.name,
    start: visit.time_start,
    end: visit.time_end,
    id: visit.id,
    draggable: false,
  }));

  const handleDateClick = (arg: DateClickArg) => {
    if (currentView === 'dayGridMonth') {
      arg.view.calendar.changeView('timeGridWeek', arg.dateStr);
      setCurrentView('timeGridWeek');
    }
  };

  return (
    <div className="from-secondary h-full w-full rounded-sm">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        height={'100%'}
        locale={t('language') === 'pl' ? plLocale : enLocale}
        timeZone="pl"
        headerToolbar={{
          left: 'prev, today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek, next',
        }}
        events={events}
        dateClick={handleDateClick}
      />
      <CalendarStyle />
    </div>
  );
};
