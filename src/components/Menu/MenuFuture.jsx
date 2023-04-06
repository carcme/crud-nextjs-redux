import React from "react";
import { useQuery } from "react-query";
import { getMenus } from "@/lib/menuHelper";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const MenuFuture = () => {
  useSelector((state) => state);
  const { isLoading, isError, data, error } = useQuery("menus", getMenus);
  if (isLoading) return <div>Menus are Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl pt-16 px-2 max-sm:text-lg py-4">
        Das Spezialmenü der nächsten Woche
      </h2>
      <div>
        {/* next week menu */}
        {data.menus.map((item) => {
          const today = new Date().getDate().getDate;

          if (
            item.isActive &&
            item.status === "Special" &&
            item.dateValid !== ""
          ) {
            return <Menu key={item._id} desc={item.desc} price={item.price} />;
          }
        })}
      </div>
    </section>
  );
};

export default MenuFuture;
