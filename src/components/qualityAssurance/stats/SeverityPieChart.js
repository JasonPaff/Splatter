import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF3218'];

export default function SeverityPieChart(props) {
    const [severities, setSeverities] = useState([]);

    useEffect(() => {
        const severityData = [];

        const minor = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Minor');
        });
        severityData.push({name: 'Minor', value: minor.length});

        const major = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Major');
        });
        severityData.push({name: 'Major', value: major.length});

        const critical = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Critical');
        });
        severityData.push({name: 'Critical', value: critical.length});

        const trivial = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Trivial');
        });
        severityData.push({name: 'Trivial', value: trivial.length});

        const blocker = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Blocker');
        });
        severityData.push({name: 'Blocker', value: blocker.length});

        const enhancement = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Enhancement');
        });
        severityData.push({name: 'Enhancement', value: enhancement.length});

        setSeverities(severityData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues of ${payload[0].name} severity`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <PieChart width={300} height={250}>
            <Pie data={severities} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%"
                 outerRadius={80} fill="#8884d8">
                {
                    severities.map((entry, index) =>
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </PieChart>
    );
}