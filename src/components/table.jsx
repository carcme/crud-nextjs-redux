import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "@/lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";

export default function Table() {
  useSelector((state) => state);
  const { isLoading, isError, data, error } = useQuery("users", getUsers);
  if (isLoading) return <div>Employee is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
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
        {data.users.map((obj, i) => {
          return <TableRow {...obj} key={i} />;
        })}
      </tbody>
    </table>
  );
}

function TableRow({ _id, name, avatar, email, salary, date, status }) {
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
      <td className="px-4 py-2 flex flex-row items-center float-left">
        <img
          className=" object-cover h-12 w-12 rounded-full"
          src={avatar || "#"}
          alt="avatar"
        />
        <span className="text-center ml-1 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-4 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-700 px-5" : "bg-red-700 px-3"
            } text-white  py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center items-start gap-2">
          <button className="cursor hover:bg-green-700  rounded-full">
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
