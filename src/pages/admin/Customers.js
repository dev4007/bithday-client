import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../../Layout/Layout";
import Calendar from "../../components/Calendar/Calendar";
import JsonData from "../../JsonData/Customers.json";
import ReactPaginate from "react-paginate";
import { FaPen } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Customers = () => {
  const tableData = JsonData.tableData;
  const itemsPerPage = 10;

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate number of pages
  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  // Slice data for current page
  const offset = currentPage * itemsPerPage;
  const currentItems = tableData.slice(offset, offset + itemsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Layout>
      <div className="bg-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mr-4 text-zinc-800">
            Customers
          </h2>{" "}
          <span className="bg-zinc-800 text-white px-4 py-1 text-lg md:text-xl font-bold rounded-lg">
            05
          </span>
        </div>
        <div className="flex items-center bg-blue-50 rounded-full p-2 w-full md:w-60">
          <IoSearchOutline className="ml-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-blue-50 px-2 py-1 rounded-md text-black dark:text-white focus:outline-none ml-2 w-full md:w-40"
          />
        </div>
      </div>
      <h2 className="text-xl md:text-2xl font-bold py-2">Select Date</h2>
      <div className="flex justify-center md:justify-start mb-4">
        <Calendar />
      </div>

      {/* Table to display JSON data */}
      <div className="overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between lg:items-center py-3">
          <h2 className="my-3 font-extrabold text-3xl">Customers details</h2>
          <button className="mt-3 md:mt-0 inline-flex items-center justify-start lg:w-3/2 h-18 px-4 py-2 text-xl text-white dark:text-white bg-black dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none rounded-xl">
            <div className="bg-slate-400 rounded-full mr-7">
              <FiPlus className="p-2 text-4xl" />
            </div>
            Add new Customer
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200 ">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                S.No
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                Customer name
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                State
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                More Information
              </th>
              <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-black-2">
                  {item["S.no"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  {item["CustomerName"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  {item["State"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  {item["Email"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  {item["Phone"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  {/* {item["More Information"]} */}
                  <Link
                    to={`/wishdetails/${item["S.no"]}`}
                    className="text-blue-500 hover:text-blue-700 border-b">
                    {item["Moreinfo"]}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                  <FaPen className="inline-block text-gray-600 cursor-pointer mr-7" />
                  <MdBlockFlipped className="inline-block text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-12">
        <ReactPaginate
          previousLabel={
            <div className="flex flex-wrap items-center gap-1">
              <FaChevronLeft /> Previous
            </div>
          }
          nextLabel={
            <div className="flex flex-wrap items-center gap-1">
              Next <FaChevronRight />
            </div>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </Layout>
  );
};

export default Customers;
