import React from 'react'

const SearchBox = () => {
  return (
    <form className="w-full px-4">
    <div className="relative flex flex-row-reverse">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-12 h-12 ml-2 my-auto left-0 bg-orange-400 p-2 text-white rounded-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            placeholder="دنبال چی میگردی؟"
            className="w-full text-right py-4 pl-12 pr-4 text-gray-500 placeholder:text-gray-500 border rounded-md outline-none bg-white focus:bg-white focus:border-indigo-600"
        />
    </div>
    </form>
  )
}

export default SearchBox
