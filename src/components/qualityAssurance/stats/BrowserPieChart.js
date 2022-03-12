import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF3218'];

export default function BrowserPieChart(props) {
    const [browser, setBrowser] = useState([]);

    useEffect(() => {
        const browserData = [];

        const edge = props.tickets.filter((ticket) => {
            return (ticket.browser === "Microsoft Edge");
        });
        browserData.push({name: 'Microsoft Edge', value: edge.length});

        const chrome = props.tickets.filter((ticket) => {
            return (ticket.browser === "Google Chrome");
        });
        browserData.push({name: 'Google Chrome', value: chrome.length});

        const firefox = props.tickets.filter((ticket) => {
            return (ticket.browser === "Mozilla Firefox");
        });
        browserData.push({name: 'Mozilla Firefox', value: firefox.length});

        const safari = props.tickets.filter((ticket) => {
            return (ticket.browser === "Apple Safari");
        });
        browserData.push({name: 'Apple Safari', value: safari.length});

        setBrowser(browserData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues found using ${payload[0].name}`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <PieChart width={300} height={250}>
            <Pie data={browser} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%"
                 outerRadius={80} fill="#8884d8">
                {
                    browser.map((entry, index) =>
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </PieChart>
    );
}