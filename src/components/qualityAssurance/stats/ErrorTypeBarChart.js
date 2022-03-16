import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

export default function ErrorTypeBarChart(props) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const typeData = [];

        const minor = props.tickets.filter((ticket) => {
            return (ticket.type === 'Coding Error');
        });
        typeData.push({name: 'Coding Error', type: minor.length});

        const major = props.tickets.filter((ticket) => {
            return (ticket.type === 'Design Error');
        });
        typeData.push({name: 'Design Error', type: major.length});

        const critical = props.tickets.filter((ticket) => {
            return (ticket.type === 'New Suggestion');
        });
        typeData.push({name: 'New Suggestion', type: critical.length});

        const trivial = props.tickets.filter((ticket) => {
            return (ticket.type === 'Documentation Issue');
        });
        typeData.push({name: 'Documentation Issue', type: trivial.length});

        const blocker = props.tickets.filter((ticket) => {
            return (ticket.type === 'Hardware Problem');
        });
        typeData.push({name: 'Hardware Problem', type: blocker.length});

        const enhancement = props.tickets.filter((ticket) => {
            return (ticket.type === 'Unknown');
        });
        typeData.push({name: 'Unknown', type: enhancement.length});

        setTypes(typeData);
    }, []);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues of ${payload[0].payload.name} severity`}</label>
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
                data={types}
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
                <Bar dataKey="type" fill="#8884d8"/>
            </BarChart>
        </>
    );
}