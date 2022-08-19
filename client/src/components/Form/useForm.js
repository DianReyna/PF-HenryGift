import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProvider, createBox } from "../../redux/actions/boxesActions";
import { createProduct } from "../../redux/actions/productsActions";
import { toast } from "react-toastify";

export default function useForm(validate) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  //BOX
  const [input, setInput] = useState({
    boxName: "",
    boxPrice: "",
    boxDetail: "",
    boxExpirationDate: "",
    boxImage: "",
    boxPerson: "",
    boxProducts: [],
    boxCategories: [],
  });

  const handleChangeBox = (e) => {
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

  const handleChangeProd = (e) => {
    setInput({
      ...input,
      boxProducts: [...e.target.value],
    });
  };

  const handleChangeCat = (e) => {
    setInput({
      ...input,
      boxCategories: [...e.target.value],
    });
  };

  const dataBox = {
    name: input.boxName,
    detail: input.boxDetail,
    price: input.boxPrice,
    expiration_date: input.boxExpirationDate,
    image: input.boxImage,
    person: input.boxPerson,
    products: input.boxProducts,
    category: input.boxCategories,
  };
  const handleBoxSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(createBox(dataBox));
      toast.success("Save data", {
        position: "top-right",
      });
      setInput({
        boxName: "",
        boxPrice: "",
        boxDetail: "",
        boxExpirationDate: "",
        boxImage: "",
        boxPerson: "",
        boxProducts: [],
        boxCategories: [],
      });
    } else {
      toast.error("Incorrect data, check againt", {
        position: "top-right",
      });
    }
  };

  //PRODUCT
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productLocation: "",
    productImage: "",
    productProvider: "",
  });
  const handleProductChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...product,
        [e.target.name]: e.target.value,
      })
    );
  };

  const dataProduct = {
    name: product.productName,
    description: product.productDescription,
    price: product.productPrice,
    location: product.productLocation,
    image: product.productImage,
    provider: product.productProvider,
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(createProduct(dataProduct));
      setProduct({
        productName: "",
        productDescription: "",
        productPrice: "",
        productLocation: "",
        productImage: "",
        productProvider: "",
      });
      toast.success("Save data", {
        position: "top-right",
      });
    } else {
      toast.error("Incorrect data, check againt", {
        position: "top-right",
      });
    }
  };

  //PROVIDER
  const [provider, setProvider] = useState({
    providerName: "",
    providerPhone: "",
    providerAddress: "",
    providerEmail: "",
  });
  const handleProviderChange = (e) => {
    setProvider({
      ...provider,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...provider,
        [e.target.name]: e.target.value,
      })
    );
  };
  const dataProvider = {
    name: provider.providerName,
    phone: provider.providerPhone,
    email: provider.providerEmail,
    address: provider.providerAddress,
  };
  const handleProviderSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      dispatch(createProvider(dataProvider));
      setProvider({
        providerName: "",
        providerPhone: "",
        providerAddress: "",
        providerEmail: "",
      });
      toast.success("Save data", {
        position: "top-right",
      });
    } else {
      toast.error("Incorrect data, check againt", {
        position: "top-right",
      });
    }
  };

  return {
    errors,
    input,
    product,
    provider,
    dataBox,
    dataProduct,
    handleChangeBox,
    handleChangeProd,
    handleChangeCat,
    handleProductChange,
    handleProviderChange,
    handleBoxSubmit,
    handleProductSubmit,
    handleProviderSubmit,
  };
}
