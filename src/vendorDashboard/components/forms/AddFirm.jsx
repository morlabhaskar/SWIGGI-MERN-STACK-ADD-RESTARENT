// import { Form } from 'antd'
import { Button, Input, Checkbox } from 'antd';
import React, { useState } from 'react'
import { CgAddR } from 'react-icons/cg';
import styled from 'styled-components'

const AddFirm = () => {
    const [firmName,setFirmName] = useState("");
    const [area,setArea] = useState("");
    const [category,setCategory] = useState([]);
    const [region,setRegion] = useState([]);
    const [offer,setOffer] = useState("");
    const [file,setFile] = useState(null);

    const handleFirmSubmit = async(e) => {
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <Wrapper>
            <div className='add-firm p-5'>
                <h1 className='text-blue-600 text-3xl flex items-center'>Add Firm <span className='text-[17px] text-teal-500 mx-3 mt-2'><CgAddR/></span></h1>
                <hr className='w-[35px]' />
                <div className="form border-2 border-orange-600 rounded-2xl h-[90%] mt-4 flex justify-center items-start">
                    <form className='flex flex-col gap-3 mt-4'>
                        <Input type="text" placeholder='Firm Name' className='border-black' name="firmName" />
                        <Input type="text" placeholder='Area' className='border-black' name="area" />
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Category : </h1>
                            <span className="flex gap-7">
                                <span>Veg <Checkbox checked="" /></span>
                                <span>Non-Veg <Checkbox checked="" /></span>
                            </span>
                        </span>
                        <span>
                            <h1 className="text-fuchsia-900 py-2">Region :</h1>
                            <span className="flex gap-7">
                                <span>South-Indian <Checkbox checked="" /></span>
                                <span>North-Indian <Checkbox checked="" /></span>
                            </span>
                            <span className="flex gap-7 my-2">
                                <span>Chineese <Checkbox checked="" /></span>
                                <span>Bakery <Checkbox checked="" /></span>
                            </span>
                        </span>
                        <Input type="text" placeholder='Offer' className='border-black' name='offer' />
                        <Input type="file" className='border-black' />
                        <Button htmlType='submit' className='rounded-none bg-orange-500 text-white'>Add</Button>
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