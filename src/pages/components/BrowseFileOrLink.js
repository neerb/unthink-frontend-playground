import React, { Component, useState, useRef } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Space, Row, Col } from 'antd'
import readXlsxFile from 'read-excel-file'

export default function BrowseFileOrLink({ childToParent, setIsFileUploaded }) {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    let columnNameList = [];

    //const readXlsxFile = require('read-excel-file/node')

    const changeHandler = (event) => {
        setIsFileUploaded(true);
        childToParent(event.target.files[0]);
        setSelectedFile(event.target.files[0]);


        //console.log(event.target.files[0])

        /*
        readXlsxFile(event.target.files[0]).then((rows) => {

            console.log(rows);

            for (const cname of rows[0]) {
                columnNameList.push(cname);
                console.log(cname);
            }
        })

        for (const cname of columnNameList) {
            //console.log(cname);
        }
        childToParent(event.target.files[0]);
        console.log("Function called, size of list is: " + columnNameList.length)

        setIsFilePicked(true)
        */
    };

    const handleFileInput = (e) => {
        // handle validations
        //onFileSelect(e.target.files[0])


    }

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
            </div>

        </div >
    )
}