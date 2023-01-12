
import {
    AnalyticIcon,
    CalendarIcon,
    DataIcon,
    OverviewIcon,
    PeopleIcon,
    SettingsIcon,
    TaskListIcon,
    ClassicCofferIcon,
  } from "../components/Icons";

export function MenuItems() {
    return (
      <div className="block py-5 font-light">
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <OverviewIcon className="w-6 h-6" />
          <span className="ml-2">Overview</span>
        </a>
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <AnalyticIcon className="w-6 h-6" />
          <span className="ml-2">Analytics</span>
        </a>
  
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <DataIcon className="w-6 h-6" />
          <span className="ml-2">Database</span>
        </a>
  
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <CalendarIcon className="w-6 h-6" />
  
          <span className="ml-2">Calendar</span>
        </a>
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <PeopleIcon className="w-6 h-6" />
  
          <span className="ml-2">Teams</span>
        </a>
  
        <div className="border border-white-10 my-10" />
  
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <SettingsIcon className="w-6 h-6" />
          <span className="ml-2">Settings</span>
        </a>
  
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <TaskListIcon className="w-6 h-6" />
          <span className="ml-2">Offers</span>
        </a>
  
        <a
          href="#"
          className="flex text-white hover:bg-white-10 cursor-pointer py-3 px-2 items-center"
        >
          <ClassicCofferIcon className="w-6 h-6" />
          <span className="ml-2">Offers</span>
        </a>
      </div>
    );
  }