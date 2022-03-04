﻿import React from "react";
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
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";
import IssueHeader from "./IssueHeader";

export default function QANewTicket() {

    document.title = "New Ticket";

    return (
        <>
            <QANavBar/>
            <form className="m-2 space-y-8 divide-y divide-gray-200 flex justify-center">
                <div className="space-y-8 divide-y divide-gray-200 min-w-[50%] max-w-screen-2xl">
                    <IssueHeader/>
                    <div>
                        <IssueTitle/>

                        <div className="flex flex-wrap space-x-2">
                            <SeverityDropDown/>
                            <PriorityDropDown/>
                            <ReportTypesDropDown/>
                            <ProductDropDown/>
                            <BrowserDropDown/>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <UploadScreenshot/>
                            <IssueDescription/>
                            <IssueReproduction/>
                            <ExpectedResult/>
                            <ActualResult/>
                        </div>

                        <span className="pt-5 float-right">
                            <ResetButton/>
                            <SubmitButton/>
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
};