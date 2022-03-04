import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

function IssueTitle(props) {

    const handleChange = (e) => {
        props.onTitleChange(e.target.value);
    }

    return (
        <div className="mt-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full
                        sm:text-sm border-gray-300 rounded-md"
                    placeholder="descriptive issue title"
                />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (title) => dispatch(actionCreators.setTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(IssueTitle);