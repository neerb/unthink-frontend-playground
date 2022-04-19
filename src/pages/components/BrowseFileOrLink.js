import React, { Component, useState, useRef } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Space, Row, Col } from 'antd'
import readXlsxFile from 'read-excel-file'

export default function BrowseFileOrLink({ childToParent }) {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    //const readXlsxFile = require('read-excel-file/node')

    const changeHandler = (event) => {
        if (event.target.files[0]) {
            setIsFilePicked(true);
            setSelectedFile(event.target.files[0]);
            childToParent(event.target.files[0]);
        }
    };

    const inputAdded = (event) => {
        childToParent(event.target.value);
    }

    return (
        <div>
            <div class='flex px-5 pb-4 place-content-center' >
                <Row>
                    <Space>

                        <Col>
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Upload file</label>
                        </Col>
                        <Col>
                            <Input placeholder="Enter link here..." onChange={inputAdded} class="border-solid border-2" />
                        </Col>

                    </Space>
                </Row>

            </div>
            <div class="text-center pb-4">
                <input type="file" onChange={changeHandler} class=""></input>
            </div>
            <div class="flex justify-center border-solid border-2 p-5">
                {isFilePicked ? (
                    <div class="text-center">
                        <p>Filename: <b>{selectedFile.name}</b></p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p class="">Select a file to show details</p>
                )}
            </div>

        </div >
    )
}
