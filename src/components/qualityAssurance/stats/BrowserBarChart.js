import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

export default function BrowserBarChart(props) {
    const [browser, setBrowser] = useState([]);

    useEffect(() => {
        const browserData = [];

        const edge = props.tickets.filter((ticket) => {
            return (ticket.browser === "Microsoft Edge");
        });
        browserData.push({name: 'Microsoft Edge', browser: edge.length});

        const chrome = props.tickets.filter((ticket) => {
            return (ticket.browser === "Google Chrome");
        });
        browserData.push({name: 'Google Chrome', browser: chrome.length});

        const firefox = props.tickets.filter((ticket) => {
            return (ticket.browser === "Mozilla Firefox");
        });
        browserData.push({name: 'Mozilla Firefox', browser: firefox.length});

        const safari = props.tickets.filter((ticket) => {
            return (ticket.browser === "Apple Safari");
        });
        browserData.push({name: 'Apple Safari', browser: safari.length});

        setBrowser(browserData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues found using ${payload[0].payload.name}`}</label>
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
                data={browser}
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
                <Bar dataKey="browser" fill="#8884d8"/>
            </BarChart>
        </>
    );
}