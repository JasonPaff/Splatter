import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from "react";

export default function ProductBarChart(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productData = [];

        const tournamentLife = props.tickets.filter((ticket) => {
            return (ticket.product === "Tournament Life");
        });
        productData.push({name: 'Tournament Life', issues: tournamentLife.length});

        const etsyClone = props.tickets.filter((ticket) => {
            return (ticket.product === "Etsy Clone");
        });
        productData.push({name: 'Etsy Clone', issues: etsyClone.length});

        const whatsForDinner = props.tickets.filter((ticket) => {
            return (ticket.product === "Whats for Dinner?");
        });
        productData.push({name: 'Whats for Dinner?', issues: whatsForDinner.length});

        setProducts(productData);
    }, [])

    const CustomTooltip = ({active, payload, label}) => {
        if (active) {
            return (
                <div className="custom-tooltip"
                     style={{backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc'}}>
                    <label>{`${payload[0].value} issues found in ${payload[0].payload.name}`}</label>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <BarChart
                width={500}
                height={300}
                data={products}
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
                <Bar dataKey="issues" fill="#8884d8"/>
            </BarChart>
        </>
    );
}