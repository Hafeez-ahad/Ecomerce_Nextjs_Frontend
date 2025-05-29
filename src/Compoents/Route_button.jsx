import React from 'react'
import { useRouter } from 'next/navigation'

const Route_button = ({ text, path, bgColor }) => {
  const router = useRouter();

  return (
    <div>
      <p
        onClick={() => router.push(path)}
        className={`m-auto mt-[15px] text-[10px] w-fit text-white px-[8px] py-[2px] rounded-[5px] cursor-pointer bg-${bgColor}`}
      >
        {text}
      </p>
    </div>
  )
}

export default Route_button
