const SearchBar = () => {
    return ( 
        <div className=" flex justify-center  border-t border-b py-2">
            <div className=" w-2/3">
                <form className="flex flex-col md:flex-row gap-3">
                    <div className="flex">
                        <input type="text" placeholder="Search anything here"
                            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-green-900 focus:outline-none focus:border-green-900"
                            />
                        <button type="submit" className="bg-green-900 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                    </div>
                    <select defaultValue="All" id="pricingType" name="pricingType"
                        className="w-full h-10 border-2 border-green-900 focus:outline-none focus:border-green-900 text-green-900 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                        <option value="All" defaultValue="">All</option>
                        <option value="Freemium">By countries</option>
                        <option value="Free">Hotels</option>
                        <option value="Paid">Places</option>
                    </select>
                </form>
            </div>
        </div>
     );
}
 
export default SearchBar;