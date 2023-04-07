import React from "react";
import { useQuery } from "react-query";
import { getMenus } from "@/lib/menuHelper";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const MenuSpecials = () => {
  useSelector((state) => state);
  const { isLoading, isError, data, error } = useQuery("menus", getMenus);
  if (isLoading) return <div>Menus are Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <section className="flex flex-col items-center">
      <h2 className="px-2 text-center text-3xl max-sm:text-lg">
        Wochenend-Spezialmenü
      </h2>
      <h3 className="px-2 pb-4 pt-1 text-center text-lg max-sm:text-sm">
        zwischen 12:00 und 15:00 Uhr
      </h3>

      <div className=" justify-center">
        {/* The Specials menu */}
        {data.menus.map((item) => {
          if (
            item.isActive &&
            item.status === "Special" &&
            item.dateValid === ""
          ) {
            return <Menu key={item._id} desc={item.desc} price={item.price} />;
          }
        })}
      </div>
    </section>
  );
};

export default MenuSpecials;
