// import { Form } from 'antd'
import { Button, Input, Checkbox } from 'antd';
import React from 'react'
import styled from 'styled-components'

const AddFirm = () => {
    return (
        <Wrapper>
            <div className='add-firm p-5'>
                <h1 className='text-blue-600 text-3xl'>Add Firm</h1>
                <hr className='w-[35px]' />
                <div className="form border-2 border-orange-600 rounded-2xl h-[90%] mt-4 flex justify-center items-start">
                    <form className='flex flex-col gap-3 mt-4'>
                        <Input type="text" placeholder='Firm Name' className='border-black' />
                        <Input type="text" placeholder='Area' className='border-black' />
                        {/* <Input type="text" placeholder='Category' className='border-black' /> */}
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Category </h1>
                            <span className="flex gap-7">
                                <span>Veg <Checkbox /></span>
                                <span>Non-Veg <Checkbox /></span>
                            </span>
                        </span>
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Region </h1>
                            <span className="flex gap-7">
                                <span>South-Indian <Checkbox /></span>
                                <span>North-Indian <Checkbox /></span>
                            </span>
                            <span className="flex gap-7 my-2">
                                <span>Chineese <Checkbox /></span>
                                <span>Bakery <Checkbox /></span>
                            </span>
                        </span>
                        {/* <Input type="text" placeholder='Region' className='border-black' /> */}
                        <Input type="text" placeholder='Offer' className='border-black' />
                        <Input type="file" placeholder='Offer' className='border-black' />
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

export default AddFirm