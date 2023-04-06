import { BiEdit, BiTrashAlt, BiShow, BiHide } from "react-icons/bi";
import { getMenus } from "@/lib/menuHelper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";

export default function MenuTable() {
  useSelector((state) => state);
  const { isLoading, isError, data, error } = useQuery("menus", getMenus);
  if (isLoading) return <div>Menus are Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Menu</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Price</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Valid From</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Show on Menu</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.menus.map((obj, i) => {
          return <TableRow {...obj} key={i} />;
        })}
      </tbody>
    </table>
  );
}

function TableRow({ _id, desc, price, isActive, dateValid, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    } else {
      dispatch(toggleChangeAction());
    }
  };

  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-4 py-2 w-56 text-left">{desc || "Unknown"}</td>
      <td className="px-4 py-2">
        <span>{price || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{dateValid || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 ">
        <div className="flex justify-center">
          {isActive ? (
            <BiShow className="fill-slate-700" size={24} />
          ) : (
            <BiHide className="fill-slate-400" size={24} />
          )}
        </div>
        {/* <span
          className={`${
            isActive ? "bg-slate-300 px-3" : "bg-stone-200 px-4"
          } text-slate-500  py-1 rounded-full`}
        >
          <span>{isActive ? "Show" : "Hide"}</span>
        </span> */}
      </td>
      <td className="px-4 py-2">
        <button>
          <span
            className={`${
              status == "Special" ? "bg-slate-300 px-3" : "bg-stone-200 px-3"
            } text-slate-500 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center items-start gap-2">
          <button className="cursor hover:bg-green-700 rounded-full">
            <BiEdit
              className="hover:fill-slate-50 p-[6px]"
              size={35}
              color={"rgb(22, 163, 74)"}
              onClick={onUpdate}
            />
          </button>
          <button
            className="cursor hover:bg-red-700  rounded-full"
            onClick={onDelete}
          >
            <BiTrashAlt
              className="hover:fill-slate-50 p-[6px]"
              size={35}
              color={"#b91c1c"}
            />
          </button>
        </div>
      </td>
    </tr>
  );
}
