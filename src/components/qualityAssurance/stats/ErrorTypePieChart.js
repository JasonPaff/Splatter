import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF3218'];

export default function ErrorTypePieChart(props) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const typeData = [];

        const minor = props.tickets.filter((ticket) => {
            return (ticket.type === 'Coding Error');
        });
        typeData.push({name: 'Coding Error', value: minor.length});

        const major = props.tickets.filter((ticket) => {
            return (ticket.type === 'Design Error');
        });
        typeData.push({name: 'Design Error', value: major.length});

        const critical = props.tickets.filter((ticket) => {
            return (ticket.type === 'New Suggestion');
        });
        typeData.push({name: 'New Suggestion', value: critical.length});

        const trivial = props.tickets.filter((ticket) => {
            return (ticket.type === 'Documentation Issue');
        });
        typeData.push({name: 'Documentation Issue', value: trivial.length});

        const blocker = props.tickets.filter((ticket) => {
            return (ticket.type === 'Hardware Problem');
        });
        typeData.push({name: 'Hardware Problem', value: blocker.length});

        const enhancement = props.tickets.filter((ticket) => {
            return (ticket.type === 'Unknown');
        });
        typeData.push({name: 'Unknown', value: enhancement.length});

        setTypes(typeData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} ${payload[0].name}`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <PieChart width={300} height={300}>
            <Pie data={types} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%"
                 outerRadius={80} fill="#8884d8">
                {
                    types.map((entry, index) =>
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </PieChart>
    );
}