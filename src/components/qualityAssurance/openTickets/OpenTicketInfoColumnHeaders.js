﻿import OpenTicketSortButton from "./OpenTicketSortButton";

export default function OpenTicketInfoColumnHeaders() {
    return (
        <thead className="bg-gray-50">
        <tr>
            <th
                scope="col"
                className="sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75
                    py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
            >
                <OpenTicketSortButton name="Title"/>
            </th>
            <th
                scope="col"
                className="sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75
                    px-3 py-3.5 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter"
            >
                <OpenTicketSortButton name="Type"/>
            </th>
            <th
                scope="col"
                className="sticky top-0 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75
                    px-3 py-3.5 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter lg:table-cell"
            >
                <OpenTicketSortButton name="Date Created"/>
            </th>
            <th
                scope="col"
                className="sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75
                    px-3 py-3.5 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter hidden sm:table-cell"
            >
                <OpenTicketSortButton name="Status"/>
            </th>
            <th
                scope="col"
                className="sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75
                    px-3 py-3.5 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter hidden sm:table-cell"
            >
                Screenshot
                <span className="sr-only">View</span>
            </th>
            <th
                scope="col"
                className="sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75
                    px-3 py-3.5 text-left text-md font-semibold text-gray-900
                    backdrop-blur backdrop-filter hidden sm:table-cell"
            >
                Info
                <span className="sr-only">View</span>
            </th>
        </tr>
        </thead>
    );
}