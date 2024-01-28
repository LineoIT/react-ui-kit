import React, { ReactNode, useEffect, useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysOfWeekFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

export interface CalendarProps {
    locale?: 'fr' | 'en';
    className?: string;
    value?: Date;
    onChange: (value: Date) => void;
}

export const IconChevron = (prop: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...prop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor" />
        </svg>
    );
};

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} type="button" className={'rounded-full outline-none bg-black/10 dark:bg-white/10 active:bg-black/20 active:dark:bg-white/20 ' + className}>
            {children}
        </button>
    );
};

export const Calendar: React.FC<
    CalendarProps & {
        children?: ReactNode;
    }
> = ({ locale = 'en', onChange, value = new Date(), className = 'mx-auto', children }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(value);
    const [year, setYear] = useState(value.getFullYear());
    const [month, setMonth] = useState(value.getMonth());

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Jours du mois précédent qui débordent dans la première semaine du mois actuel
    const daysOfPreviousMonth = new Date(year, month, 0).getDate() - firstDayOfMonth + 1;

    const handleClick = (day: number) => {
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

    return (
        <div className={`p-4 max-w-md ${className}`}>
            <div className="flex items-center justify-between pb-4">
                <h2 className="text-2xl font-bold">{`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`}</h2>
                <div className="flex items-center px-2">
                    <Button onClick={handlePrevMonth}>
                        <IconChevron className="w-5 h-5 rotate-180" />
                    </Button>

                    <Button className="ml-2" onClick={handleNextMonth}>
                        <IconChevron className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-0">
                {(locale === 'fr' ? daysOfWeekFr : daysOfWeek).map((day) => (
                    <div key={day} className="text-center text-sm font-bold w-[35px]">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-0">
                {[...Array<number>(firstDayOfMonth).fill(0)].map((_, index: number) => (
                    <div key={`prev-${index}`} className={`${_commonDayClass} text-slate-300 dark:text-slate-600`}>
                        {daysOfPreviousMonth + index}
                    </div>
                ))}
                {[...Array<number>(daysInMonth).keys()].map((day: number, index: number) => (
                    <div
                        key={`current-${index}`}
                        onClick={() => handleClick(day + 1)}
                        className={`cursor-pointer ${_commonDayClass} ${selectedDate && selectedDate.getDate() === day + 1 ? 'bg-primary rounded-full text-white' : ''}`}
                    >
                        {day + 1}
                    </div>
                ))}
            </div>

            {children}
        </div>
    );
};
