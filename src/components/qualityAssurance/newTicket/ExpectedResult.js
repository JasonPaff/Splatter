import React from "react";

export default function ExpectedResult() {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Expected result
            </label>
            <p className="mt-2 text-sm text-gray-500">Describe the expected result of the steps above.</p>

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