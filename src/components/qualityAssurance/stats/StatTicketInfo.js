import {useEffect, useState} from "react";
import {getTickets} from "../../../utils/GetTickets";
import PriorityPieChart from "./PriorityPieChart";
import SeverityPieChart from "./SeverityPieChart";
import ErrorTypePieChart from "./ErrorTypePieChart";
import ProductPieChart from "./ProductPieChart";
import BrowserPieChart from "./BrowserPieChart";
import {getAssignedAndClosedTickets} from "../../../utils/GetAssignedTickets";
import {connect} from "react-redux";
import {getAllAdminTickets} from "../../../utils/getAllAdminTickets";
import ProductBarChart from "./ProductBarChart";
import PriorityBarChart from "./priorityBarChart";
import SeverityBarChart from "./severityBarChart";
import BrowserBarChart from "./BrowserBarChart";
import ErrorTypeBarChart from "./ErrorTypeBarChart";

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role
    }
}

function StatTicketInfo(props) {
    const [tickets, setTickets] = useState([]);
    const [hasTickets, setHasTickets] = useState(false);

    const getAllTickets = async () => {
        let filteredTickets = []
        if (props.role === 'customer') {
            filteredTickets = await getTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'staff') {
            filteredTickets = await getAssignedAndClosedTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'admin') {
            filteredTickets = await getAllAdminTickets(props.token, props.user).catch(console.error);
        }
        setTickets(filteredTickets);
        setHasTickets(true);
    }

    useEffect(() => {
        getAllTickets().catch(console.error)
    }, [])

    return (
        <div className="flex flex-row">
            {hasTickets && (
                <div className="grid grid-cols-1 grid-rows-2">
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
                    <div className="flex flex-col sm:flex-row flex-wrap ml-10 mt-20">
                        <div className="flex flex-col items-center">
                            <h1>Product</h1>
                            <ProductBarChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Priority</h1>
                            <PriorityBarChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Severity</h1>
                            <SeverityBarChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Browser</h1>
                            <BrowserBarChart tickets={tickets}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1>Error Type</h1>
                            <ErrorTypeBarChart tickets={tickets}/>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default connect(mapStateToProps)(StatTicketInfo);