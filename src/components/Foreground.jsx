import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
    {   desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize:".9mb",
        close:true,
        tag:{isOpen:true,
             tagTitle:"Download Now...",
             tagColor:"green"   
            }
    },
    {   desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize:".9mb",
        close:false,
        tag:{isOpen:false,
             tagTitle:"Download Now...",
             tagColor:"green"   
            }
    },
    {   desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize:".9mb",
        close:true,
        tag:{isOpen:true,
             tagTitle:"Download Now...",
             tagColor:"green"   
            }
    }
    ];
    return (
        <>
        <div ref={ref} className='fixed p-5 h-full flex gap-5 flex-wrap w-full top-0 left-0 z-[3]'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
        </div>
        </>
    )
}

export default Foreground
