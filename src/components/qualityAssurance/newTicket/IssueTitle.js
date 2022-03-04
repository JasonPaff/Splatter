export default function IssueTitle() {
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
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full
                        sm:text-sm border-gray-300 rounded-md"
                    placeholder="descriptive issue title"
                />
            </div>
        </div>
    );
}