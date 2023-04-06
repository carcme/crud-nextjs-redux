import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useQueryClient } from "react-query";
import { BiX, BiCheck, BiHide } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MenuTable from "@/components/Menu/MenuTable";
import MenuForm from "@/components/Menu/MenuForm";
import { deleteMenu, getMenus } from "@/lib/menuHelper";
import { toggleChangeAction, deleteAction } from "@/redux/reducer";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryclient = useQueryClient();

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  const deletehandler = async () => {
    if (deleteId) {
      await deleteMenu(deleteId);
      await queryclient.prefetchQuery("menus", getMenus);
      dispatch(deleteAction(null));
    }
  };

  const canclehandler = async () => {
    console.log("cancel");
    dispatch(deleteAction(null));
  };

  return (
    <SignedIn>
      <section>
        <Head>
          <title>Menu Management</title>
          <meta
            name="description"
            content="Lindenhof menu management dashboard"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-5">
          <div className="container mx-auto flex items-center flex-row w-full">
            <div className="w-full">
              <h1 className="text-xl md:text-5xl text-center text-slate-500 font-bold py-10">
                Menu Management
              </h1>
            </div>
            <div className="justify-end">
              <UserButton />
            </div>
          </div>
          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
              {!visible ? (
                <button
                  className="flex bg-slate-700 text-white px-6 py-2 border 
                rounded-md hover:bg-gray-50 hover:border-slate-700 hover:text-slate-700"
                  onClick={handler}
                >
                  Add Menu Item
                  <span className="px-1">
                    <MdOutlineRestaurantMenu size={23} />
                  </span>
                </button>
              ) : (
                <button
                  className="flex bg-slate-700 text-white px-16 py-2 border 
              rounded-md hover:bg-gray-50 hover:border-slate-700 hover:text-slate-700"
                  onClick={handler}
                >
                  Hide
                  <span className="px-1">
                    <BiHide size={23} />
                  </span>
                </button>
              )}
            </div>
            {deleteId ? (
              DeleteComponent({ deletehandler, canclehandler })
            ) : (
              <></>
            )}
          </div>

          {/* collapsable form */}
          <div className="container mx-auto py-5">
            {visible ? <MenuForm /> : <></>}
          </div>
          {/* table */}
          <div className="container mx-auto">
            <MenuTable />
          </div>
        </main>
      </section>
    </SignedIn>
  );
}

function DeleteComponent({ deletehandler, canclehandler }) {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        onClick={deletehandler}
        className="flex bg-red-700 text-white px-4 py-2 border rounded-md
        hover:bg-red-600 hover:border-red-600 hover:text-gray-50"
      >
        Yes
        <span className="px-1">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={canclehandler}
        className="flex bg-green-700 text-white px-4 py-2 border rounded-md 
        hover:bg-green-600 hover:border-green-600 hover:text-gray-50"
      >
        No
        <span className="px-1">
          <BiX color="white" size={25} />
        </span>
      </button>
    </div>
  );
}
