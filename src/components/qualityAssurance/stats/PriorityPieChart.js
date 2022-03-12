import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF3218'];

export default function PriorityPieChart(props) {
    const [priorities, setPriorities] = useState([]);

    useEffect(() => {
        const priorityData = [];

        const wishlist = props.tickets.filter((ticket) => {
            return (ticket.priority === 0);
        });
        priorityData.push({name: 'Wishlist', value: wishlist.length});

        const eventual = props.tickets.filter((ticket) => {
            return (ticket.priority === 1);
        });
        priorityData.push({name: 'Eventual', value: eventual.length});

        const soonish = props.tickets.filter((ticket) => {
            return (ticket.priority === 2);
        });
        priorityData.push({name: 'Soonish', value: soonish.length});

        const normal = props.tickets.filter((ticket) => {
            return (ticket.priority === 3);
        });
        priorityData.push({name: 'Normal', value: normal.length});

        const important = props.tickets.filter((ticket) => {
            return (ticket.priority === 4);
        });
        priorityData.push({name: 'Important', value: important.length});

        const immediate = props.tickets.filter((ticket) => {
            return (ticket.priority === 5);
        });
        priorityData.push({name: 'Immediate', value: immediate.length});

        setPriorities(priorityData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues of ${payload[0].name} priority`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <PieChart width={300} height={250}>
            <Pie data={priorities} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%"
                 outerRadius={80} fill="#8884d8">
                {
                    priorities.map((entry, index) =>
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </PieChart>
    );
}