export const AboutHome = async () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 my-[80px] relative">
      <span className="w-[2px] h-[45px] bg-gradient-to-r from-gray-500 to-white-500 rounded-full absolute top-[-50px]"></span>
      <p className="text-4xl font-righteous text-center text-white">
        Sobre mim
      </p>
      <h1 className="text-lg font-montserrat font-bold text-gray-500 text-center max-w-[500px] mx-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias
        placeat, voluptatum aliquam commodi ipsum optio ex ducimus sunt iusto,
        dolorem deserunt magni tempore atque distinctio totam repellat
        repellendus. Nesciunt?
      </h1>
      <span className="w-[2px] h-[45px] bg-gradient-to-r from-gray-500 to-white-500  rounded-full absolute bottom-[-55px]"></span>
    </div>
  );
};
