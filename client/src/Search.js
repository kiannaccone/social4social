import UserContainer from "./UserContainer"

function Search({search, setSearch}){

    return(
        <div className="search">
        <label htmlFor="search">Search Users:</label>
          <input
            className = "searchTerm"
            type="text"
            id="search"
            placeholder="Search Users..."
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <UserContainer />
        </div>
      );
}

export default Search; 