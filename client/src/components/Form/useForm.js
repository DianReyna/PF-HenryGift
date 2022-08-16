import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createProvider,
  createProduct,
  createBox,
} from "../../redux/actions/boxesActions";
import { toast } from "react-toastify";

export default function useForm(validate) {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    //PROVIDER
    providerName: "",
    providerPhone: "",
    providerAddress: "",
    providerEmail: "",
    //PRODUCT
    productName: "",
    productDescription: "",
    productPrice: "",
    productLocation: "",
    productImage: "",
    productProvider: [],
    //BOX
    boxName: "",
    boxPrice: "",
    boxDetail: "",
    boxRanking: "",
    boxExpirationDate: "",
    boxImage: "",
    boxPerson: "",
    boxProducts: [],
    boxCategories: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleProviderSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createProvider({
        name: input.providerName,
        phone: input.providerPhone,
        email: input.providerEmail,
        address: input.providerAddress,
      })
    );
    cleanInputs();
    toast.success("Save data", {
      position: "top-right",
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createProduct({
        name: input.productName,
        description: input.productDescription,
        price: input.productPrice,
        location: input.productLocation,
        image: input.productImage,
        provider: input.productProvider,
      })
    );
    cleanInputs();
    toast.success("Save data", {
      position: "top-right",
    });
  };

  const handleBoxSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createBox({
        name: input.boxName,
        detail: input.boxDetail,
        price: input.boxPrice,
        ranking: input.boxRanking,
        expiration_date: input.boxExpirationDate,
        image: input.boxImage,
        person: input.boxPerson,
        products: input.boxProducts,
        category: input.boxCategories,
      })
    );
    cleanInputs();
    toast.success("Save data", {
      position: "top-right",
    });
  };

  const handleProductChange = (e) => {
    console.log(input.productProvider);
    // if (input.productProvider.includes(e.target.value)) {
    //   return alert("You have already selected that product");
    // } else {
    setInput({
      ...input,
      productProvider: [...input.productProvider, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        productProvider: [...input.productProvider, e.target.value],
      })
    );
    // }
  };

  const handleDelete = (dietDelete) => {
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== dietDelete),
    });
    setErrors(
      validate({
        ...input,
        diets: input.diets.filter((diet) => diet !== dietDelete),
      })
    );
  };

  const cleanInputs = () => {
    setInput({
      //PROVIDER
      providerName: "",
      providerPhone: "",
      providerAddress: "",
      providerEmail: "",
      //PRODUCT
      productName: "",
      productDescription: "",
      productPrice: "",
      productLocation: "",
      productImage: "",
      productProvider: [],
      //BOX
      boxName: "",
      boxPrice: "",
      boxDetail: "",
      boxRanking: "",
      boxExpirationDate: "",
      boxImage: "",
      boxPerson: "",
      boxProducts: [],
      boxCategories: [],
    });
  };

  return {
    handleChange,
    input,
    setInput,
    handleProviderSubmit,
    handleDelete,
    errors,
    cleanInputs,
    handleProductSubmit,
    handleProductChange,
    handleBoxSubmit,
  };
}
