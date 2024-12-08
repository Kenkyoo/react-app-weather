interface SearchProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search = ({handleSubmit} : SearchProps) => {
    return (          
        <>
          <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
          <form onSubmit={handleSubmit}>
          <div className="input-group rounded mb-3">
            <input
              type="text"
              name="city"
              className="form-control rounded"
              placeholder="City"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <a href="#!" type="button">
              <span
                className="input-group-text border-0 fw-bold"
                id="search-addon"
              >
                Check!
              </span>
            </a>
          </div>
          <div className="mb-4 pb-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="units"
                id="inlineRadio1"
                value='metric'
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Celsius
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="units"
                id="inlineRadio2"
                value='imperial'
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Farenheit
              </label>
            </div>
          </div>
          </form>
        </>   
    )
}

export default Search;