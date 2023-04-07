const Menu = ({ desc, price }) => {
  return (
    <div
      className="grid grid-flow-col items-center gap-4 py-2
     tracking-widest hover:font-bold hover:text-slate-100 max-sm:text-xs"
    >
      <p className="flex w-[600px] justify-start px-4 max-md:w-[300px] max-sm:w-[200px]">
        {desc}
      </p>
      <p className="text-end">{price} </p>
    </div>
  );
};

export default Menu;
