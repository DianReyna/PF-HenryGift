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
  const [errors, setErrors] = useState({});

  //BOX
  const [box, setBox] = useState({
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
    setBox({
      ...box,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...box,
        [e.target.name]: e.target.value,
      })
    );
  };
  const dataBox = {
    name: box.boxName,
    detail: box.boxDetail,
    price: box.boxPrice,
    expiration_date: box.boxExpirationDate,
    image: box.boxImage,
    person: box.boxPerson,
    products: box.boxProducts,
    category: box.boxCategories,
  };
  const handleBoxSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(createBox(dataBox));
      toast.success("Save data", {
        position: "top-right",
      });
      setBox({
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
      setStatus(false);
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
    productProvider: [],
  });
  const handleProductChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
      productProvider: [...product.productProvider, e.target.value],
    });
    setErrors(
      validate({
        ...product,
        productProvider: [...product.productProvider, e.target.value],
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
    dispatch(createProduct(dataProduct));
    setProduct({
      productName: "",
      productDescription: "",
      productPrice: "",
      productLocation: "",
      productImage: "",
      productProvider: [],
    });
    toast.success("Save data", {
      position: "top-right",
    });
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
  };

  return {
    errors,
    box,
    product,
    provider,
    dataBox,
    dataProduct,
    dataProvider,
    handleChangeBox,
    handleProductChange,
    handleProviderChange,
    handleBoxSubmit,
    handleProductSubmit,
    handleProviderSubmit,
  };
}
