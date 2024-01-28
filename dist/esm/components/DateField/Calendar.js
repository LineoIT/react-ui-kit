var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useState } from 'react';
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysOfWeekFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
export const IconChevron = (prop) => {
    return (React.createElement("svg", Object.assign({}, prop, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", fill: "currentColor" })));
};
const Button = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("button", Object.assign({}, props, { type: "button", className: 'rounded-full outline-none bg-black/10 dark:bg-white/10 active:bg-black/20 active:dark:bg-white/20 ' + className }), children));
};
export const Calendar = ({ locale = 'en', onChange, value = new Date(), className = 'mx-auto', children }) => {
    const [selectedDate, setSelectedDate] = useState(value);
    const [year, setYear] = useState(value.getFullYear());
    const [month, setMonth] = useState(value.getMonth());
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // Jours du mois précédent qui débordent dans la première semaine du mois actuel
    const daysOfPreviousMonth = new Date(year, month, 0).getDate() - firstDayOfMonth + 1;
    const handleClick = (day) => {
        setSelectedDate(new Date(year, month, day));
    };
    const handlePrevMonth = () => {
        setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setYear((prevYear) => (month === 0 ? prevYear - 1 : prevYear));
    };
    const handleNextMonth = () => {
        setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setYear((prevYear) => (month === 11 ? prevYear + 1 : prevYear));
    };
    useEffect(() => {
        onChange(selectedDate);
    }, [selectedDate]);
    useEffect(() => {
        console.log('calendar', value);
    }, [value]);
    const _commonDayClass = 'p-2  w-[35px] h-[35px]  text-center flex items-center justify-center';
    return (React.createElement("div", { className: `p-4 max-w-md ${className}` },
        React.createElement("div", { className: "flex items-center justify-between pb-4" },
            React.createElement("h2", { className: "text-2xl font-bold" }, `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`),
            React.createElement("div", { className: "flex items-center px-2" },
                React.createElement(Button, { onClick: handlePrevMonth },
                    React.createElement(IconChevron, { className: "w-5 h-5 rotate-180" })),
                React.createElement(Button, { className: "ml-2", onClick: handleNextMonth },
                    React.createElement(IconChevron, { className: "w-5 h-5" })))),
        React.createElement("div", { className: "grid grid-cols-7 gap-0" }, (locale === 'fr' ? daysOfWeekFr : daysOfWeek).map((day) => (React.createElement("div", { key: day, className: "text-center text-sm font-bold w-[35px]" }, day)))),
        React.createElement("div", { className: "grid grid-cols-7 gap-0" },
            [...Array(firstDayOfMonth).fill(0)].map((_, index) => (React.createElement("div", { key: `prev-${index}`, className: `${_commonDayClass} text-slate-300 dark:text-slate-600` }, daysOfPreviousMonth + index))),
            [...Array(daysInMonth).keys()].map((day, index) => (React.createElement("div", { key: `current-${index}`, onClick: () => handleClick(day + 1), className: `cursor-pointer ${_commonDayClass} ${selectedDate && selectedDate.getDate() === day + 1 ? 'bg-primary rounded-full text-white' : ''}` }, day + 1)))),
        children));
};
//# sourceMappingURL=Calendar.js.map