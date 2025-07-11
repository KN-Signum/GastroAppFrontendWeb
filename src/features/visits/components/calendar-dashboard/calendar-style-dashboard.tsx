export const CalendarStyleDashboard = () => {
  return (
    <style>{`
      /* Style for calendar cells */
      .fc .fc-daygrid-day,
      .fc .fc-timegrid-slot {
        background-color: var(--color-secondary-accent-25) !important;
      }
      /* Style for buttons */
      .fc .fc-button {
        font-weight: 500 !important;
        border-radius: 20px;
        border: none;
      }

      .fc .fc-button:hover {
        opacity: 0.7 !important;
      }

      .fc .fc-button.fc-button-active {
        background-color: var(--chakra-colors-secondary) !important;
        color: var(--chakra-colors-black) !important;
        box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.35) !important;
      }

      .fc .fc-prev-button,
      .fc .fc-next-button {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }

      .fc .fc-next-button {
        margin-left: -20px !important;
      }

      .fc .fc-prev-button {
        margin-right: -20px !important;
      }

      .fc .fc-prev-button .fc-icon,
      .fc .fc-next-button .fc-icon {
        font-size: 2em;
      }

      .fc .fc--button {
        display: none !important;
      }

      /* Style for calendar header */

      .fc .fc-toolbar-title {
        text-transform: capitalize !important;
        margin-top: 0.5rem !important;
      }

      /* Style for fonts color */
      .fc .fc-daygrid-day-number,
      .fc.fc-col-header-cell-cushion {
        color: var(--color-primary-accent) !important;
      }

      /* Style for background color */
      .fc .fc-view-harness {
        overflow: hidden;
      }

      /* Style for grid lines */
      .fc .fc-scrollgrid,
      .fc .fc-scrollgrid table,
      .fc .fc-scrollgrid td,
      .fc .fc-scrollgrid th {
        border-color: var(--color-secondary);
        border-width: 1px;
      }

      /* Style for all-day events section for current day */
      .fc .fc-daygrid-day.fc-day-today {
        background-color: rgba(0, 0, 0, 0.1);
      }

      /* remove scrollbar */
      .fc .fc-daygrid-view {
        overflow: hidden !important;
      }

      .fc-toolbar {
        background-color: var(--color-secondary) !important;
        margin-bottom: 0 !important;
        padding-bottom: 0.7rem !important;
        border-top-left-radius: calc(var(--radius) - 4px) !important;
        border-top-right-radius: calc(var(--radius) - 4px) !important;
        }

      thead {
        background-color: var(--color-secondary) !important;
      }

      .fc-event-start {
        color: var(--color-primary-accent) !important;
      }
    `}</style>
  );
};
