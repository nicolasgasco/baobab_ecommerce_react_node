import React, { useState } from "react";

const SimpleDropdown = ({
  heading,
  fields,
  handleResultsPerPage,
  className,
}) => {
  const [show, setShow] = useState(false);

  const showFields = fields.map((field) => {
    return (
      <li
        onClick={(event) => {
          setShow(false);
          handleResultsPerPage(event.target.value);
        }}
        key={`${field}-hits`}
        value={field}
        className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-green-100 px-3 font-normal"
      >
        {field}
      </li>
    );
  });

  return (
    <div className={`${className}`}>
      <div className="container flex justify-center mx-auto py-2">
        <div className=" mb-2">
          {/* Code block starts */}
          <div className="relative" onSubmit={handleResultsPerPage}>
            <div
              className="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <p className="pl-3 py-3 text-gray-600 dark:text-gray-400 text-xs leading-3 tracking-normal font-normal">
                {heading}
              </p>
              <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" icon icon-tabler icon-tabler-chevron-up"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-up"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                )}
              </div>
            </div>
            {show && (
              <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                {showFields}
              </ul>
            )}
          </div>
          {/* Code block ends */}
        </div>
      </div>
    </div>
  );
};
export default React.memo(SimpleDropdown);
