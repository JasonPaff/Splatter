import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

export default function PriorityBarChart(props) {
    const [priority, setPriorities] = useState([]);

    useEffect(() => {
        const priorityData = [];

        const wishlist = props.tickets.filter((ticket) => {
            return (ticket.priority === 0);
        });
        priorityData.push({name: 'Wishlist', priority: wishlist.length});

        const eventual = props.tickets.filter((ticket) => {
            return (ticket.priority === 1);
        });
        priorityData.push({name: 'Eventual', priority: eventual.length});

        const soonish = props.tickets.filter((ticket) => {
            return (ticket.priority === 2);
        });
        priorityData.push({name: 'Soonish', priority: soonish.length});

        const normal = props.tickets.filter((ticket) => {
            return (ticket.priority === 3);
        });
        priorityData.push({name: 'Normal', priority: normal.length});

        const important = props.tickets.filter((ticket) => {
            return (ticket.priority === 4);
        });
        priorityData.push({name: 'Important', priority: important.length});

        const immediate = props.tickets.filter((ticket) => {
            return (ticket.priority === 5);
        });
        priorityData.push({name: 'Immediate', priority: immediate.length});

        setPriorities(priorityData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues of ${payload[0].payload.name} priority`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <BarChart
                width={600}
                height={300}
                data={priority}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Bar dataKey="priority" fill="#8884d8"/>
            </BarChart>
        </>
    );
}