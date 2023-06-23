const BookingForm = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            className="lg:w-[300px] md:w-full border rounded p-2"
          >
            <option value="turkey">Turkey</option>
            <option value="greece">Greece</option>
            <option value="romania">Romania</option>
            <option value="turkmenistan">Turkmenistan</option>
          </select>
          <div className="flex w-full">
            <div className="flex flex-col w-full lg:max-w-[250px] py-2 p-2">
              <label htmlFor="checkOut">Check-Out</label>
              <input
                className="border rounded-md p-2"
                type="date"
                id="checkOut"
              ></input>
            </div>
            <div className="flex flex-col w-full lg:max-w-[250px] py-2 p-2">
              <label htmlFor="checkIn">Check-In</label>
              <input
                className="border rounded-md p-2"
                type="date"
                id="checkIn"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 max-w-[250px]">
          <label>Search</label>
          <button>Find Your Booking</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
