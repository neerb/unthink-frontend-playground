import React, { Component, useState } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Space, Row, Col } from 'antd'
import readXlsxFile from 'read-excel-file'

export default function BrowseFileOrLink() {


    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const isSelected = false;
    //const readXlsxFile = require('read-excel-file/node')

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);

        console.log(event.target.files[0])
        readXlsxFile(event.target.files[0]).then((rows) => {
            for (const r of rows) {
                console.log(r)
            }
        })
        setIsFilePicked(true)
    };

    const handleSubmission = () => {
    };

    return (
        <div>
            <div class='flex px-5 pb-4' >
                <Row>
                    <Space>
                        <Col>
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Upload file</label>
                        </Col>
                        <Col>
                            <Input placeholder="Enter link here..." class='' />
                        </Col>
                        <Col>
                            <Upload>
                                <Button type='primary' shape="round">
                                    <UploadOutlined />Upload
                                </Button>
                            </Upload>
                        </Col>
                    </Space>
                </Row>
            </div>

            <div class="border border-dashed border-gray-500 relative">
                <input onChange={changeHandler} id="inputfilename" type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"></input>

                {isFilePicked ? (
                    <div>
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

                <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <h4>
                        Drop files anywhere to upload
                        <br />or
                    </h4>
                    <Upload accept='.csv, .xlsx, .xml'
                        showUploadList={false}
                        beforeUpload={file => {
                            //uploadFunction(file)
                        }}>
                        <Button type='upload' shape="round">
                            <UploadOutlined />Upload
                        </Button>
                    </Upload>
                </div>
            </div>
        </div >
    )
}