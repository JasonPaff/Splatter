import React from "react";

export default function ActualResult() {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Actual result
            </label>
            <p className="mt-2 text-sm text-gray-500">Describe the actual result of the steps above.</p>

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
        </div>
    );
}