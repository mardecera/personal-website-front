import React from 'react'

const MenuIcon = ({ fill, width }) => {
   return (
      <svg
         height={`${width ?? 20}px`}
         width={`${width ?? 20}px`}
         id="Layer_1"
         version="1.1"
         viewBox={`0 0 ${width ?? 20} ${width ?? 20}"`}
         xmlns="http://www.w3.org/2000/svg"
         fill={fill ?? 'black'}
      >
         <g id="Layer_2">
            <path d="M16,7a2,2,0,1,1,2-2A2,2,0,0,1,16,7Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z" />
            <path d="M16,18a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z" />
            <path d="M16,29a2,2,0,1,1,2-2A2,2,0,0,1,16,29Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z" />
         </g>
      </svg>
   )
}

export default MenuIcon
