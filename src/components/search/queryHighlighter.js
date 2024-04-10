import React from "react";

function QueryHighlighter({ query, item }) {
  const index = item.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) {
    return (
      <span
        className="font-inter text-sm text-white px-2 py-2  cursor-pointer inline-block"
        role="menuitem"
        tabIndex="-1"
      >
        {item.trim()}
      </span>
    );
  }

  return (
    <span>
      {item.substring(0, index).trim() && (
        <span
          className="font-inter text-sm text-white px-2 py-2 cursor-pointer inline-block"
          role="menuitem"
          tabIndex="-1"
        >
          {item.substring(0, index).trim()}
        </span>
      )}
      <span
        className="font-inter text-sm text-fragomen-blue pl-2 py-2  cursor-pointer inline-block"
        role="menuitem"
        tabIndex="-1"
      >
        {item.substring(index, index + query.length).trim()}
      </span>
      {item.substring(index + query.length).trim() && (
        <span
          className="font-inter text-sm text-white  py-2  cursor-pointer inline-block"
          role="menuitem"
          tabIndex="-1"
        >
          {item.substring(index + query.length).trim()}
        </span>
      )}
    </span>
  );
}

export default QueryHighlighter;
