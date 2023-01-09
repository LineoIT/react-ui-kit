

function MenuItem() {
    return <div>

    </div>
}

const Sidebar = () => {
  return (
    <>
      <div className=" ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-primary dark:bg-skin-dark transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div className="flex items-center p-2 my-5 font-semibold text-white">
          <svg
            enableBackground="new 0 0 503.589 503.589"
            viewBox="0 0 503.589 503.589"
            className="h-8 w-8 fill-white"
          >
            <g>
              <path d="m69.954 459.229 168.711-291.214-71.765-123.863-166.9 290.897z" />
              <path d="m503.355 319.98-166.877-290.858h-143.615l168.521 290.858z" />
              <path d="m167.917 349.98-72.12 124.488h337.666l70.126-124.488z" />
            </g>
          </svg>
          <div className="ml-2">Logo</div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div>
            <label className="flex items-center rounded px-4 text-gray-200 dark:text-gray-200 bg-white-10 focus-within:bg-white-20">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="px-2 py-3  ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent"
                type="text"
              />
            </label>
          </div>
        </div>
        <div></div>
      </div>
      <main className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-red-500"></main>
    </>
  );
};

export default Sidebar;
