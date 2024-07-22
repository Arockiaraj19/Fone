import { useState, useEffect } from "react";
import { fetchCountries } from "../service/countries.service";
import { addOrders } from "../service/order.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
export const SellNowForm = ({
  selectedDevicesList,
}: {
  selectedDevicesList: any;
}) => {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetchCountries();
        setData(result ?? []);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function
    return () => {};
  }, []);

  const formik = useFormik({
    validateOnBlur: false,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()

        .required("Please enter a valid name")
        .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
      phone: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
        .required("Please enter a valid phone number"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a valid email"),
      address: Yup.string().required("Please enter a valid address"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        console.log(selectedDevicesList);
        if (emirates.length == 0) {
          toast.error("Please select valid emirates");
          return;
        }
        const selectedData = data.filter((e: any) => e.name == emirates)[0];
        console.log(selectedData);

        await addOrders({
          ...values,
          device: selectedDevicesList[0],
          brand: selectedDevicesList[1],
          brandModel: selectedDevicesList[2],
          size: selectedDevicesList[3],
          condition: selectedDevicesList[4],
          price: selectedDevicesList[5],
          country: selectedData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          status:"pending",
        });
        toast.success("Device submitted successfully");
        
        resetForm();
   router.reload();
      } catch (error: any) {}

      //
    },
  });

  const [emirates, setEmirates] = useState("");
  return (
    <div className="mx-auto">
      <Toaster  toastOptions={{
    className: 'text-sm',
   
  }} position="top-right" reverseOrder={false} />
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col items-center gap-[14.5px] max-w-full"
      >
        <div className="w-[430px] rounded-sm box-border flex flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <input
            {...formik.getFieldProps("name")}
            type="text"
            placeholder="Enter Your Name..."
            className="w-full [border:none] [outline:none] font-medium font-work-sans text-sm  h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
          />
        </div>
        {formik.errors.name ? (
          <div className="w-full text-sm text-start text-red">
            {formik.errors.name}
          </div>
        ) : null}
        <div className="w-[430px] rounded-sm box-border flex flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <input
            {...formik.getFieldProps("email")}
            type="email"
            placeholder="Enter Your Email..."
            className="w-full [border:none] [outline:none] font-medium font-work-sans text-sm  h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
          />
        </div>
        {formik.errors.email ? (
          <div className="w-full text-sm text-start text-red">
            {formik.errors.email}
          </div>
        ) : null}
        <div className="w-[430px] rounded-sm box-border flex flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <input
            {...formik.getFieldProps("phone")}
            type="text"
            placeholder="Enter Your Mobile NO..."
            className="w-full [border:none] [outline:none] font-medium font-work-sans text-sm  h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
          />
        </div>
        {formik.errors.phone ? (
          <div className="w-full text-sm text-start text-red">
            {formik.errors.phone}
          </div>
        ) : null}
        <div className="w-[430px] rounded-sm box-border flex flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <select
            id="emirates"
            value={emirates}
            onChange={(e) => {
              setEmirates(e.target.value);
            }}
            className="w-full [border:none] [outline:none] font-medium font-work-sans text-sm  h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
          >
            <option value="" disabled selected>
              Select Emirates
            </option>
            {data
              .map((e: any) => e.name)
              .map((e: any) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </div>
        <div className="w-[430px] rounded-sm box-border flex flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <input
            {...formik.getFieldProps("address")}
            placeholder="Enter The Pick-up Address"
            className="[border:none] [outline:none] font-medium font-work-sans text-sm  relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0 w-full resize-none "
          />
        </div>
        {formik.errors.address ? (
          <div className="w-full text-sm text-start text-red">
            {formik.errors.address}
          </div>
        ) : null}
        <div className="w-[430px]">
          <button
            type="submit"
            className="w-full cursor-pointer p-4 text-lg text-white bg-new-1f rounded-xl hover:bg-darkslateblue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
