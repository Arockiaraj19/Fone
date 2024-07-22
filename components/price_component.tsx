import { fetchDevicePrices } from "../service/device_price.service";
import { useEffect, useState } from "react";

export const PriceComponent = ({
  deviceId,
  brandSizeId,
  setSelectedDevicesList,
  setDeviceChoosing,
}: {
  deviceId: any;
  brandSizeId: any;
  setSelectedDevicesList: any;
  setDeviceChoosing: any;
}) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingBrandModels(brandSizeId: String, deviceId: string) {
      try {
        setLoading(true);
        const result = await fetchDevicePrices(brandSizeId, deviceId);
        setData(result || []);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchingBrandModels(brandSizeId, deviceId);
  }, []);

  return (
    <div className="capitalize w-full flex flex-row flex-wrap items-start justify-center  max-w-full text-5xl font-work-sans mq800:gap-[16px]">
      {data.map((e: any) => (
        <div className="flex-1  items-center justify-center" key={e.id}>
          {`You will get ${e.price} UAE for your device`}
        </div>
      ))}

      <button
        onClick={(e) => {
          setDeviceChoosing("sellnowForm");
          setSelectedDevicesList((p: any) => {
            const alreadyPutSize = p.some((f: any) => data[0].name === f);

            if (alreadyPutSize) {
              return [...p];
            } else {
              return [...p, data[0]];
            }
          });
        }}
        className="cursor-pointer [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-200"
      >
        <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block">
          Continue
        </div>
      </button>
    </div>
  );
};
