    import React from "react";

    function FlagDetails(props) {
    // Check if props.data exists and is an array
    if (!props.data || props.data.length === 0) {
        return <div>No data available</div>;
    }

    const name = props.data;

    return (
        <div className="bg-gradient-to-r  from-blue-100 to-purple-200 min-h-screen py-10 px-5 flex flex-col items-center">
        <div className="bg-white max-w-6xl w-full p-8 rounded-lg shadow-xl border-t-4 border-indigo-500 my-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
            {/* Country Info */}
            <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
                {name?.name?.common || "Unknown Country"}
                </h1>
                <p className="text-xl text-gray-700">
                {name?.name?.official || "No official name available"}
                </p>
                <div className="mt-4 text-gray-600">
                <p className="text-lg text-green-600">
                    <strong>Capital:</strong>{" "}
                    {name?.capital?.[0] || "No capital available"}
                </p>
                <p className="text-lg text-pink-600">
                    <strong>Continent:</strong> {name?.continents?.[0] || "Unknown"}
                </p>
                <p className="text-lg text-teal-600">
                    <strong>Region:</strong> {name?.region || "No region available"}
                </p>
                <p className="text-lg text-purple-600">
                    <strong>Currency:</strong>{" "}
                    {name?.currencies?.SHP?.name || "No currency available"} (
                    {name?.currencies?.SHP?.symbol || "N/A"})
                </p>
                <p className="text-lg text-yellow-600">
                    <strong>Population:</strong>{" "}
                    {name?.population || "No population available"}
                </p>
                <p className="text-lg text-indigo-600">
                    <strong>Timezone:</strong>{" "}
                    {name?.timezones?.[0] || "No timezone available"}
                </p>
                <p className="text-lg text-red-600">
                    <strong>Start of Week:</strong>{" "}
                    {name?.startOfWeek || "Not specified"}
                </p>
                <p className="text-lg text-orange-600">
                    <strong>Independent:</strong> {name?.independent ? "Yes" : "No"}
                </p>
                <p className="text-lg text-indigo-600">
                    <strong>Landlocked:</strong> {name?.landlocked ? "Yes" : "No"}
                </p>
                </div>
            </div>

            {/* Flag and Map Section */}
            <div className="flex-1 flex flex-col items-center space-y-4">
                <div className="w-64 h-40 bg-gradient-to-r from-blue-500 to-teal-500 px-4 flex justify-center items-center rounded-lg shadow-lg">
                <img
                    src={name?.flags?.png || "https://via.placeholder.com/150"}
                    alt={name?.name?.common || "Flag"}
                    className="object-contain border border-white max-h-full rounded-lg"
                />
                </div>
                <a
                href={name?.maps?.googleMaps || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md shadow-md"
                >
                View on Google Maps
                </a>
                <a
                href={name?.maps?.openStreetMaps || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white bg-green-600 hover:bg-green-700 p-2 rounded-md shadow-md"
                >
                View on OpenStreetMap
                </a>
            </div>
            </div>

            {/* Additional Information */}
            <div className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                More Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg shadow-md border-t-4 border-blue-300">
                <p>
                    <strong>Area:</strong> {name?.area || "No data"}
                </p>
                <p>
                    <strong>Languages:</strong>{" "}
                    {name?.languages?.eng || "No languages available"}
                </p>
                <p>
                    <strong>Timezones:</strong>{" "}
                    {name?.timezones?.join(", ") || "No timezones available"}
                </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-t-4 border-yellow-300">
                <p>
                    <strong>Car:</strong> Drive on the{" "}
                    {name?.car?.side || "Unknown"} side
                </p>
                <p>
                    <strong>Demonyms:</strong>{" "}
                    {name?.demonyms?.eng?.masc || "No demonyms available"} (Male),{" "}
                    {name?.demonyms?.eng?.fem || "No demonyms available"} (Female)
                </p>
                <p>
                    <strong>Flag:</strong> {name?.flag || "No flag data"}
                </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg shadow-md border-t-4 border-green-300">
                <p>
                    <strong>Top-Level Domain:</strong>{" "}
                    {name?.tld?.join(", ") || "No TLDs available"}
                </p>
                <p>
                    <strong>Alt Spellings:</strong>{" "}
                    {name?.altSpellings?.join(", ") || "No alt spellings available"}
                </p>
                <p>
                    <strong>CCN3:</strong> {name?.ccn3 || "No data"}
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default FlagDetails;
