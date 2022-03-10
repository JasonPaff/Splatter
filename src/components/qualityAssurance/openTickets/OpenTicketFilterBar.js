import {productOptions} from "../../../store/data/newTicketsData";
import {browserOptions} from "../../../store/data/newTicketsData";
import {priorityOptions} from "../../../store/data/newTicketsData";
import {severityOptions} from "../../../store/data/newTicketsData";
import {reportTypes} from "../../../store/data/newTicketsData";

export default function OpenTicketFilterBar() {
    return (
        <div className="flex flex-wrap">
            <div className="mr-2 mb-2">
                <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                    Product
                </label>
                <select
                    id="product"
                    name="product"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    defaultValue="All"
                >
                    <option>All</option>
                    <option>{productOptions[0]}</option>
                    <option>{productOptions[1]}</option>
                    <option>{productOptions[2]}</option>
                </select>
            </div>
            <div className="mr-2 mb-2">
                <label htmlFor="browser" className="block text-sm font-medium text-gray-700">
                    Browser
                </label>
                <select
                    id="browser"
                    name="browser"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    defaultValue="All"
                >
                    <option>All</option>
                    <option>{browserOptions[0]}</option>
                    <option>{browserOptions[1]}</option>
                    <option>{browserOptions[2]}</option>
                    <option>{browserOptions[3]}</option>
                </select>
            </div>
            <div className="mr-2 mb-2">
                <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                    Severity
                </label>
                <select
                    id="severity"
                    name="severity"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    defaultValue="All"
                >
                    <option>All</option>
                    <option>{severityOptions[0].severity}</option>
                    <option>{severityOptions[1].severity}</option>
                    <option>{severityOptions[2].severity}</option>
                    <option>{severityOptions[3].severity}</option>
                    <option>{severityOptions[4].severity}</option>
                    <option>{severityOptions[5].severity}</option>
                </select>
            </div>
            <div className="mr-2 mb-2">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                    Priority
                </label>
                <select
                    id="priority"
                    name="priority"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    defaultValue="All"
                >
                    <option>All</option>
                    <option>{priorityOptions[0].priority}</option>
                    <option>{priorityOptions[1].priority}</option>
                    <option>{priorityOptions[2].priority}</option>
                    <option>{priorityOptions[3].priority}</option>
                    <option>{priorityOptions[4].priority}</option>
                    <option>{priorityOptions[5].priority}</option>
                </select>
            </div>
            <div className="mr-2 mb-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    Type
                </label>
                <select
                    id="type"
                    name="type"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    defaultValue="All"
                >
                    <option>All</option>
                    <option>{reportTypes[0]}</option>
                    <option>{reportTypes[1]}</option>
                    <option>{reportTypes[2]}</option>
                    <option>{reportTypes[3]}</option>
                    <option>{reportTypes[4]}</option>
                    <option>{reportTypes[5]}</option>
                </select>
            </div>
        </div>
    );

}