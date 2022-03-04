import React from "react";
import QANavBar from "../QANavBar";
import PriorityDropDown from "./PriorityDropDown";
import UploadScreenshot from "./UploadScreenshot";
import IssueDescription from "./IssueDescription";
import IssueReproduction from "./IssueReproduction";
import ExpectedResult from "./ExpectedResult";
import ActualResult from "./ActualResult";
import SeverityDropDown from "./SeverityDropDown";
import ReportTypesDropDown from "./ReportTypesDropDown";
import ProductDropDown from "./ProductDropDown";
import IssueTitle from "./IssueTitle";
import BrowserDropDown from "./BrowserDropDown";

export default function QANewTicket() {

    document.title = "New Ticket";

    return (<>
        <QANavBar/>

        <form className="m-2 space-y-8 divide-y divide-gray-200 flex justify-center">
            <div className="space-y-8 divide-y divide-gray-200 min-w-[50%] max-w-screen-2xl">
                <div>
                    {/* Title */}
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Create a new ticket
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Some kind of subtext about ticket creating.
                    </p>

                    <div className="mt-4">
                        {/* Issue Title */}
                        <IssueTitle/>
                    </div>

                    <div className="mt-4">
                        {/* Severity Dropdown */}
                        <SeverityDropDown/>
                    </div>

                    <div className="mt-4">
                        {/* Priority Dropdown */}
                        <PriorityDropDown/>
                    </div>

                    <div className="mt-4">
                        {/* Report Type Dropdown */}
                        <ReportTypesDropDown/>
                    </div>

                    <div className="mt-4">
                        <ProductDropDown/>
                    </div>

                    <div className="mt-4">
                        <BrowserDropDown/>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        {/* Screenshot Upload */}
                        <UploadScreenshot/>

                        {/* Issue Description */}
                        <IssueDescription/>

                        {/* Issue Reproduction */}
                        <IssueReproduction/>

                        {/* Expected Result */}
                        <ExpectedResult/>

                        {/* Actual Result */}
                        <ActualResult/>
                    </div>
                </div>

                <div className="pt-5 float-right">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md
                            shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                            shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600
                            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </>);
};