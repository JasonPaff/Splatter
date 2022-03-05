import React from "react";
import {connect} from 'react-redux'
import { useMutation } from 'graphql-hooks';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";
import {useAuth0} from "@auth0/auth0-react";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: (values, token) => {
            dispatch(actionCreators.submitValues(values, token));
        }
    };
}

const mapStateToProps = (state) => {
    return {
        values: state.newTicketReducer,
    };
}

const createTicketMutation = `
    mutation CreateTicket($title: String) {
        createTicket(title: $title) {
            id
        }
    }
`

function SubmitButton(props) {
    const {getAccessTokenSilently} = useAuth0();
    const [createTicket] = useMutation(createTicketMutation);

    const handleSubmit = async () => {
        const token = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });

        const res = await createTicket({variables: props.values.title });
        console.log(res);
        props.onSubmitClick(props.values, token);
    }

    return (
        <button
            type="submit"
            onClick={handleSubmit}
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