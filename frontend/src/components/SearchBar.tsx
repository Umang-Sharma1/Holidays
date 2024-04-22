import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { IoSearch, IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import { BiCalendarPlus, BiCalendarMinus } from "react-icons/bi";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const clearForm = () => {
    setDestination("");
    setCheckIn(new Date());
    setCheckOut(new Date());
    setAdultCount(1);
    setChildCount(0);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4 lg:gap-4"
    >
      <div className="flex items-center space-x-2">
        <MdTravelExplore className=" text-2xl text-gray-600 mr-1" />
        <input
          placeholder="Where are you going?"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex items-center space-x-4 xl:ml-32">
        <label className="flex items-center">
          <AiOutlineUser className="text-xl text-gray-600 mr-4" />
          <input
            type="number"
            className="w-24 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 lg:w-16"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>

        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <FaChild className="text-xl text-gray-600 mx-4" />
            <input
              type="number"
              className="w-24 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 lg:w-16 "
              min={0}
              max={20}
              value={childCount}
              onChange={(event) => setChildCount(parseInt(event.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="flex items-center lg:justify-end space-x-4 col-span-1 md:col-span-2">
        <BiCalendarPlus className="text-xl text-gray-600" />
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4 col-span-1">
        <BiCalendarMinus className="text-xl text-gray-600" />
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center md:justify-end col-span-1 md:col-span-3 mt-4 md:mt-1">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none"
        >
          <IoSearch className="mr-2" /> Search
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg ml-4 md:ml-2 focus:outline-none"
          onClick={clearForm}
        >
          <IoClose className="mr-2" /> Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
