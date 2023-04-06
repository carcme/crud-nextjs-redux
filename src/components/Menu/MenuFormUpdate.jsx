import { MdDinnerDining } from "react-icons/md";
import Success from "@/components/success";
import Bug from "@/components/bug";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMenu, getMenus, updateMenu } from "@/lib/menuHelper";

export default function MenuFormUpdate({ formId, formData, setFormData }) {
  const { isLoading, isError, data, error } = useQuery(["menu", formId], () =>
    getMenu(formId)
  );

  const queryClient = useQueryClient();

  const updateMutation = useMutation((newData) => updateMenu(formId, newData), {
    onSuccess: () => {
      //queryClient.invalidateQueries();
      queryClient.prefetchQuery("menus", getMenus);
    },
  });

  if (isLoading) return <div>Loading...!</div>;
  if (isError) return <div>Error</div>;

  const { desc, price, dateValid, isActive, status } = data.menu;

  if (updateMutation.isSuccess)
    return <Success message={"Updated Successfully"}></Success>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/5 gap-4" onSubmit={handleSubmit}>
      <div className="input-type col-span-2">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={desc}
          name="desc"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Description"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={price}
          name="price"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Price"
        />
      </div>

      <div className="input-type">
        <label htmlFor="dateValid" className="inline-block tet-gray-800 mr-3">
          Valid From
        </label>
        <input
          type="date"
          onChange={setFormData}
          defaultValue={dateValid}
          name="dateValid"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Valid From"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            id="showOnMenu1"
            defaultChecked={isActive === true}
            onChange={setFormData}
            value="true"
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
            defaultChecked={isActive === false}
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
            defaultChecked={status == "Special"}
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
            defaultChecked={status !== "Special"}
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
            Normal
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="flex justify-center text-md w-2/6 bg-orange-600 text-white px-4 
      py-2 border rounded-md hover:bg-gray-50 hover:border-orange-600 
      hover:text-orange-600"
      >
        Update
        <span className="px-1">
          <MdDinnerDining size={24} />
        </span>
      </button>
    </form>
  );
}
