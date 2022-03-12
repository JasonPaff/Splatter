import {useEffect, useState} from "react";
import {getTickets} from "../../../utils/GetTickets";
import PriorityPieChart from "./PriorityPieChart";
import SeverityPieChart from "./SeverityPieChart";
import ErrorTypePieChart from "./ErrorTypePieChart";
import ProductPieChart from "./ProductPieChart";
import BrowserPieChart from "./BrowserPieChart";

export default function StatTicketInfo(props) {
    const [tickets, setTickets] = useState([]);
    const [hasTickets, setHasTickets] = useState(false);

    const getAllTickets = async () => {
        const filteredTickets = await getTickets(props.token, props.user).catch(console.error);
        setTickets(filteredTickets);
        setHasTickets(true);
    }

    useEffect(() => {
        getAllTickets().catch(console.error)
    }, [])

    return (
        <div className="flex flex-row">
            {hasTickets && (
                <>
                    <div className="flex flex-col sm:flex-row flex-wrap ml-10 mt-20">
                        <div className="flex flex-col items-center">
                            <h1>Priority</h1>
                            <PriorityPieChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Severity</h1>
                            <SeverityPieChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Issue Type</h1>
                            <ErrorTypePieChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Product</h1>
                            <ProductPieChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Browser</h1>
                            <BrowserPieChart tickets={tickets}/>
                        </div>
                    </div>
                </>)}
        </div>
    );
}