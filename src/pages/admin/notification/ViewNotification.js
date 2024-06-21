import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JsonData from "../../../JsonData/ScheduledWishes.json";
import { getNotificationById } from "../../../store/action/notificationAction";

const ViewNotification = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const dispatch = useDispatch();

  // wishDetailsData
  const notification = useSelector(
    (state) => state.notificationReducer.notificationByID
  );

  useEffect(() => {
    const getNotification = async () => {
      setIsOpen(true);
      await dispatch(getNotificationById(id));
      setIsOpen(false);
    };
    getNotification();
  }, []);

  return (
    <Layout>
      <div className="bg-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mr-4 text-zinc-800">
            Notification Details
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
        {/* notification Details */}
        <div className="bg-white px-15 py-7 mt-3">
          <h3 className="text-xl font-bold mb-3 text-blue-950">
            Notification Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-3">
              <p className="font-bold">Notification Title</p>
              <span>{notification.title}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Description </p>
              <span>{notification.description}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Sent To</p>
              <span>{notification.sendNotificationTo}</span>
            </div>
            <div className="py-3">
              <p className="font-bold">Time And Date</p>
              <span>{notification.createdAt}</span>
            </div>

            <div className="py-3">
              <p className="font-bold">Fille</p>
              <span>"No File Available</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewNotification;
