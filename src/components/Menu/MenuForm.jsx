import MenuFormUpdate from "./MenuFormUpdate";
import MenuFormAdd from "./MenuFormAdd";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function MenuForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {formId
        ? MenuFormUpdate({ formId, formData, setFormData })
        : MenuFormAdd({ formData, setFormData })}
    </div>
  );
}
