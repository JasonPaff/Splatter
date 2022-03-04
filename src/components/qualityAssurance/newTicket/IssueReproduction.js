import React from "react";

export default function IssueReproduction() {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Reproduction steps
            </label>
            <p className="mt-2 text-sm text-gray-500">Describe how to reproduce the issue.</p>

            <div className="mt-1">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                />
            </div>
        </div>);
}