import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import Layout from "../../Layout/Layout";
import IMG1 from "../../images/user/user-02.png";
import IMG2 from "../../images/user/user-12.png";
import ConfirmationModal from "../../components/Module/index";

// Static data (replace with your actual data structure)
const wishDetailsData = {
  "S.no": "08",
  "Birthday Wishes": "Williamson",
  "Voice Over artist": "Annette Black",
  Customer: "Nathan",
  Gender: "Male",
  "Date and time(time zone)": "(NY)Jun 16, 2021 02:3: PM EST",
  "More Information": "Happy Birthday Arun",
  State: "New York",
  "Phone Number": "234-232-122",
  Email: "Gururohit@gmail.com",
  "Birthday call time": "(NT)11:45 p.m. EST",
  "Birthday call date": "24 October 2004",
  Images: ["IMG1", "IMG2"], // Placeholder for image URLs
  "Voice Character": "Scooby-Doo",
  "Special Message": "Happy birthday to you my dear friend",
  "Date Of Birth": "October 24,2004",
  Address: "San Jose, California, USA",
  City: "San Jose",
  "More Information": "Heres my experience and description about the voices",
  "Voice over Charecters":
    "Mickey Mouse, SpongeBob SquarePants, Scooby-Doo, Elsa (Frozen)",
};

function WishDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState("");

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

  // Splitting the "Voice over Charecters" string into an array
  const voiceCharacters = wishDetailsData["Voice over Charecters"].split(", ");

  return (
    <Layout>
      <div className="bg-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mr-4 text-zinc-800">
            Wish Details
          </h2>
          <span className="text-2xl md:text-3xl font-bold">(upcoming)</span>
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
      <div className="bg-stone-200 my-3 p-3">
        {/* Birtday Wishes To Details */}
        <div className="bg-white px-15 py-7">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Birthday Wishes To Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Customer Name</p>
              <span>{wishDetailsData.Customer}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{wishDetailsData["Gender"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{wishDetailsData["Date Of Birth"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{wishDetailsData.State}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{wishDetailsData["Phone Number"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{wishDetailsData.Email}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Birthday Call Time</p>
              <span>{wishDetailsData["Birthday call time"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Birthday Call Date</p>
              <span>{wishDetailsData["Birthday call date"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Images</p>
              <div className="flex gap-2 pt-1">
                {wishDetailsData.Images.map((img, index) => (
                  <img
                    key={index}
                    src={img === "IMG1" ? IMG1 : IMG2}
                    alt={`IMG${index + 1}`}
                    className="h-15"
                  />
                ))}
              </div>
            </div>
            <div className="py-3">
              <p className="font-bold">Voice Character</p>
              <span>{wishDetailsData["Voice Character"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Special Message</p>
              <span>{wishDetailsData["Special Message"]}</span>
            </div>
          </div>
        </div>
        {/* Customer Details */}
        <div className="bg-white px-15 py-7 mt-3">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Customer Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Customer Name</p>
              <span>{wishDetailsData.Customer}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{wishDetailsData["Gender"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{wishDetailsData["Date Of Birth"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Address</p>
              <span>{wishDetailsData.Address}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">City</p>
              <span>{wishDetailsData["City"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{wishDetailsData.State}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{wishDetailsData["Phone Number"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{wishDetailsData["Email"]}</span>
            </div>
          </div>
        </div>
        {/* Voice over artist Details */}

        <div className="bg-white px-15 py-7 mt-3">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Voice over artist Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Customer Name</p>
              <span>{wishDetailsData.Customer}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{wishDetailsData["Gender"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{wishDetailsData["Date Of Birth"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Address</p>
              <span>{wishDetailsData.Address}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">City</p>
              <span>{wishDetailsData["City"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{wishDetailsData.State}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{wishDetailsData["Phone Number"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{wishDetailsData["Email"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">More Information</p>
              <span>{wishDetailsData["More Information"]}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Voice Over Characters</p>
              <ul className="list-none col-span-3">
                {voiceCharacters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 my-10">
          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Edit")}>
            <div className="bg-slate-400 rounded-full mr-7">
              <FaPen className="p-2 text-4xl" />
            </div>
            Edit
          </button>

          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Suspend")}>
            <div className="bg-slate-400 rounded-full mr-7">
              <MdBlockFlipped className=" p-2 text-4xl" />
            </div>
            Suspend
          </button>

          <button
            className="inline-flex items-center justify-start lg:w-60 h-18 px-4 py-2 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => handleButtonClick("Delete")}>
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
}

export default WishDetails;
