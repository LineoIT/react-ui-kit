import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from './Calendar';
import dayjs from 'dayjs';
export const DateField = ({ error = false, value, onChange, shape, dropTo: calendarPosition = 'bottom-left', placeholder = 'dd/mm/yyyy', format = 'DD/MM/YYYY' }) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [text, setText] = useState(value ? dayjs(value).format(format) : '');
    // const [text, setText] = useState("")
    const color = React.useMemo(() => error || hasError
        ? 'text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500'
        : 'text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-primary  focus-within:border-primary ', [error, hasError]);
    const rounded = shape === 'flat' ? '' : 'rounded';
    const _class = 'ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400  ';
    const divRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setOpenCalendar(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleInputChange = (e) => {
        const input = e.target;
        const minWidth = 0;
        const textWidth = input.value.length * 10;
        input.style.width = Math.max(minWidth, textWidth) + 'px';
        setText(input.value);
        const date = validateDate(input.value);
        console.log('date', date);
        if (date) {
            setHasError(false);
            onChange(date);
        }
        else {
            setHasError(true);
        }
    };
    const handleDatePicker = (date) => {
        onChange(date);
        setText(dayjs(date).format(format));
    };
    return (React.createElement("div", { ref: divRef, className: "relative" },
        React.createElement("div", { className: `${rounded} py-2 px-2 overflow-hidden  flex justify-start items-center border dark:border-gray-500 focus-within:ring-1  dark:text-gray-300  dark:focus-within:bg-white/10 dark:focus-within:text-gray-200 dark:placeholder-gray-400  ${color}` },
            React.createElement("label", { htmlFor: "", className: "flex items-center justify-between w-full" },
                React.createElement("input", { className: ` ${_class}  w-[100px]`, placeholder: placeholder, value: text, onChange: handleInputChange }),
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "w-5 h-5 cursor-pointer", onClick: () => {
                        setOpenCalendar(!openCalendar);
                    } },
                    React.createElement("path", { d: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z", fill: "currentColor" })))),
        openCalendar && (React.createElement("div", { className: `block shadow absolute z-50 min-w-max 
        ${calendarPosition === 'bottom-right' ? 'right-0' : calendarPosition === 'top-right' ? 'right-0 bottom-10' : calendarPosition === 'top-left' ? 'bottom-10' : ''}` },
            React.createElement(Calendar, { className: "h-[320px] mt-1 overflow-y-auto bg-white dark:bg-slate-900 border-[1px] border-black/[3%] select-none shadow dark:drop-shadow-md", value: value, onChange: handleDatePicker })))));
};
// const fromateDate = (date?: Date) => {
//   if (date) {
//     const d = date.getDate()
//     const m = date.getMonth() + 1
//     return (d < 10 ? `0${d}` : d) + "/" + (m < 10 ? `0${m}` : m) + "/" + date.getFullYear()
//   }
// }
function validateDate(dateString) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);
    if (!match) {
        return undefined;
    }
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);
    const isValidDay = day >= 1 && day <= 31;
    const isValidMonth = month >= 1 && month <= 12;
    const isValidYear = year >= 1000; // You may want to adjust this condition based on your specific requirements
    if (isValidDay && isValidMonth && isValidYear) {
        const date = new Date();
        date.setDate(day);
        date.setMonth(month - 1);
        date.setFullYear(year);
        return date;
    }
}
//# sourceMappingURL=DateField.js.map