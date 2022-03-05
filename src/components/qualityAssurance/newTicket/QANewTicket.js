import React from "react";
import QANavBar from "../QANavBar";
import PriorityDropDown from "./PriorityDropDown";
import UploadScreenshot from "./UploadScreenshot";
import IssueSummary from "./IssueSummary";
import ReproductionSteps from "./ReproductionSteps";
import ExpectedResult from "./ExpectedResult";
import ActualResult from "./ActualResult";
import SeverityDropDown from "./SeverityDropDown";
import ReportTypesDropDown from "./TypesDropDown";
import ProductDropDown from "./ProductDropDown";
import IssueTitle from "./IssueTitle";
import BrowserDropDown from "./BrowserDropDown";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";
import IssueHeader from "./IssueHeader";

export default function QANewTicket() {

    document.title = "New Ticket";

    return (
        <>
            <QANavBar/>
            <div className="m-2 space-y-8 divide-y divide-gray-200 flex justify-center">
                <div className="space-y-8 divide-y divide-gray-200 min-w-[50%] max-w-screen-2xl">
                    <IssueHeader/>
                    <div className="pt-4">
                        <IssueTitle/>

                        <div className="md:flex md:flex-wrap md:space-x-2 pt-2">
                            <SeverityDropDown/>
                            <PriorityDropDown/>
                            <ReportTypesDropDown/>
                            <ProductDropDown/>
                            <BrowserDropDown/>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <UploadScreenshot/>
                            <IssueSummary/>
                            <ReproductionSteps/>
                            <ExpectedResult/>
                            <ActualResult/>
                        </div>

                        <span className="pt-5 float-right ">
                            <ResetButton/>
                            <SubmitButton/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};