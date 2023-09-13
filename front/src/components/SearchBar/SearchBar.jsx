import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div>
    <form  className="form-main">
    <input type="text" name="search" placeholder="Search..." className="FormeMain1" />
    <input type="submit" name="" value="Search" className="btn-main"  />
  </form>
  </div>
  )
}

export default SearchBar