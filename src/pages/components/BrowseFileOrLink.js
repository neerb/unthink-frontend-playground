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
        <div class="">
            <div class='flex px-5 pb-4' >
                <Row>
                    <Space>

                        <Col>
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Upload file</label>
                        </Col>
                        <Col>
                            <Input placeholder="Enter link here..." onChange={inputAdded} />
                        </Col>

                        <Col>
                            <input type="file" onChange={changeHandler}></input>
                            {/*<button onClick={e => fileInput.current && fileInput.current.click()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
                            
                            <Upload accept='.csv, .xlsx, .xml'
                                showUploadList={false}
                                fileList={fileList}
                                onChange={changeHandler}>
                                <Button type='upload' shape="round">
                                    <UploadOutlined />Upload
                                </Button>
                            </Upload>
    */}
                        </Col>


                    </Space>
                </Row>
            </div>
            <div class="flex justify-center">
                {isFilePicked ? (
                    <div class="text-center">
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
            </div>

        </div >
    )
}
