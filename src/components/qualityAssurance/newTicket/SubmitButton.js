import React from "react";
import {connect} from 'react-redux'
import {useAuth0} from "@auth0/auth0-react";

const mapStateToProps = (state) => {
    return {
        values: state.newTicketReducer,
    };
}

function SubmitButton(props) {
    const {getAccessTokenSilently, user} = useAuth0();

    const handleSubmit = async () => {
        const actualResult = props.values.actualResult;
        const browser = props.values.browser;
        const createdAt = Date.now().toString();
        const createdBy = user.name;
        const expectedResult = props.values.expectedResult;
        const priority = props.values.priority.numeric;
        const product = props.values.product;
        const reproductionSteps = props.values.reproductionSteps;
        const screenshot = props.values.screenshot;
        const severity = props.values.severity.severity;
        const summary = props.values.summary;
        const title = props.values.title;
        const type = props.values.type;
        const assignedTo = "none";
        const status = "created";

        const query = `mutation CreateTicket($input: TicketInput) {
            createTicket(input: $input) {
                id
            }
        }`;

        const token = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });

        const headers = {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body : JSON.stringify({
                query,
                variables: { input : {
                    title, severity, priority, type, product, browser, screenshot, summary,
                        reproductionSteps, expectedResult, actualResult, createdAt, createdBy,
                        assignedTo, status
                    }
                }
            })
        };

        const request = await fetch("http://localhost:4000/graphql", headers);
        const response = await request.json();
        alert(`Ticket Created!\n\nTicket ID: ${response.data.createTicket.id}`);
    }

    return (
        <button
            type="submit"
            onClick={() => handleSubmit()}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-sky-500"
        >
            Submit
        </button>
    );
}

export default connect(mapStateToProps)(SubmitButton);