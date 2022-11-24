import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Screen2 = () => {
  const [totalTabs, setTotalTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
//   const innerWidth=window.innerWidth()*.75;

  const events = [
     {id:1,active:false},
     {id:2,active:false},
     {id:3,active:false},
     {id:4,active:false},
     {id:5,active:false},
     {id:6,active:false},
     {id:7,active:false},
     {id:8,active:false},
     {id:9,active:false},
     {id:10,active:false},
     {id:11,active:false},
     {id:12,active:false},
     {id:13,active:false},
     {id:14,active:false},
     {id:15,active:false},
     {id:16,active:false},
     {id:18,active:false},
     {id:19,active:false},
     {id:20,active:false},

  ];

  const removeTab=(id)=>{
    console.log('test')
    let data=[];
    data=totalTabs;
    data=data.filter((item)=>item!==id)
    setTotalTabs(data);

  }

  const Tab = ({ id }) => {
    return (
      <div className={`translate-y-[16px] bg-white p-2 relative shadow-md hover:cursor-pointer text-xs  ${currentTab===id && 'bg-blue-200'}`} onClick={()=>setCurrentTab(id)}>
        Event Type {id}
        <div className="bg-black w-4 h-4 flex justify-center items-center absolute top-[-8px] right-[-4px] rounded-full" onClick={()=>removeTab(id)}>
          <FontAwesomeIcon
            icon={faClose}
            size="sm"
            className=""
            color="white"
          />
        </div>
      </div>
    );
  };

  const Entry = ({ id }) => {
    return (
      <div className="bg-blue-50 flex  space-x-4 p-1">
        <div className="">
          <p>timestamp {id}</p>
          <p>15151234124124{id}</p>
        </div>
        <div className="">
          <p>_raw {id}</p>
          <p>
            {`${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}${id}$`}
          </p>
        </div>
      </div>
    );
  };

  const EventData = ({ id }) => {
    return (
      <>
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
        <Entry id={id} />
      </>
    );
  };

  const addEvent=(item)=>{
    let data=totalTabs;
    for(let i in data)if(data[i]===item.id)return;
    setTotalTabs([...totalTabs, item.id]);
    setCurrentTab(item.id);
  }
  return (
    <>
      {/* Header */}
      <div className="grid grid-cols-12 p-2 bg-gray-400">
        <div className="col-span-3 font-bold relative">Event Viewer</div>
        <div className="col-span-9 flex gap-1">
          {totalTabs.map((item) => (
            <Tab key={item} id={item} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 p-2 ">
        <div className="col-span-3 font-bold   border-2 border-black overflow-scroll ">
          <div className="h-[100vh] divide-y-2 divide-black">
            {events.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                    addEvent(item)
                }}
                className="p-4 hover:cursor-pointer"
              >
                Event Type {item.id}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-9  border-2  border-black m-4 text-xs overflow-scroll">
          <div className="h-[100vh] divide-y-2 divide-black">
           {totalTabs.length>0 ? <EventData id={currentTab} />:
           <p className="text-center">No Entries yet , Click Left Tab Button</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen2;
