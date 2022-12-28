import React, { useState } from "react";

type counter = "increment" | "decrement";

function BookingForm() {
  const [peopleCounter, setPeopleCounter] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState({
    month: "",
    day: "",
    year: "",
  });
  const [time, setTime] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "month") {
      if (+value > 12) {
        return;
      }
      if (value.length > 2) {
        return;
      }
      console.log(value);
      setDate((prev) => ({ ...prev, month: value }));
    }

    if (name === "day") {
      if (+value > 31) {
        return;
      }
      setDate((prev) => ({ ...prev, day: value }));
    }

    if (name === "year") {
      if (+value < 2021) {
        return;
      }
      setDate((prev) => ({ ...prev, year: value }));
    }
  };

  const handleCounter = (counter: counter) => {
    if (counter === "increment") {
      setPeopleCounter((prev) => prev + 1);
    } else {
      if (peopleCounter > 1) {
        setPeopleCounter((prev) => prev - 1);
      }
    }

    if (peopleCounter === 1 && counter === "decrement") {
      return;
    }
  };

  return (
    <div className="relative -top-32 left-0 flex h-full w-full justify-center">
      <form className="w-full max-w-xs border bg-white py-9 px-8 shadow-2xl">
        <div className="mb-9 flex flex-col">
          <label
            htmlFor="name"
            className="px-4 text-[14px] font-normal text-gray-400"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
          />
        </div>
        <div className="mb-9 flex flex-col">
          <label
            htmlFor="email"
            className="px-4 text-[14px] font-normal text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
          />
        </div>
        <div className="mb-9 flex flex-col">
          <label
            htmlFor="date"
            className="px-4 text-[14px] font-normal text-gray-400"
          >
            Pick a date
          </label>
          <div className="grid w-full grid-cols-3 gap-4 ">
            <input
              type="number"
              name="month"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
              placeholder="MM"
              max={12}
              onChange={handleChange}
              size={2}
              maxLength={2}
            />
            <input
              type="number"
              name="date"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
              placeholder="DD"
            />
            <input
              type="number"
              name="date"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
              placeholder="YYYY"
            />
          </div>
        </div>
        <div className="mb-9 flex flex-col">
          <label
            htmlFor="date"
            className="px-4 text-[14px] font-normal text-gray-400"
          >
            Pick a time
          </label>
          <div className="grid w-full grid-cols-3 gap-4 ">
            <input
              type="number"
              name="hour"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
              placeholder="09"
              max={12}
              onChange={handleChange}
              size={2}
              maxLength={2}
              min={1}
            />
            <input
              type="number"
              name="minute"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
              placeholder="00"
              max={59}
              min={0}
              maxLength={2}
            />
            <select
              name="am/pm"
              className="mt-2  border-0 border-b-[1px] border-primaryCodGray  py-3 px-4 focus:border-primaryCodGray focus:ring-0"
            >
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[1px] border-primaryCodGray px-4 pb-4">
          <button
            type="button"
            className="text-sm font-bold"
            onClick={() => handleCounter("decrement")}
          >
            -
          </button>
          <span className="text-lg font-bold">
            {peopleCounter} {peopleCounter > 1 ? "people" : "person"}
          </span>
          <button
            type="button"
            className="text-sm font-bold"
            onClick={() => handleCounter("increment")}
          >
            +
          </button>
        </div>

        <div className="flex w-full justify-center">
          <button className="mt-[50px] whitespace-nowrap bg-primaryCodGray px-9 py-5 text-center text-[17px] leading-7 text-white">
            MAKE RESERVATION
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
