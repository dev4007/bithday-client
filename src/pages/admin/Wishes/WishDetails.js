import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import Layout from "../../../Layout/Layout";
import IMG1 from "../../../images/user/user-02.png";
import IMG2 from "../../../images/user/user-12.png";
import ConfirmationModal from "../../../components/Module/index";
import { getScheduleById } from "../../../store/action/wishAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Static data (replace with your actual data structure)
const wishDetailsData = {
  Images: ["IMG1", "IMG2"], // Placeholder for image URLs
};

const WishDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const dispatch = useDispatch();

  // wishDetailsData
  const ByIdData = useSelector((state) => state?.WishReducer?.listByID);

  useEffect(() => {
    const getSchedule = async () => {
      setIsOpen(true);
      await dispatch(getScheduleById(id));
      setIsOpen(false);
    };
    getSchedule();
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
            Wish Details
          </h2>
          <span className="text-2xl md:text-3xl font-bold">(upcoming)</span>
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
        {/* Birthday Wishes To Details */}
        <div className="bg-white px-15 py-7">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Birthday Wishes To Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Customer Name</p>
              <span>{ByIdData.birthdayWishesName?.firstName}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{ByIdData.birthdayWishesName?.gender}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{ByIdData.birthdayWishesName?.birthDate}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{ByIdData.birthdayWishesName?.state}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{ByIdData.birthdayWishesName?.phoneNumber}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{ByIdData.birthdayWishesName?.email}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Birthday Call Time</p>
              <span>{ByIdData.birthdayWishesName?.birthdayCallTime}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Birthday Call Date</p>
              <span>{ByIdData.birthdayWishesName?.birthdayCallDate}</span>
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
              <span>{ByIdData.birthdayWishesName?.favoriteCharacter}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Special Message</p>
              <span>{ByIdData.birthdayWishesName?.specialMessage}</span>
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
              <span>{ByIdData.customer?.firstName}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{ByIdData.customer?.gender}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{ByIdData.customer?.birthDate}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Address</p>
              <span>{ByIdData.customer?.address}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">City</p>
              <span>{ByIdData.customer?.city}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{ByIdData.customer?.state}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{ByIdData.customer?.mobileNumber}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{ByIdData.customer?.email}</span>
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
              <span>{ByIdData.voiceArtist?.firstName}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Gender </p>
              <span>{ByIdData.voiceArtist?.gender}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Date Of Birth</p>
              <span>{ByIdData.voiceArtist?.birthDate}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Address</p>
              <span>{ByIdData.voiceArtist?.address}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">City</p>
              <span>{ByIdData.voiceArtist?.city}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">State</p>
              <span>{ByIdData.voiceArtist?.state}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Phone Number</p>
              <span>{ByIdData.voiceArtist?.mobileNumber}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Email</p>
              <span>{ByIdData.voiceArtist?.email}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">More Information</p>
              <span>{ByIdData.voiceArtist?.moreInformation}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Voice Over Characters</p>
              <ul className="list-none col-span-3">
                {ByIdData.voiceArtist?.charactersForVoiceOver.map(
                  (character, index) => (
                    <li key={index}>{character}</li>
                  )
                )}
              </ul>
            </div>
          </div>
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

export default WishDetails;
