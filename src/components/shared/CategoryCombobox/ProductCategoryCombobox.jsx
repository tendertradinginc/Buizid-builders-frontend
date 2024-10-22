import axios from "axios";
import { useEffect, useState } from "react";

export function ProductCategoryCombobox({
  category,
  setCategory,
  apiEndPoint,
  defaultAll,
  setIsdisabled,
}) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/category/${apiEndPoint}`
        );
        console.log(res.data);
        setCategories(res.data.data);
        setFilteredCategories(res.data.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(categories);
    } else {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, categories]);

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsdisabled && setIsdisabled(false);
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <div
        className="border border-gray-300 rounded-lg px-3 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{category ? category : "Select Category"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-950"
              placeholder="Search category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ul className="max-h-48 overflow-y-auto">
            {defaultAll && (
              <li
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  category === "" ? "bg-gray-200 font-bold" : ""
                }`}
                onClick={() => handleSelectCategory("")}
              >
                All
              </li>
            )}
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat) => (
                <li
                  key={cat._id}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    category === cat.name ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => handleSelectCategory(cat.name)}
                >
                  {cat.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No categories found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
