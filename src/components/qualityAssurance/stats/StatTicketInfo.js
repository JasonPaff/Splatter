import {useEffect, useState} from "react";
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
import {getAllSupportTickets} from "../../../utils/getAllSupportTickets";

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
            filteredTickets = await getAllSupportTickets(props.token, props.user).catch(console.error);
        } else if (props.role === 'staff') {
            filteredTickets = await getAssignedAndClosedTickets(props.token, props.user).catch(console.error);
        } else if (props.role === 'admin') {
            filteredTickets = await getAllAdminTickets(props.token, props.user).catch(console.error);
        }
        setTickets(filteredTickets);
        setHasTickets(true);
    }

    useEffect(() => {
        getAllTickets().catch(console.error)
    }, [])

    return (
        <div className="flex flex-col">
            {hasTickets && (
                <div className="flex flex-col justify-center">
                    <div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl mb-2 text-sky-600">Issues by Product</h1>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center border-b-2 border-dashed mb-4">
                            <ProductPieChart tickets={tickets}/>
                            <ProductBarChart tickets={tickets}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl mb-2 text-sky-600">Issues by Browser</h1>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center border-b-2 border-dashed mb-4">
                            <BrowserPieChart tickets={tickets}/>
                            <BrowserBarChart tickets={tickets}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl mb-2 text-sky-600">Issues by Priority</h1>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center border-b-2 border-dashed mb-4">
                            <PriorityPieChart tickets={tickets}/>
                            <PriorityBarChart tickets={tickets}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center mt-10">
                            <h1 className="text-2xl mb-2 text-sky-600">Issues by Severity</h1>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center border-b-2 border-dashed mb-4">
                            <SeverityPieChart tickets={tickets}/>
                            <SeverityBarChart tickets={tickets}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center mt-10">
                            <h1 className="text-2xl mb-2 text-sky-600">Issues by Error Type</h1>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center">
                            <ErrorTypePieChart tickets={tickets}/>
                            <ErrorTypeBarChart tickets={tickets}/>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default connect(mapStateToProps)(StatTicketInfo);