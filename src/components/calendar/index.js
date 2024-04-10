import React from "react";
import DatePicker from "react-datepicker";

function Calendar({
  toggleDropdownArrival,
  toggleDropdownDeparture,
  formattedDateArrivial,
  isOpenArrivialDate,
  formattedDateDeparture,
  isOpenDepatureDate,
  arrivialDate,
  setArrivialDate,
  departureDate,
  setDepartureDate,
}) {
  return (
    <div className="flex flex-row space-x-8">
      <div className="pt-4 flex flex-col">
        <div className="pb-2">
          <label className="font-montserrat text-[16px] font-semibold leading-29 text-left text-white">
            Arrivial
          </label>
        </div>

        <button
          type="button"
          className="h-12 inline-flex w-[183px] rounded-md border shadow-2xl font-montserrat text-[14px] font-semibold leading-29 text-left bg-dark-blue border bg-dark-blue text-white focus:ring-fragomen-blue focus:border-fragomen-blue p-3 dark:bg-dark-gunmetal dark:dark-gunmetal dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={toggleDropdownArrival}
        >
          {formattedDateArrivial}
          <svg
            className="flex absolute left-[140px] ml-2 h-5 w-5 "
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 18.125C0 19.1602 0.815848 20 1.82143 20H15.1786C16.1842 20 17 19.1602 17 18.125V7.5H0V18.125ZM12.1429 10.4688C12.1429 10.2109 12.3478 10 12.5982 10H14.1161C14.3665 10 14.5714 10.2109 14.5714 10.4688V12.0312C14.5714 12.2891 14.3665 12.5 14.1161 12.5H12.5982C12.3478 12.5 12.1429 12.2891 12.1429 12.0312V10.4688ZM12.1429 15.4688C12.1429 15.2109 12.3478 15 12.5982 15H14.1161C14.3665 15 14.5714 15.2109 14.5714 15.4688V17.0312C14.5714 17.2891 14.3665 17.5 14.1161 17.5H12.5982C12.3478 17.5 12.1429 17.2891 12.1429 17.0312V15.4688ZM7.28571 10.4688C7.28571 10.2109 7.49062 10 7.74107 10H9.25893C9.50938 10 9.71429 10.2109 9.71429 10.4688V12.0312C9.71429 12.2891 9.50938 12.5 9.25893 12.5H7.74107C7.49062 12.5 7.28571 12.2891 7.28571 12.0312V10.4688ZM7.28571 15.4688C7.28571 15.2109 7.49062 15 7.74107 15H9.25893C9.50938 15 9.71429 15.2109 9.71429 15.4688V17.0312C9.71429 17.2891 9.50938 17.5 9.25893 17.5H7.74107C7.49062 17.5 7.28571 17.2891 7.28571 17.0312V15.4688ZM2.42857 10.4688C2.42857 10.2109 2.63348 10 2.88393 10H4.40179C4.65223 10 4.85714 10.2109 4.85714 10.4688V12.0312C4.85714 12.2891 4.65223 12.5 4.40179 12.5H2.88393C2.63348 12.5 2.42857 12.2891 2.42857 12.0312V10.4688ZM2.42857 15.4688C2.42857 15.2109 2.63348 15 2.88393 15H4.40179C4.65223 15 4.85714 15.2109 4.85714 15.4688V17.0312C4.85714 17.2891 4.65223 17.5 4.40179 17.5H2.88393C2.63348 17.5 2.42857 17.2891 2.42857 17.0312V15.4688ZM15.1786 2.5H13.3571V0.625C13.3571 0.28125 13.0839 0 12.75 0H11.5357C11.2018 0 10.9286 0.28125 10.9286 0.625V2.5H6.07143V0.625C6.07143 0.28125 5.79821 0 5.46429 0H4.25C3.91607 0 3.64286 0.28125 3.64286 0.625V2.5H1.82143C0.815848 2.5 0 3.33984 0 4.375V6.25H17V4.375C17 3.33984 16.1842 2.5 15.1786 2.5Z"
              fill="white"
            />
          </svg>
        </button>

        {isOpenArrivialDate && (
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              selectsStart
              selected={arrivialDate}
              onChange={(date) => setArrivialDate(date)}
              startDate={arrivialDate}
            />
          </div>
        )}
      </div>

      <div className="pt-4 flex flex-col">
        <div className="pb-2">
          <label className="font-montserrat text-[16px] font-semibold leading-29 text-left text-white">
            Departure
          </label>
        </div>

        <button
          type="button"
          className="h-12 inline-flex w-[183px] rounded-md border shadow-2xl font-montserrat text-[14px] font-semibold leading-29 text-left bg-dark-blue border bg-dark-blue text-white focus:ring-fragomen-blue focus:border-fragomen-blue block p-3 dark:bg-dark-gunmetal dark:dark-gunmetal dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={toggleDropdownDeparture}
        >
          {formattedDateDeparture}
          <svg
            className="flex absolute left-[355px] ml-2 h-5 w-5 "
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 18.125C0 19.1602 0.815848 20 1.82143 20H15.1786C16.1842 20 17 19.1602 17 18.125V7.5H0V18.125ZM12.1429 10.4688C12.1429 10.2109 12.3478 10 12.5982 10H14.1161C14.3665 10 14.5714 10.2109 14.5714 10.4688V12.0312C14.5714 12.2891 14.3665 12.5 14.1161 12.5H12.5982C12.3478 12.5 12.1429 12.2891 12.1429 12.0312V10.4688ZM12.1429 15.4688C12.1429 15.2109 12.3478 15 12.5982 15H14.1161C14.3665 15 14.5714 15.2109 14.5714 15.4688V17.0312C14.5714 17.2891 14.3665 17.5 14.1161 17.5H12.5982C12.3478 17.5 12.1429 17.2891 12.1429 17.0312V15.4688ZM7.28571 10.4688C7.28571 10.2109 7.49062 10 7.74107 10H9.25893C9.50938 10 9.71429 10.2109 9.71429 10.4688V12.0312C9.71429 12.2891 9.50938 12.5 9.25893 12.5H7.74107C7.49062 12.5 7.28571 12.2891 7.28571 12.0312V10.4688ZM7.28571 15.4688C7.28571 15.2109 7.49062 15 7.74107 15H9.25893C9.50938 15 9.71429 15.2109 9.71429 15.4688V17.0312C9.71429 17.2891 9.50938 17.5 9.25893 17.5H7.74107C7.49062 17.5 7.28571 17.2891 7.28571 17.0312V15.4688ZM2.42857 10.4688C2.42857 10.2109 2.63348 10 2.88393 10H4.40179C4.65223 10 4.85714 10.2109 4.85714 10.4688V12.0312C4.85714 12.2891 4.65223 12.5 4.40179 12.5H2.88393C2.63348 12.5 2.42857 12.2891 2.42857 12.0312V10.4688ZM2.42857 15.4688C2.42857 15.2109 2.63348 15 2.88393 15H4.40179C4.65223 15 4.85714 15.2109 4.85714 15.4688V17.0312C4.85714 17.2891 4.65223 17.5 4.40179 17.5H2.88393C2.63348 17.5 2.42857 17.2891 2.42857 17.0312V15.4688ZM15.1786 2.5H13.3571V0.625C13.3571 0.28125 13.0839 0 12.75 0H11.5357C11.2018 0 10.9286 0.28125 10.9286 0.625V2.5H6.07143V0.625C6.07143 0.28125 5.79821 0 5.46429 0H4.25C3.91607 0 3.64286 0.28125 3.64286 0.625V2.5H1.82143C0.815848 2.5 0 3.33984 0 4.375V6.25H17V4.375C17 3.33984 16.1842 2.5 15.1786 2.5Z"
              fill="white"
            />
          </svg>
        </button>

        {isOpenDepatureDate && (
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              selectsStart
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              startDate={departureDate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
