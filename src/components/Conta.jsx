const Conta = () => {
  return (
    <div id="contact" className="max-w-[1140px] w-full m-auto p-4 py-16">
      <h2 className="text-center text-gray-700">Send Us messages</h2>
      <p className="text-center text-gray-700">We are waiting for you</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg"
          alt="Bubbles"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone" />
            <input
              className="border m-2 p-2 col-span-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border m-2 p-2  col-span-2"
              cols="30"
              rows="30"
            ></textarea>
            <button className="col-span-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Conta;
