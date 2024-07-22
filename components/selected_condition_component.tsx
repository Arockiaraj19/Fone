import { fetchDeviceCondition } from "../service/device_condition.service";
import { useEffect, useState } from "react";

export const SelectConditionComponent = ({
  setDeviceId,
  setSelectedDevicesList,
  setDeviceChoosing
} : {
  setDeviceId:any,
  setSelectedDevicesList:any,
  setDeviceChoosing:any
}) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingBrandModels() {
      try {
        setLoading(true);
        const result = await  fetchDeviceCondition();
        setData(result || []);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchingBrandModels();
  }, []);

  return (
    <div className="capitalize w-full flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full text-5xl font-work-sans mq800:gap-[16px]">
      {data.map((e:any) => (
        <div
          className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-center py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum cursor-pointer"
          key={e.id}
          onClick={() => {  
            setDeviceId(e.id);
            setDeviceChoosing('price_page');          
            setSelectedDevicesList((p:any) => {
                const alreadyPutSize = p.some((f:any) => e.name === f);
                
                if (alreadyPutSize) {
                    
                    
                    return [...p];
                } else {
                    return [...p, e];
                }
            });
          }}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
};
