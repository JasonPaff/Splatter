import React from "react";
import {connect} from 'react-redux'
import {useAuth0} from "@auth0/auth0-react";
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";
import {apiRoute} from "../../../utils/routeUtility";
import * as otherActionCreators from "../../../store/actionCreators/openTicketActionCreator";

const mapStateToProps = (state) => {
    return {
        values: state.newTicketReducer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReset: () => dispatch(actionCreators.resetValues()),
        onTicketStatusChange: (value) => dispatch(otherActionCreators.setReloadTickets(value))
    };
}

function SubmitButton(props) {
    const {getAccessTokenSilently, user} = useAuth0();

    const submit = async (screenshotBase64, imageType) => {
        const actualResult = props.values.actualResult;
        const assignedTo = "none";
        const browser = props.values.browser;
        const createdAt = Date.now().toString();
        const createdBy = user.name;
        const expectedResult = props.values.expectedResult;
        const priority = props.values.priority.numeric;
        const product = props.values.product;
        const reproductionSteps = props.values.reproductionSteps;
        const screenshot = screenshotBase64;
        const screenshotType = imageType;
        const severity = props.values.severity.severity;
        const status = "created";
        const summary = props.values.summary;
        const title = props.values.title;
        const type = props.values.type;

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
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    input: {
                        title, severity, priority, type, product, browser, screenshot, screenshotType,
                        summary, reproductionSteps, expectedResult, actualResult, createdAt, createdBy,
                        assignedTo, status
                    }
                }
            })
        };

        const request = await fetch(`${apiRoute}/graphql`, headers);
        const response = await request.json();
        alert(`Ticket Created!\n\nTicket ID: ${response.data.createTicket.id}`);
        props.onReset();
        props.onTicketStatusChange(true);
    }

    const handleSubmit = async () => {
        if (props.values.screenshot.length <= 0) {
            submit('None', 'None').catch(console.error);
        } else {
            const reader = new FileReader();

            reader.onload = () => {
                submit(reader.result.replace("data:", "")
                    .replace(/^.+,/, ""), props.values.screenshot[0].type);
            }
            reader.readAsDataURL(props.values.screenshot[0]);
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);