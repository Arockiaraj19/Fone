import { useState, useEffect } from "react";
import { fetchDeviceTypes } from "../service/device_type.service";
import { SelectedBrands } from "./selected-brands";
import { SelectedBrandModel } from "./selected-brand-model";
import { SelectedBrandModelsize } from "./selected-brand-modelsize";
import { SellNowForm } from "./sell-now-form";
import { SelectConditionComponent } from "./selected_condition_component";
import { PriceComponent } from "./price_component";

export const SelectDevice = ({
  isHome = false,
  setSelectedDevicesList,
  selectedDevicesList,
  deviceChoosing,
  setDeviceChoosing,
}: {
  isHome: any;
  setSelectedDevicesList: any;
  selectedDevicesList: any;
  deviceChoosing: any;
  setDeviceChoosing: any;
}) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brandId, setBrandId] = useState("");
  const [brandModelId, setBrandModelId] = useState("");
  const [sizeId, setSizeId] = useState("");
const [brandSizeId,setbrandSizeId]=useState(null);
const [deviceId,setDeviceId]=useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetchDeviceTypes();
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

  return (
    <>
      <div className="capitalize w-full flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full text-5xl font-work-sans mq800:gap-[16px]">
        {deviceChoosing === "devices" &&
          data.map((e: any, index: any) => {
            return (
              <div
                onClick={() => {
                  setSelectedDevicesList((p: any) => [...p, e]);
                  setBrandId(e.id);
                  setDeviceChoosing("brands");
                }}
                key={index}
                className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-center py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum cursor-pointer"
              >
                <img
                  className="w-[180px] h-[180px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src={`/${e.name.toString().trim().toLowerCase()}.png`}
                />
                <h3 className="m-0 self-stretch relative text-center text-inherit leading-[22px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px]">
                  {isHome && "Sell"} {e.name}
                </h3>
              </div>
            );
          })}
      </div>
      {deviceChoosing === "brands" && (
        <SelectedBrands
          typeId={brandId}
          setDeviceChoosing={setDeviceChoosing}
          setSelectedDevicesList={setSelectedDevicesList}
          setBrandModelId={setBrandModelId}
        />
      )}
      {deviceChoosing === "brandmodels" && (
        <SelectedBrandModel
          brandmodelId={brandModelId}
          setDeviceChoosing={setDeviceChoosing}
          setSelectedDevicesList={setSelectedDevicesList}
          setSizeId={setSizeId}
        />
      )}
      {deviceChoosing === "brandmodelsizes" && (
        <SelectedBrandModelsize
          sizeId={sizeId}
          setDeviceChoosing={setDeviceChoosing}
          setSelectedDevicesList={setSelectedDevicesList}
          setbrandSizeId={setbrandSizeId}
        />
      )}
      {deviceChoosing === "sellnowForm" && (
        <SellNowForm selectedDevicesList={selectedDevicesList} />
      )}
      {deviceChoosing === "selectCondition" && (
        <SelectConditionComponent
        setDeviceId={setDeviceId}
          setDeviceChoosing={setDeviceChoosing}
          setSelectedDevicesList={setSelectedDevicesList}
        />
      )}
      {deviceChoosing === "price_page" && (
        <PriceComponent
        deviceId={deviceId}
        brandSizeId={brandSizeId}
          setDeviceChoosing={setDeviceChoosing}
          setSelectedDevicesList={setSelectedDevicesList}
        />
      )}
    </>
  );
};
