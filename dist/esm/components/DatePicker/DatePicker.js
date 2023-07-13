import React from 'react';
export const DatePicker = () => {
    return (React.createElement("div", { className: "flex items-center justify-center w-full min-h-screen bg-gray-50" },
        React.createElement("div", { className: "flex bg-white shadow-lg rounded-xl" },
            React.createElement("div", { className: "py-6 border-r border-gray-100" },
                React.createElement("ul", { className: "flex flex-col text-xs" },
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Last 7 days")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Last 14 days")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Last 30 days")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Last 3 months")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Last 12 months")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Month to date")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Quarter to date")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "All time")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left" }, "Custom")))),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement("div", { className: "flex divide-x" },
                    React.createElement("div", { className: "flex flex-col px-6 pt-5 pb-6 border-b border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("button", { className: "flex items-center justify-center p-2 rounded-xl hover:bg-gray-50" },
                                React.createElement("svg", { className: "w-6 h-6 text-gray-900 stroke-current", fill: "none" },
                                    React.createElement("path", { d: "M13.25 8.75L9.75 12l3.5 3.25", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                            React.createElement("div", { className: "text-sm font-semibold" }, "February"),
                            React.createElement("button", { className: "flex items-center justify-center p-2 rounded-xl hover:bg-gray-50" },
                                React.createElement("svg", { className: "w-6 h-6 text-gray-900 stroke-current", fill: "none" },
                                    React.createElement("path", { d: "M10.75 8.75l3.5 3.25-3.5 3.25", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })))),
                        React.createElement("div", { className: "grid grid-cols-7 text-xs text-center text-gray-900" },
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Mo"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Tu"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "We"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Th"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Fri"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Sa"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Su"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "1"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "2"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "3"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "4"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "5"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "6"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "7"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "8"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50" }, "9"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "10"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "11"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "12"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "13"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "14"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "15"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "16"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "17"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-l-lg" }, "18"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "19"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "20"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-tr-lg bg-gray-50" }, "21"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-l-lg bg-gray-50" }, "22"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "23"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "24"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "25"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "26"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50" }, "27"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-br-lg bg-gray-50" }, "28"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "1"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "2"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "3"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "4"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "5"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "6"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "7"))),
                    React.createElement("div", { className: "flex flex-col px-6 pt-5 pb-6 border-b border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("button", { className: "flex items-center justify-center p-2 rounded-xl hover:bg-gray-50" },
                                React.createElement("svg", { className: "w-6 h-6 text-gray-900 stroke-current", fill: "none" },
                                    React.createElement("path", { d: "M13.25 8.75L9.75 12l3.5 3.25", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                            React.createElement("div", { className: "text-sm font-semibold" }, "March"),
                            React.createElement("button", { className: "flex items-center justify-center p-2 rounded-xl hover:bg-gray-50" },
                                React.createElement("svg", { className: "w-6 h-6 text-gray-900 stroke-current", fill: "none" },
                                    React.createElement("path", { d: "M10.75 8.75l3.5 3.25-3.5 3.25", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })))),
                        React.createElement("div", { className: "grid grid-cols-7 text-xs text-center text-gray-900" },
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Mo"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Tu"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "We"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Th"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Fri"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Sa"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 font-semibold rounded-lg" }, "Su"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-tl-lg bg-gray-50" }, "1"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "2"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "3"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "4"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "5"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "6"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "7"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-bl-lg bg-gray-50" }, "8"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "9"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50" }, "10"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-r-lg" }, "11"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "12"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "13"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "14"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "15"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "16"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "17"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "18"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "19"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "20"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "21"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "22"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "23"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "24"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "25"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "26"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "27"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "28"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "29"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "30"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg" }, "31"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "1"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "2"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "3"),
                            React.createElement("span", { className: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg" }, "4")))),
                React.createElement("div", { className: "flex items-center justify-between px-6 py-4" },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("input", { type: "text", className: "flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none", placeholder: "18 / 02 / 2021" }),
                        React.createElement("div", { className: "p-1" },
                            React.createElement("svg", { className: "w-6 h-6 text-gray-900 stroke-current", fill: "none" },
                                React.createElement("path", { d: "M6.738 12.012h10.5m-4.476 4.25l4.5-4.25-4.5-4.25", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                        React.createElement("input", { type: "text", className: "flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none", placeholder: "11 / 03 / 2021" })),
                    React.createElement("div", { className: "flex items-center space-x-2" },
                        React.createElement("button", { className: "px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100" }, "Cancel"),
                        React.createElement("button", { className: "px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700" }, "Set Date")))))));
};
//# sourceMappingURL=DatePicker.js.map