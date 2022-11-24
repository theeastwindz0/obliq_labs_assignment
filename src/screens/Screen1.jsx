import  { useEffect,useState  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClone, faClose, faEdit, faImage, faList, faSearch, faTable, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png'
const Screen1 = () => {
  const [images,setImages]=useState([]);
  const [preview,setPreview]=useState([]);
  const [gridMode,setGridMode]=useState(true);
  const [sectionOn,setSectionOn]=useState(false);

  useEffect(()=>{
    if(images.length===0)return;
    const objectUrl=URL.createObjectURL(images[images.length-1]);
    setPreview([...preview,{url:objectUrl,date:new Date().toUTCString()}]);
  },[images])
  
  console.log(images)
  const GridBox=({data,index})=>{

    return (
      <div className='h-[233px] border-2 border-[#00bbd8] rounded-lg overflow-hidden '>
      <div className='h-[171px] '>
        <img src={data.url} className='w-[100%] h-[100%]' />
      </div>
      <p className='h-[62px] bg-[#00bbd8] rounded-lg rounded-t-none p-2 text-white'>
        <p className='text-sm'>{images[index].name}</p>
        <div className='flex text-xs font-bold space-x-2'>
          <p className='flex-1'>{images[index].size}</p>
          <p className='bg-white text-black py-[2px] rounded-full px-3'>{images[index].type}</p>
        <FontAwesomeIcon   icon={faImage} color='white' size='xl'/>

        </div>
      </p>
    </div>
    )
  }

  const ListView=({data,index})=>{
    return (
      <div className='grid grid-cols-6 p-1 text-xs'>
      <div className='col-span-3 space-x-2 flex items-center'>
        <input type='checkbox' className='p-2' />
      <FontAwesomeIcon   icon={faImage} color='black' size='lg'/>
      <div className='w-[96px] h-[64px] overflow-hidden'>
      <img src={data.url} className='w-[100%] h-[100%]' />

      </div>
      <p className='text-[#55c7e3] font-bold'>{images[index].name}</p>
      </div>
   
    <div className='col-span-1 flex items-center'>
      {images[index].type}
    </div>

    <div className='col-span-1 flex items-center'>
      {data.date}
    </div>

    <div className='col-span-1 flex items-center'>
      Jerry
    </div>
    </div>
    )
  }

  const imageUploader=(e)=>{
    setImages([...images,e.target.files[0]])

  }
  return (
    <div className=' grid grid-cols-2 text-sm' >
        <div className='col-span-1 p-8 mt-20 space-y-4' >
            <p>- Build and image library tool that shows up when pressing a button.</p>
            <p>- Where a user can upload multiple images from their computer that shows the file format,file size and file name.</p>
            <p>- User can select multiple images to perform a bulk action.</p>
            <p>- Search file via their name.</p>
            <p>- The user can also change view of the file in grid or list view.</p>
            <div className='ml-28 py-20' >
            <button onClick={()=>setSectionOn(true)}  className='bg-[#00bbd8] w-[160px] h-[36px] text-white '>Button</button>
            </div>
            <p>- Please make sure the UI ,colors,shadows,borders and icons are exactly as given.</p>

        </div>
        {sectionOn &&
        <div className='col-span-1  border-l-2'>
          {/* Header */}
            <div className='flex p-2 shadow-md items-center'>
                <div className='w-10 h-10 p-[2px] border-2 border-black rounded-full overflow-hidden '>
                  <img src={logo} className='w-[100%] h-[100%] '/>
                </div>
                <p className='text-xl pl-4 font-bold flex-1 '>Media Library</p>
                <div className='h-8 w-8 rounded-full flex justify-center items-center bg-[#eaf0f6] hover:cursor-pointer'>
                  <FontAwesomeIcon onClick={()=>setSectionOn(false)} icon={faClose} size='lg' color='black' />
                </div>
            </div>

            {/* Buttons */}

            <div className='p-2 border-b-2 border-black flex items-center space-x-2'>
              {/* <button className='text-sm border-2 border-[#dfe3eb] py-2 px-4 rounded-lg'>
                <FontAwesomeIcon className='pr-2' icon={faUpload} color='black' size='lg'/>
                Upload
              </button> */}


              <div className="text-sm border-2 border-[#dfe3eb] py-2 px-4 rounded-lg">
              <label htmlFor="profile_pic">
              <FontAwesomeIcon className='pr-2' icon={faUpload} color='black' size='lg'/>
                Upload

              </label>
              <input
                id="profile_pic"
                hidden
                type="file"
                onChange={(e) => {imageUploader(e)}}
                accept="image/png, image/jpeg"
              ></input>
            </div>
              <FontAwesomeIcon className='p-2 border-2 border-[#dfe3eb] hover:cursor-pointer rounded-md' icon={faUpload} color='#7c98b6' size='sm'/>
              <FontAwesomeIcon className='p-2 border-2 border-[#dfe3eb] hover:cursor-pointer rounded-md' icon={faEdit} color='#7c98b6' size='sm'/>
              <FontAwesomeIcon className='p-2 border-2 border-[#dfe3eb] hover:cursor-pointer rounded-md' icon={faClone} color='#7c98b6' size='sm'/>
              <FontAwesomeIcon className='p-2 border-2 border-[#dfe3eb] hover:cursor-pointer rounded-md' icon={faTrash} color='#7c98b6' size='sm'/>
              <div className='bg-[#eff3f6] p-2 rounded-full '>
                <FontAwesomeIcon  className='' icon={faSearch} color='#05bcd8' size='sm'/>
               <input type='text'  placeholder='Search...' className='bg-[#eff3f6] text-sm pl-2 w-28'>
              </input>
              </div>

              <div className='bg-[#eff3f6] p-2 rounded-md'>
                <FontAwesomeIcon   icon={faCalendar} color='#05bcd8' size='sm'/>
               <select defaultValue='Creation Date' className='bg-[#eff3f6] text-xs pl-2 w-28 '>
                <option value='Creation Date' disabled>Creation Date</option>
              </select>
              </div>

              <div className='border-2  border-[#dfe3eb] hover:cursor-pointer rounded-lg flex items-center'>
              <FontAwesomeIcon onClick={()=>setGridMode(true)} className={`p-2 ${gridMode ? 'bg-[#eaf0f6]' :''}  rounded-md`} icon={faTable} color='#7c98b6' size='sm'/>
              <FontAwesomeIcon onClick={()=>setGridMode(false)} className={`p-2 ${!gridMode ? 'bg-[#eaf0f6]' :''}  rounded-md`} icon={faList} color='#7c98b6' size='sm'/>

              </div>
            </div>

            {/* Filter Section */}
            <div className='flex space-x-2 p-2'>

            <div className='bg-[#eff3f6] p-1 rounded-md'>
                <FontAwesomeIcon   icon={faCalendar} color='#05bcd8' size='lg'/>
               <select defaultValue='Creation Date' className='bg-[#eff3f6] text-xs pl-2 w-28'>
                <option value='Creation Date' disabled>Creation Date</option>
              </select>
              </div>


              <div className='bg-[#eff3f6] p-1 rounded-md'>
                <FontAwesomeIcon   icon={faCalendar} color='#05bcd8' size='sm'/>
               <select defaultValue='Creation Date' className='bg-[#eff3f6] text-xs pl-2 w-28'>
                <option value='Creation Date' disabled>Creation Date</option>
              </select>
              </div>

              <p className='bg-[#eaf0f6] flex justify-center items-center px-4 rounded-full text-sm'>Flower</p>
              <p className='bg-[#eaf0f6] flex justify-center items-center px-4 rounded-full text-sm'>Fruit</p>
              <p className='bg-[#eaf0f6] flex justify-center items-center px-4 rounded-full text-sm'>Flower</p>
              <p className='bg-[#eaf0f6] flex justify-center items-center px-4 rounded-full text-sm'>Fruit</p>


              <div className='bg-[#eff3f6] p-1 rounded-md text-sm flex space-x-2 justify-center items-center'>
                <FontAwesomeIcon    icon={faCalendar} color='#05bcd8' size='sm'/>
                <p>Filters</p>
              </div>
            </div>

            {/* Content */}

            {/* Grid View */}
            {gridMode &&
            <div className='grid grid-cols-3 p-2  gap-8  '>
              {preview.map((item,i)=>
              <GridBox key={i} data={item} index={i} />
              )}
            </div>}


            {/* List View */}
            {!gridMode && preview.length &&
            <div className='p-2 m-2 border-[1px] border-black'>
              <div className='grid grid-cols-6 '>
                <p className='col-span-3'>File Name</p>
                <p className='col-span-1'>Size and Ratio</p>
                <p className='col-span-1'>Uploaded At</p>
                <p className='col-span-1'>Author</p>
              </div>
              
              <div className='divide-y-2 space-y-2'>
              {preview.map((item,i)=>
              <ListView key={i} data={item} index={i} />
              )}
              </div>
            </div>
}

              {preview.length===0 && <p className='text-center'>No Images uploaded yet.</p>}




        </div>
        }

    </div>
  )
}

export default Screen1