const Gallery = () => {
  return (
    <div id="gellery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        {" "}
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
