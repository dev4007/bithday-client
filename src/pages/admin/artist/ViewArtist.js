import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import ConfirmationModal from "../../..//components/Module/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JsonData from "../../../JsonData/ScheduledWishes.json";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Layout from "../../../Layout/Layout";
import { getArtistById } from "../../../store/action/artistAction";

const ViewArtist = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const dispatch = useDispatch();

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

  // wishDetailsData
  const artist = useSelector((state) => state.artistReducer.artistByID);

  useEffect(() => {
    const getArtist = async () => {
      setIsOpen(true);
      await dispatch(getArtistById(id));
      setIsOpen(false);
    };
    getArtist();
  }, []);

  const handleButtonClick = (type) => {
    setActionType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirmAction = () => {
    switch (actionType) {
      case "Edit":
        console.log("Edit confirmed");
        // Perform edit action here
        break;
      case "Suspend":
        console.log("Suspend confirmed");
        // Perform suspend action here
        break;
      case "Delete":
        console.log("Delete confirmed");
        // Perform delete action here
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="bg-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mr-4 text-zinc-800">
          Artist Details
          </h2>
        </div>
        <div className="flex items-center bg-blue-50 rounded-full p-2 w-full md:w-60">
          <IoSearchOutline className="ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-blue-50 px-2 py-1 rounded-md text-black dark:text-white focus:outline-none ml-2 w-full md:w-40"
          />
        </div>
      </div>
      <div className="bg-stone-200 my-3 p-3">
        {/* Artist Details */}
        <div className="bg-white px-15 py-7 mt-3">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Artist Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Artist Name</p>
              <span>{artist.firstName}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{artist.gender}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{artist.birthDate}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Address</p>
              <span>{artist.address}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">City</p>
              <span>{artist.city}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{artist.state}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{artist.mobileNumber}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{artist.email}</span>
            </div>
          </div>
        </div>

        <div className="bg-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-extrabold mr-4 text-zinc-800">
              Wishes History
            </h2>
          </div>
        </div>

        {/* Table to display JSON data */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 ">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  Birthday Wishes for
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  Voice Over artist
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  Date and Time (time zone)
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  feedback by <br />
                  Voice Over artist
                </th>
                <th className="px-6 py-3 text-left text-base font-extrabold text-gray-500 tracking-wider">
                  File
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
                    {item["Birthday Wishes"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    {item["Voice Over artist"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    {item["Customer"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    {item["Date and time(time zone)"]}
                  </td>{" "}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    {item["Status"]}
                  </td>{" "}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    {item["FeedBackByVoiceOverArtist"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-2">
                    <Link
                      to={`/wishdetails/${item["S.no"]}`}
                      className="text-blue-500 hover:text-blue-700 border-b"
                    >
                      {/* {item["File"]} */}
                      View File
                    </Link>
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
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 my-10">
          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Edit")}
          >
            <div className="bg-slate-400 rounded-full mr-7">
              <FaPen className="p-2 text-4xl" />
            </div>
            Edit
          </button>

          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Suspend")}
          >
            <div className="bg-slate-400 rounded-full mr-7">
              <MdBlockFlipped className=" p-2 text-4xl" />
            </div>
            Suspend
          </button>

          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Delete")}
          >
            <div className="bg-slate-400 rounded-full mr-7">
              <FaTrash className=" p-2 text-4xl" />
            </div>
            Delete
          </button>
        </div>
        {/* Modal */}
        <ConfirmationModal
          isOpen={isOpen}
          closeModal={closeModal}
          actionType={actionType}
          confirmAction={confirmAction}
        />
      </div>
    </Layout>
  );
};

export default ViewArtist;
