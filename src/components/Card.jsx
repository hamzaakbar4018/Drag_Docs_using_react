import React from 'react'
import { motion } from "framer-motion"
import { FaFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
function Card({data,reference}) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-700 rounded-[45px] px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full '>
          <div className='flex items-center justify-between py-5 mb-2 px-8'>
           <h5>{data.filesize}</h5>
            <span className='w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose/> : <MdOutlineFileDownload size='.7em' color='#fff' />}
            </span>

          </div>
          {(
            data.tag.isOpen ? (
              <div className={`tag w-full p-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
            <h3 className='text-sm font-semibold '>
            {data.tag.tagTitle}
            </h3>
          </div>
            ):null
          )
          }
        </div>
      </motion.div>
    </>
  )
}

export default Card