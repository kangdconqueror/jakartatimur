"use client";
import { useCallback, useMemo, useState } from "react";
import { IcChevronLeft } from "../icons/IcChevronLeft";
import { IcChevronRight } from "../icons/IcChevronRight";
import classNames from "classnames";

const dayNames = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarProps {
  events: {
    date: Date;
    items: {
      type: string;
    }[];
  }[];
}

const isSameDate = (arg1: Date, arg2: Date) => {
  const year1 = arg1.getFullYear();
  const year2 = arg2.getFullYear();
  if (year1 !== year2) return false;

  const month1 = arg1.getMonth();
  const month2 = arg2.getMonth();
  if (month1 !== month2) return false;

  return true;
};

export const Calendar = ({ events }: CalendarProps) => {
  const [date] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const currentEvents = useMemo(
    () =>
      events.filter((event) =>
        isSameDate(event.date, new Date(year, month, date.getDate()))
      ),
    [events, date, month, year]
  );

  const getEvent = useCallback(
    (d: number) => {
      const val = currentEvents.find((event) => event.date.getDate() === d);
      if (val) {
        return val.items.map((item, i) => (
          <div
            key={i}
            className={classNames(
              "w-1 md:w-[6px] h-1 md:h-[6px] rounded-full",
              item.type === "walikota" && "bg-[#4FA772]",
              item.type === "wakil-walikota" && "bg-[#FFAD46]",
              item.type === "sekretaris-kota" && "bg-[#F25961]"
            )}
          />
        ));
      }
      return null;
    },
    [currentEvents]
  );

  const days = useMemo(() => {
    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();

    const list = [];
    let key = 0;
    for (let i = dayone; i > 0; i--) {
      list.push(
        <li key={key} className="flex justify-center items-center relative">
          <div className="w-12 h-12 flex justify-center items-center text-[#CED4DA] text-xs md:text-xl">
            {monthlastdate - i + 1}
          </div>
        </li>
      );
      key++;
    }

    for (let i = 1; i <= lastdate; i++) {
      const isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      list.push(
        <li key={key} className="flex justify-center items-center relative">
          <div
            data-active={isToday}
            className="w-12 h-12 flex items-center justify-center text-xs md:text-xl text-[#1D252D] data-[active=true]:bg-[#EB30A2] data-[active=true]:text-white rounded-lg hover:bg-[#EB30A2]/20"
          >
            {i}
          </div>
          <div className="absolute pt-7 flex gap-1">{getEvent(i)}</div>
        </li>
      );
      key++;
    }

    const leftDays = 42 - list.length + dayend;
    for (let i = dayend; i < leftDays; i++) {
      list.push(
        <li key={key} className="flex justify-center items-center">
          <div className="w-12 h-12 flex justify-center items-center text-[#CED4DA] text-xs md:text-xl">
            {i - dayend + 1}
          </div>
        </li>
      );
      key++;
    }

    return list;
  }, [date, month, year]);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="p-5 w-full md:max-w-[655px] bg-white border rounded-xl">
      <div className="flex justify-between">
        <button
          onClick={prevMonth}
          className="text-[#EB30A2] w-6 h-6 flex justify-center items-center hover:bg-[#EB30A2] hover:text-white rounded"
        >
          <IcChevronLeft />
        </button>
        <p className="text-sm md:text-2xl font-medium text-[#1D252D]">
          {monthNames[month]} {year}
        </p>

        <button
          onClick={nextMonth}
          className="text-[#EB30A2] w-6 h-6 flex justify-center items-center hover:bg-[#EB30A2] hover:text-white rounded"
        >
          <IcChevronRight />
        </button>
      </div>
      <div className="mt-6">
        <ul className="grid grid-cols-7 text-center">
          {dayNames.map((row, i) => (
            <li key={i} className="flex justify-center items-center">
              <div className="w-12 h-12 flex items-center justify-center text-xs md:text-xl text-[#1D252D]">
                {row}
              </div>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-7 justify-center items-center gap-y-2 md:gap-y-10">
          {days}
        </ul>
      </div>
    </div>
  );
};
