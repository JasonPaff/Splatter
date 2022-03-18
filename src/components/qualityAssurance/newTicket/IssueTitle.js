import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (title) => dispatch(actionCreators.setTitle(title))
    };
}

const mapStateToProps = (state) => {
    return {
        title: state.newTicketReducer.title
    };
}

function IssueTitle(props) {
    return (
        <>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Issue Title
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    id="title"
                    value={props.title}
                    placeholder="Enter a descriptive issue title"
                    onChange={(e) =>  props.onTitleChange(e.target.value)}
                    className="block border-gray-300 focus:border-sky-500 focus:ring-sky-500 w-full text-md sm:text-sm
                         shadow-sm rounded-md caret-sky-500"
                />
            </div>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTitle);