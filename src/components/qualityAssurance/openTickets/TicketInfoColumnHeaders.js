import {tableHeaders} from "../../../store/data/openTicketsData";
import OpenTicketSortButton from "./OpenTicketSortButton";

export default function TicketInfoColumnHeaders() {
    return (
        <thead className="bg-gray-50">
            <tr>
                {tableHeaders.map((header) => (
                <th
                    key={header.name}
                    scope="col"
                    className="whitespace-nowrap py-3.5 pr-3 pl-2 text-left
                        text-sm font-semibold text-gray-900 sm:pl-4"
            >
                <OpenTicketSortButton name={header.name}/>
        </th>
                ))}
        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">more info</span>
        </th>
    </tr>
    </thead>);
}