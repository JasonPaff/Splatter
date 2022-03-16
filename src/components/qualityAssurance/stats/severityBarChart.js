import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

export default function SeverityBarChart(props) {
    const [severity, setSeverities] = useState([]);

    useEffect(() => {
        const severityData = [];

        const minor = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Minor');
        });
        severityData.push({name: 'Minor', severity: minor.length});

        const major = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Major');
        });
        severityData.push({name: 'Major', severity: major.length});

        const critical = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Critical');
        });
        severityData.push({name: 'Critical', severity: critical.length});

        const trivial = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Trivial');
        });
        severityData.push({name: 'Trivial', severity: trivial.length});

        const blocker = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Blocker');
        });
        severityData.push({name: 'Blocker', severity: blocker.length});

        const enhancement = props.tickets.filter((ticket) => {
            return (ticket.severity === 'Enhancement');
        });
        severityData.push({name: 'Enhancement', severity: enhancement.length});

        setSeverities(severityData);
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
                data={severity}
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
                <Bar dataKey="severity" fill="#8884d8"/>
            </BarChart>
        </>
    );
}