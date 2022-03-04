import React from "react";

export default function SubmitButton() {
    return (
        <>
            <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                            shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                            hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-sky-500"
            >
                Submit
            </button>
        </>
    );
}