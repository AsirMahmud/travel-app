const Hero = () => {
  return (
    <div className="w-full h-[90vh] object-cover ">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80"
      ></img>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] max-w-[600px] w-full text-white p-4">
          <h1 className="font-bold text-5xl">FIND GREATEST STONES</h1>
          <h2 className="pr-4 pt-2 text-4xl italic">We are waiting for you</h2>
          <p>
            Traveling is fun and all—but trying to dress like a local wherever
            you touch down is even more fun. What would a trip to the Italian
            seaside be without a headscarf and a flowing skirt, for example?
            There’s an art to nailing the fashion mood of whatever destination
            you’re visiting, and someone who nailed this approach today is none
            other than Selena Gomez. The singer and Rare Beauty founder was
            spotted in Paris dressing like a true French girl. Or rather, an
            American’s idea of French girl chic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
