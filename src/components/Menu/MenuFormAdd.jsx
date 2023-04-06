import { MdDinnerDining } from "react-icons/md";
import Success from "@/components/success";
import Bug from "@/components/bug";
import { useQueryClient, useMutation } from "react-query";
import { addMenu, getMenus } from "@/lib/menuHelper";

export default function MenuFormAdd({ formData, setFormData }) {
  const queryClient = useQueryClient();
  const addMutation = useMutation(addMenu, {
    onSuccess: () => {
      queryClient.prefetchQuery("menus", getMenus);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return console.log("No Menu Data");
    let { desc, price, dateValid, isActive, status } = formData;

    console.log(
      "🚀 ~ file: MenuFormAdd.jsx:19 ~ handleSubmit ~ isActive:",
      isActive
    );

    const model = {
      desc,
      price,
      dateValid: dateValid ?? "",
      isActive: isActive ?? true,
      status: status ?? "Special",
    };

    addMutation.mutate(model);
  };

  if (addMutation.isLoading) return <div>Loading!</div>;
  if (addMutation.isError)
    return <Bug message={addMutation.error.message}></Bug>;
  if (addMutation.isSuccess)
    return <Success message={"Added Successfully"}></Success>;

  return (
    <form className="grid lg:grid-cols-2 w-4/5 gap-4" onSubmit={handleSubmit}>
      <div className="input-type col-span-2">
        <input
          type="text"
          onChange={setFormData}
          name="desc"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Description"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="price"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Price"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          name="dateValid"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Valid From"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="true"
            id="showOnMenu1"
            name="isActive"
            className="form-check-input appearance-none rounded-full h-4 w-4 border 
            border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 
            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
            bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="showOnMenu1" className="inline-block text-gray-800">
            Show on Menu
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="false"
            id="showOnMenu2"
            name="isActive"
            className="form-check-input appearance-none rounded-full h-4 w-4 border 
            border-gray-300  bg-white checked:bg-green-600 checked:border-green-600 
            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
            bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="showOnMenu2" className="inline-block text-gray-800">
            Hide on Menu
          </label>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Special"
            id="isSpecial1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border 
            border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 
            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
            bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="isSpecial1" className="inline-block text-gray-800">
            Special
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Normal"
            id="isSpecial2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border 
            border-gray-300  bg-white checked:bg-green-600 checked:border-green-600 
            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
            bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="isSpecial2" className="inline-block text-gray-800">
            Standard
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center text-md w-2/6 bg-green-700 
        text-white px-4 py-2 border rounded-md hover:bg-gray-50 
        hover:border-green-700 hover:text-green-700"
      >
        Add
        <span className="px-1">
          <MdDinnerDining size={24} />
        </span>
      </button>{" "}
    </form>
  );
}
