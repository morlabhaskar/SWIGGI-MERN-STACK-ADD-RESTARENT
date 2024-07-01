import React from 'react'
import styled from 'styled-components'
import { SiGoogletasks } from "react-icons/si";
import { IoPersonCircleOutline, IoPeopleOutline } from "react-icons/io5";
import { CiShoppingBasket, CiShop } from "react-icons/ci";
import { FcShop } from "react-icons/fc";

const SideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar w-[100%] max-w-[230px] h-[710px] flex flex-col justify-between">
        <div className="add flex flex-col items-center gap-2 pt-4">
            <span className='profile flex items-center gap-2 w-[200px] text-xl hover:bg-slate-300 py-2 rounded-md'><IoPeopleOutline className='text-2xl' />Profile</span>
            <span className='add-firm flex items-center gap-2 w-[200px] text-xl hover:bg-slate-300 py-2 rounded-md'><CiShop className='text-2xl' />Add Firm</span>
            <span className='add-product flex items-center gap-2 w-[200px] text-xl hover:bg-slate-300 py-2 rounded-md'><CiShoppingBasket className='text-2xl' />Add Product</span>
            <span className='all-products flex items-center gap-2 w-[200px] text-xl hover:bg-slate-300 py-2 rounded-md'><FcShop className='text-2xl' />All Products</span>
        </div>
        <div className="pro flex flex-col items-center mb-4">
          <span><IoPersonCircleOutline className='text-5xl text-slate-700' /></span>
          <span className='text-lg text-slate-700'>Bhaskar</span>
        </div>

      </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
    .sidebar {
      box-shadow: 5px 0px 3px -3px #00000030;
    }
    .add span {
      padding-left: 35px;
    
      
    }

`;

export default SideBar