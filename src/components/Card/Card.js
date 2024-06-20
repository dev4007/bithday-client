import React from "react";
import { FaUser, FaRegIdCard, FaTrafficLight } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsFillBookmarkFill } from "react-icons/bs";

function Card() {
  return (
    <div>
      <div className="flex flex-wrap -mx-4">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <FaUser className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  123
                </h4>
                <span className="text-sm font-medium">No of Users</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <FaRegIdCard className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  123
                </h4>
                <span className="text-sm font-medium">
                  No of Voice Over artist
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <FaMoneyBillTrendUp className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  $46
                </h4>
                <span className="text-sm font-medium">
                  Earnings In This Month
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <FaMoneyBillTrendUp className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  $436
                </h4>
                <span className="text-sm font-medium">
                  Earnings In LastMonth
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>
        {/* Second Card */}

        {/* Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <BsFillBookmarkFill className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  07
                </h4>
                <span className="text-sm font-medium">
                  No of Wishes In This Month
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <BsFillBookmarkFill className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  50
                </h4>
                <span className="text-sm font-medium">
                  No of Wishes In This Week
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <BsFillBookmarkFill className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  67
                </h4>
                <span className="text-sm font-medium">
                  No of Wishes In Next Week
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <FaTrafficLight className="text-xl" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  234
                </h4>
                <span className="text-sm font-medium">Visits Trafic</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
