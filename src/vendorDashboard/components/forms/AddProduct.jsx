import React from 'react'
import styled from 'styled-components'
import { Button, Input ,Checkbox} from 'antd';
import { CgAddR } from 'react-icons/cg';

const AddProduct = () => {
  return (
    <Wrapper>
            <div className='add-firm p-5'>
                <h1 className='text-blue-600 text-3xl flex items-center'>Add Product <span className='text-[17px] text-teal-500 mx-3 mt-2'><CgAddR/></span></h1>
                <hr className='w-[35px]' />
                <div className="form border-2 border-orange-600 rounded-2xl h-[90%] mt-4 flex justify-center items-start">
                    <form className='flex flex-col gap-3 mt-4'>
                        <Input type="text" placeholder='Product Name' className='border-black' />
                        <Input type="text" placeholder='Price' className='border-black' />
                        {/* <Input type="text" placeholder='Category' className='border-black' /> */}
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Category </h1>
                            <span className="flex gap-7">
                                <span>Veg <Checkbox /></span>
                                <span>Non-Veg <Checkbox /></span>
                            </span>
                        </span>
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Best Seller </h1>
                            <span className="flex gap-7">
                                <span>Yes <Checkbox /></span>
                                <span>No <Checkbox /></span>
                            </span>
                        </span>
                        {/* <Input type="text" placeholder='Bestseller' className='border-black' /> */}
                        <Input.TextArea placeholder='Description' className='border-black outline-none' />
                        <Input type="file" className='border-black' />
                        <Button className='rounded-none bg-orange-500 text-white'>Add</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    .add-firm {
        height: 100%;
    }
    .add-firm hr {
        height: 5px;
        background-color: #f88b55;
        border-radius: 3px;
    }
`;

export default AddProduct