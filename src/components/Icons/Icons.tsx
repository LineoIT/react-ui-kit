import React, { FC } from 'react';

export function HaflBusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 63 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="42.0005" cy="32.4545" r="7.54545" stroke="currentColor" strokeWidth="4" />
            <path d="M0 0H59C61.2091 0 63 1.79086 63 4V5.72727H0V0Z" fill="currentColor" />
            <rect y="19.0909" width="43.9091" height="5.72727" fill="currentColor" />
            <rect y="24.8182" width="36.2727" height="5.72727" fill="currentColor" />
            <rect x="57.2734" y="5.72729" width="5.72727" height="28.6364" fill="currentColor" />
            <rect x="19.0918" width="5.72727" height="24.8182" fill="currentColor" />
            <rect x="38.1816" width="5.72727" height="22.9091" fill="currentColor" />
            <rect x="38.3359" y="21.8331" width="3.99" height="22.7934" transform="rotate(-58.9519 38.3359 21.8331)" fill="currentColor" />
            <rect x="49.6367" y="26.7273" width="7.63636" height="7.63636" fill="currentColor" />
        </svg>
    );
}

export function BusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 512 512" {...props}>
            <path d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
        </svg>
    );
}

export const AcademicCapIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
        </svg>
    );
};

export const BuildingIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
        </svg>
    );
};

export const BankIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" />
        </svg>
    );
};
export const BedIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <title>bed</title>
            <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
        </svg>
    );
};

export const CrossIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
        </svg>
    );
};

export const AirplaneIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path d="M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z" />
        </svg>
    );
};

export const RestoIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" />
        </svg>
    );
};

export const ClockIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
};

export const HeartIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
        </svg>
    );
};

export const PencilIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
        </svg>
    );
};

export const InfoIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
        </svg>
    );
};

export const TrashIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    );
};

export const Bar2Icon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
    );
};

export const Bar3Icon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-6 h-6' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
};

export const UserLocateIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"
            />
        </svg>
    );
};

export const MinusIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
    );
};

export const TriangleDownIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path fill="currentColor" d="M1 3H23L12 22" />
        </svg>
    );
};

export const FullscreenExitIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" />
        </svg>
    );
};

export const FullscreenIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} focusable="false" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        </svg>
    );
};

export const PlusIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export const ChevronDownIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
};

export const SearchIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" {...props} className={className}>
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
    );
};

export const NotificationIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
        </svg>
    );
};

export const UserProfileIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
        </svg>
    );
};

export const OverviewIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
            />
        </svg>
    );
};

export const AnalyticIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
        </svg>
    );
};

export const DataIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
        </svg>
    );
};

export const CalendarIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
        </svg>
    );
};

export const PeopleIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
        </svg>
    );
};

export const SettingsIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
};

export const TaskListIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
        </svg>
    );
};

export const ClassicCofferIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
        </svg>
    );
};

export const XMarkIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export const ArrowLeftIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    );
};

export const RouteIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props} className={className}>
            <g>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Map" transform="translate(-288.000000, -48.000000)" fillRule="nonzero">
                        <g id="route_fill" transform="translate(288.000000, 48.000000)">
                            <path
                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                id="MingCute"
                                fillRule="nonzero"
                            ></path>
                            <path
                                d="M18,16 C19.6569,16 21,17.3431 21,19 C21,20.6569 19.6569,22 18,22 C16.3431,22 15,20.6569 15,19 C15,17.3431 16.3431,16 18,16 Z M15.5,4 C17.9853,4 20,6.01472 20,8.5 C20,10.9853 17.9853,13 15.5,13 L8.5,13 C7.11929,13 6,14.1193 6,15.5 C6,16.8807 7.11929,18 8.5,18 L13,18 C13.5523,18 14,18.4477 14,19 C14,19.5523 13.5523,20 13,20 L8.5,20 C6.01472,20 4,17.9853 4,15.5 C4,13.0147 6.01472,11 8.5,11 L15.5,11 C16.8807,11 18,9.88071 18,8.5 C18,7.11929 16.8807,6 15.5,6 L11,6 C10.4477,6 10,5.55228 10,5 C10,4.44772 10.4477,4 11,4 L15.5,4 Z M6,2 C7.65685,2 9,3.34315 9,5 C9,6.65685 7.65685,8 6,8 C4.34315,8 3,6.65685 3,5 C3,3.34315 4.34315,2 6,2 Z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const DriverIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} fill="currentColor" viewBox="0 0 64 64">
            <path
                d="M53.5448 49.5665L42.9136 33.236C42.1447 32.0529 40.8327 31.5218 39.5179 31.5218C39.2458 31.5218 38.6827 31.5283 38.0739 31.5368C38.0264 31.4571 37.9769 31.378 37.8968 31.3242L35.2191 29.5459C34.9102 29.3409 34.5091 29.3517 34.2128 29.5697L31.9982 31.2041L29.7822 29.5697C29.4836 29.3517 29.0848 29.3409 28.7735 29.5459L26.1006 31.3242C26.0251 31.3735 25.9771 31.4427 25.9331 31.5151C25.3022 31.5192 24.7143 31.5226 24.4667 31.5226C23.1579 31.5226 21.8519 32.0608 21.0877 33.236L10.4565 49.5665C9.32616 51.3001 9.78364 53.6183 11.4882 54.7922L13.8481 56.4189C15.2707 53.0312 17.6203 50.1345 20.5711 48.0196L21.1796 47.0837V47.5883C23.3179 46.1756 25.7453 45.1739 28.3514 44.6829C27.577 42.9644 26.9272 40.9172 26.4507 38.9876C25.8955 36.7359 25.5698 34.6492 25.5698 33.4674C25.5698 33.0296 25.6264 32.6078 25.7123 32.1964L27.6462 38.596C27.7463 38.9311 28.0361 39.1731 28.3833 39.214C28.4183 39.218 28.4524 39.22 28.4857 39.22C28.7948 39.22 29.0871 39.0567 29.246 38.7836L30.7536 36.1868L31.1778 36.6095C30.1627 37.9523 29.7639 41.7316 29.6091 44.4907C30.3923 44.3948 31.1857 44.331 31.9943 44.331C32.8046 44.331 33.6005 44.396 34.3861 44.4918C34.2311 41.7328 33.8325 37.9535 32.8149 36.6095L33.2391 36.1842L34.7515 38.7835C34.9104 39.0566 35.1986 39.2199 35.51 39.2199C35.5433 39.2199 35.5782 39.2178 35.6118 39.2139C35.9587 39.1729 36.2487 38.9309 36.3512 38.5958L38.284 32.2097C38.3668 32.6169 38.4213 33.0347 38.4213 33.4673C38.4213 35.6633 37.3204 40.9602 35.6412 44.6828C38.2521 45.1752 40.6835 46.1794 42.8219 47.5956V47.0861L43.4406 48.0342C46.3812 50.1502 48.7243 53.042 50.143 56.424L52.5132 54.7922C54.2173 53.6183 54.6726 51.3001 53.5448 49.5665ZM28.7424 36.1543L27.6169 32.4263L29.2356 31.3495L30.8457 32.5371L28.7424 36.1543ZM35.2524 36.1543L33.1514 32.5369L34.76 31.3494L36.3804 32.4261L35.2524 36.1543Z"
                fill="currentColor"
            />
            <path
                d="M26.4888 55.4982L28.4103 58.0265C29.4754 57.3844 30.7098 57.0325 31.9941 57.0325C33.281 57.0325 34.5178 57.3843 35.5829 58.0276L37.5043 55.4974C36.0062 54.0863 34.0617 53.3125 31.9966 53.3125C29.9305 53.3125 27.9836 54.0875 26.4888 55.4982Z"
                fill="currentColor"
            />
            <path
                d="M23.0884 20.9824C23.1536 24.3087 25.0432 27.1587 27.7964 28.6385C29.0537 29.3154 30.4716 29.734 32.0006 29.734C33.5272 29.734 34.941 29.3161 36.1969 28.6406C38.9492 27.1626 40.846 24.3132 40.9088 20.9857C38.6379 22.5635 35.4343 23.589 32.0006 23.589C28.5668 23.589 25.3624 22.5635 23.0884 20.9824Z"
                fill="currentColor"
            />
            <path
                d="M22.8334 13.0842L22.804 15.7244C22.8089 17.8139 26.9232 20.5356 32.0005 20.5356C37.0777 20.5356 41.1884 17.8139 41.1907 15.7244L41.1636 13.0855C42.4996 12.7377 43.5363 12.2209 44.2003 11.4781C44.7204 10.8988 45.0192 10.1843 45.0192 9.28512C45.0194 5.21149 39.1852 0 32.0007 0C24.8098 0 18.9819 5.21149 18.9819 9.28512C18.9819 10.1843 19.2789 10.8976 19.7968 11.4781C20.461 12.2207 21.499 12.7375 22.8334 13.0842Z"
                fill="currentColor"
            />
            <path
                d="M31.9943 46.6392C22.4221 46.6392 14.6338 54.4277 14.6338 63.9999H19.0073C19.0073 63.9937 19.0073 63.985 19.0073 63.9789V63.9748C19.1495 63.118 19.8842 62.4938 20.7469 62.4938C20.7619 62.4938 20.7787 62.4951 20.7953 62.4951L27.5518 62.6704C27.4246 63.0946 27.3364 63.5353 27.3364 64.0001H36.6561C36.6561 63.5353 36.5686 63.0946 36.4391 62.6704L43.1979 62.4951C43.2121 62.4951 43.2265 62.4938 43.244 62.4938C44.1058 62.4938 44.8438 63.118 44.9851 63.9748V63.9789C44.9851 63.985 44.9851 63.9937 44.9851 63.9999H49.3547C49.3548 54.4277 41.569 46.6392 31.9943 46.6392ZM39.4886 56.6988L35.8871 61.4443C35.0522 60.1785 33.6232 59.34 31.9942 59.34C30.369 59.34 28.9385 60.1777 28.1052 61.4435L24.5046 56.7002C23.8906 55.8908 23.9675 54.7502 24.6865 54.0314C26.7056 52.0135 29.3499 51.0043 31.9965 51.0043C34.6424 51.0043 37.2865 52.0135 39.3089 54.0331C40.0271 54.7514 40.1027 55.8898 39.4886 56.6988Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const BusTransportIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} fill="none" viewBox="0 0 64 64">
            <path
                d="M10.6666 22.0445H12.0888V30.5779H10.6666C10.4798 30.5779 10.2949 30.5411 10.1223 30.4696C9.94979 30.3981 9.79301 30.2934 9.66094 30.1613C9.52888 30.0292 9.42412 29.8724 9.35265 29.6999C9.28117 29.5273 9.24438 29.3424 9.24438 29.1556V23.4667C9.24438 23.0896 9.39423 22.7278 9.66094 22.4611C9.92766 22.1944 10.2894 22.0445 10.6666 22.0445ZM53.3333 22.0445H51.9111V30.5779H53.3333C53.52 30.5779 53.705 30.5411 53.8775 30.4696C54.0501 30.3981 54.2069 30.2934 54.3389 30.1613C54.471 30.0292 54.5758 29.8724 54.6472 29.6999C54.7187 29.5273 54.7555 29.3424 54.7555 29.1556V23.4667C54.7555 23.0896 54.6057 22.7278 54.3389 22.4611C54.0722 22.1944 53.7105 22.0445 53.3333 22.0445ZM49.0666 19.2001V44.8001C49.0666 45.5545 48.7669 46.278 48.2335 46.8114C47.7001 47.3448 46.9766 47.6445 46.2222 47.6445V50.489C46.2222 51.2434 45.9225 51.9669 45.389 52.5003C44.8556 53.0337 44.1321 53.3334 43.3777 53.3334H40.5333C39.7789 53.3334 39.0554 53.0337 38.5219 52.5003C37.9885 51.9669 37.6888 51.2434 37.6888 50.489V47.6445H26.3111V50.489C26.3111 51.2434 26.0114 51.9669 25.4779 52.5003C24.9445 53.0337 24.221 53.3334 23.4666 53.3334H20.6222C19.8678 53.3334 19.1443 53.0337 18.6108 52.5003C18.0774 51.9669 17.7777 51.2434 17.7777 50.489V47.6445C17.0233 47.6445 16.2998 47.3448 15.7664 46.8114C15.233 46.278 14.9333 45.5545 14.9333 44.8001V19.2001C14.9333 16.9369 15.8323 14.7664 17.4326 13.1661C19.0329 11.5658 21.2034 10.6667 23.4666 10.6667H40.5333C42.7965 10.6667 44.9669 11.5658 46.5673 13.1661C48.1676 14.7664 49.0666 16.9369 49.0666 19.2001ZM26.3111 16.3556H37.6888V13.5112H26.3111V16.3556ZM23.4666 41.9556C23.4666 41.3931 23.2998 40.8431 22.9872 40.3753C22.6747 39.9076 22.2304 39.543 21.7107 39.3277C21.1909 39.1124 20.619 39.0561 20.0672 39.1658C19.5155 39.2756 19.0086 39.5465 18.6108 39.9443C18.213 40.3421 17.9421 40.8489 17.8324 41.4007C17.7226 41.9525 17.7789 42.5244 17.9942 43.0442C18.2095 43.5639 18.5741 44.0082 19.0419 44.3207C19.5096 44.6333 20.0596 44.8001 20.6222 44.8001C21.3766 44.8001 22.1001 44.5004 22.6335 43.967C23.1669 43.4335 23.4666 42.71 23.4666 41.9556ZM46.2222 41.9556C46.2222 41.3931 46.0553 40.8431 45.7428 40.3753C45.4302 39.9076 44.986 39.543 44.4662 39.3277C43.9465 39.1124 43.3746 39.0561 42.8228 39.1658C42.271 39.2756 41.7642 39.5465 41.3664 39.9443C40.9686 40.3421 40.6977 40.8489 40.5879 41.4007C40.4782 41.9525 40.5345 42.5244 40.7498 43.0442C40.9651 43.5639 41.3297 44.0082 41.7974 44.3207C42.2652 44.6333 42.8151 44.8001 43.3777 44.8001C44.1321 44.8001 44.8556 44.5004 45.389 43.967C45.9225 43.4335 46.2222 42.71 46.2222 41.9556ZM46.2222 19.2001H17.7777V36.2667H46.2222V19.2001Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const StopBusIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} fill="currentColor" viewBox="0 0 64 64">
            <path
                d="M57.3501 45V12.9C57.3501 11.6 56.3001 10.55 55.0001 10.55H23.5001C22.2001 10.55 21.1501 11.6 21.1501 12.9V45.05C20.8001 45.3 20.6001 45.65 20.6001 46.05V48.4001C20.6001 49.0501 21.1501 49.6 21.8001 49.6H24.7001V53.25C24.7001 54.25 25.5001 55.05 26.5001 55.05H28.3001C29.3001 55.05 30.1001 54.25 30.1001 53.25V49.6H48.5001V53.25C48.5001 54.25 49.3001 55.05 50.3001 55.05H52.1001C53.1001 55.05 53.9001 54.25 53.9001 53.25V49.6H56.8501C57.5001 49.6 58.0501 49.0501 58.0501 48.4001V46.05C57.9501 45.6 57.7501 45.2001 57.3501 45ZM25.9501 14.25H52.6001C53.2501 14.25 53.8001 14.8 53.8001 15.45V16.1C53.8001 16.75 53.2501 17.3 52.6001 17.3H25.9501C25.3001 17.3 24.7501 16.75 24.7501 16.1V15.45C24.7501 14.75 25.3001 14.25 25.9501 14.25ZM27.3001 44.1C25.7501 44.1 24.5501 42.85 24.5501 41.35C24.5501 39.85 25.8501 38.6501 27.3001 38.6501C28.7501 38.6501 30.0501 39.9001 30.0501 41.4001C30.0501 42.9001 28.8001 44.1 27.3001 44.1ZM24.7501 33.8V20.9C24.7501 20.25 25.3001 19.7 25.9501 19.7H52.5501C53.2001 19.7 53.7501 20.25 53.7501 20.9V33.85C53.7501 34.5 53.2001 35.05 52.5501 35.05H25.9501C25.3001 34.95 24.7501 34.4 24.7501 33.8ZM51.1501 44.1C49.6001 44.1 48.4001 42.85 48.4001 41.35C48.4001 39.85 49.6501 38.6 51.1501 38.6C52.6501 38.6 53.9001 39.85 53.9001 41.35C53.9001 42.85 52.6501 44.1 51.1501 44.1Z"
                fill="currentColor"
            />
            <path
                d="M18.8 33.9501H16.45C15.8 33.9501 15.25 33.4 15.25 32.75V25.75C15.25 25.1 15.8 24.55 16.45 24.55H18.8C19.45 24.55 20 25.1 20 25.75V32.75C19.95 33.4 19.4 33.9501 18.8 33.9501Z"
                fill="currentColor"
            />
            <path
                d="M62.1 33.9501H59.75C59.1 33.9501 58.55 33.4 58.55 32.75V25.75C58.55 25.1 59.1 24.55 59.75 24.55H62.1C62.75 24.55 63.3 25.1 63.3 25.75V32.75C63.25 33.4 62.75 33.9501 62.1 33.9501Z"
                fill="currentColor"
            />
            <path
                d="M11.7499 52.6499H8.1999V22.2499H10.5499C11.1999 22.2499 11.7499 21.6999 11.7499 21.0499V9.3499C11.7499 8.6999 11.1999 8.1499 10.5499 8.1499H3.5499C2.8999 8.1499 2.3499 8.6999 2.3499 9.3499V21.0499C2.3499 21.6999 2.8999 22.2499 3.5499 22.2499H5.8999V52.6999H2.3499C1.6999 52.6999 1.1499 53.2499 1.1499 53.8999C1.1499 54.5499 1.6999 55.0999 2.3499 55.0999H6.9999C6.9999 55.0999 6.9999 55.0999 7.0499 55.0999C7.0499 55.0999 7.0499 55.0999 7.0999 55.0999H11.6999C12.3499 55.0999 12.8999 54.5499 12.8999 53.8999C12.9499 53.1999 12.3999 52.6499 11.7499 52.6499Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const MapSearchIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} fill="currentColor" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M14,6.11L8,4V15.89L9,16.24V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5A0.5,0.5 0 0,1 20,2.5V11.81C18.83,10.69 17.25,10 15.5,10C15,10 14.5,10.06 14,10.17V6.11Z"
            />
        </svg>
    );
};

export const MapClockIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { className = 'w-4 h-4' } = props;
    return (
        <svg {...props} className={className} fill="currentColor" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M15,12H16.5V16.25L19.36,17.94L18.61,19.16L15,17V12M16,9C16.69,9 17.37,9.1 18,9.29V4.7L15,5.86V9.07C15.33,9 15.66,9 16,9M23,16A7,7 0 0,1 16,23C13,23 10.4,21.08 9.42,18.4L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2A0.5,0.5 0 0,1 20,2.5V10.25C21.81,11.5 23,13.62 23,16M9,16C9,13.21 10.63,10.8 13,9.67V5.87L9,4.47V16.13H9C9,16.09 9,16.04 9,16M16,11A5,5 0 0,0 11,16A5,5 0 0,0 16,21A5,5 0 0,0 21,16A5,5 0 0,0 16,11M4,5.46V17.31L7,16.15V4.45L4,5.46Z"
            />
        </svg>
    );
};
