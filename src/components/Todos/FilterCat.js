import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FilterCat(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://todoapi.scott-cashion.com/api/categories/').then(response => {
            setCategories(response.data);
        })
    }, []);

  return (
    <div className="text-center mt-5">
        <button onClick={() => props.setFilterCat(0)} className="btn btn-outline-info bg-dark m-1">
            All
        </button>
        {/* Map all of the categories to a button that will be used to filter todo on that category */}
        {categories.map(cat =>
                <button key={cat.CategoryId} onClick={() => props.setFilterCat(Number(cat.CategoryId))} className="btn btn-outline-info bg-dark m-1">
                    {cat.Name}
                </button>
            )}
    </div>
  )
}
