import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF3218'];

export default function ProductPieChart(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productData = [];

        const tournamentLife = props.tickets.filter((ticket) => {
            return (ticket.product === "Tournament Life");
        });
        productData.push({name: 'Tournament Life', value: tournamentLife.length});

        const etsyClone = props.tickets.filter((ticket) => {
            return (ticket.product === "Etsy Clone");
        });
        productData.push({name: 'Etsy Clone', value: etsyClone.length});

        const whatsForDinner = props.tickets.filter((ticket) => {
            return (ticket.product === "Whats for Dinner?");
        });
        productData.push({name: 'Whats for Dinner?', value: whatsForDinner.length});

        setProducts(productData);
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].value} issues found in ${payload[0].name}`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <PieChart width={300} height={250}>
            <Pie data={products} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%"
                 outerRadius={80} fill="#8884d8">
                {
                    products.map((entry, index) =>
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </PieChart>
    );
}