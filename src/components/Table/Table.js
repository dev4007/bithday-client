import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdBlockFlipped } from 'react-icons/md';

const data = [
  {
    sno: 1,
    BirthdayWishes: 'Annette Black',
    VoiceOverartist: 'Charan',
    Customer: 'Lee',
    DateAndTime: '(MT)Jun 14, 2021 11:20 AM EST',
    MoreInfo: 'Happy Birthday Arun',
    Action: '',
  },
  {
    sno: 3,
    BirthdayWishes: 'Voice Over artist',
    VoiceOverartist: 'Eleanor Pena',
    Customer: 'Mahesh',
    DateAndTime: '(NY) Jun 8, 2021 04:01 PM EST',
    MoreInfo: 'Many more returns of the day',
    Action: '',
  },
  {
    sno: 2,
    BirthdayWishes: 'Customer',
    VoiceOverartist: 'Theresa Webb',
    Customer: 'Prabhas',
    DateAndTime: '(NY) Jun 20, 2021 10:45 AM EST',
    MoreInfo: 'Happy Birthday Arun',
    Action: '',
  },
  {
    sno: 4,
    BirthdayWishes: 'Date and time (time zone)',
    VoiceOverartist: 'Leslie Alexander',
    Customer: 'Vijay',
    DateAndTime: '(MT)Jun 14, 2021 11:20 AM EST',
    MoreInfo: 'Happy Birthday Arun',
    Action: '',
  },
];

function Table() {
  return (
    <div className="overflow-x-auto py-5">
      <table className="min-w-full bg-white border-collapse shadow-lg rounded ">
        <thead>
          <tr className="bg-gray-800 text-black border-b">
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">S.no</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">Birthday Wishes</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">Voice Over artist</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">Customer</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">Date and time (time zone)</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">More Information</th>
            <th className="py-2 px-3 uppercase font-semibold text-sm text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-100 border-b border-gray-300">
              <td className="py-2 px-3 text-sm text-left font-bold">{item.sno}</td>
              <td className="py-2 px-3 text-sm text-left font-bold">{item.BirthdayWishes}</td>
              <td className="py-2 px-3 text-sm text-left font-bold">{item.VoiceOverartist}</td>
              <td className="py-2 px-3 text-sm text-left font-bold">{item.Customer}</td>
              <td className="py-2 px-3 text-sm text-left font-bold">{item.DateAndTime}</td>
              <td className="py-2 px-3 text-sm text-left font-bold">{item.MoreInfo}</td>
              <td className="py-2 px-3 text-sm text-left font-bold ">
                <FaPen className="inline-block text-gray-600 cursor-pointer mr-7" />
                <MdBlockFlipped className="inline-block text-gray-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
