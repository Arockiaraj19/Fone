
export const SelectDeviceCompo = ({item,selectedDevicesList,setSelectedDevicesList,setDeviceChoosing} : {item: any,selectedDevicesList:any,setSelectedDevicesList: any,setDeviceChoosing:any}) => {

    const deleteHandler = () => {
        const listIndex = selectedDevicesList.findIndex((elem:any) => elem.id === item.id);
        if(listIndex === 0) {
            setDeviceChoosing("devices")
        }
        if(listIndex === 1) {
            setDeviceChoosing("brands")
        }
        if(listIndex === 2) {
            setDeviceChoosing("brandmodels")
        }
        if(listIndex === 3) {
            setDeviceChoosing("brandmodelsizes")
        }
        if(listIndex === 5) {
            setDeviceChoosing("price_page")
        }
        if(listIndex === 4) {
            setDeviceChoosing("selectCondition")
        }
        setSelectedDevicesList((p:any) => {
            const prevList = [...p];
            // const listIndex = prevList.findIndex(f => f === item); 
                       
            let wantedArr = [];
            for (let index = 0; index < listIndex; index++) {
                wantedArr.push(prevList[index]);                
            }
            return wantedArr;
        })
         
    }

    return <div key={item} className="rounded-md bg-midnightblue-100 flex flex-row items-center justify-start py-0.5 px-[11px] gap-[10px] mx-2 border-[1px] border-solid border-darkslateblue-100">
    <a className="[text-decoration:none] relative tracking-[-0.06em] text-[inherit] inline-block min-w-[47px]">
      {item.name??"Price"}
    </a>
    <img
      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] cursor-pointer"
      loading="lazy"
      alt=""
      src="/frame.svg"
      onClick={deleteHandler}
    />
  </div>
}