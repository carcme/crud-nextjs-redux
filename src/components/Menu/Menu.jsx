const Menu = ({ desc, price }) => {
  return (
    <div className="grid grid-flow-col items-center gap-4 py-2 tracking-widest max-sm:text-xs  hover:font-medium">
      <p className="flex justify-start w-[600px] max-md:w-[300px] max-sm:w-[200px] px-4">
        {desc}
      </p>
      <p className="text-end">{price} </p>
    </div>
  );
};

export default Menu;
