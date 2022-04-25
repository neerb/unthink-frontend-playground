import React, { Component, useState, useRef } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Space, Row, Col } from 'antd'
import readXlsxFile from 'read-excel-file'

export default function BrowseFileOrLink({ childToParent }) {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [disableUpload, setDisableUpload] = useState(false);
    const [uploadLink, setUploadLink] = useState();

    const changeHandler = (event) => {
        if (event.target.files[0]) {
            setIsFilePicked(true);
            setSelectedFile(event.target.files[0]);
            childToParent(event.target.files[0]);
        }
        else {
            setIsFilePicked(true);
            setSelectedFile(null);
        }
    };

    const inputAdded = (event) => {

        if (event.target.value) {
            setDisableUpload(true);
            setUploadLink(event.target.value);
        }
        else {
            setDisableUpload(false);
            setUploadLink(null);
        }
    }

    const submitUploadLink = (event) => {
        childToParent(uploadLink);
    }

    return (
        <div>
            <div class='flex px-5 pb-4 place-content-center' >
                <Row>
                    <Space>

                        <Col>
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Upload file (.csv only)</label>
                        </Col>
                        <Col>
                            <Input disabled={isFilePicked} placeholder="Enter link here..." onChange={inputAdded} class="border-solid border-2" ></Input>
                        </Col>
                        <Col>
                            <button onClick={submitUploadLink} disabled={!disableUpload && !isFilePicked} class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-200 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                                Use Link
                            </button>
                        </Col>
                    </Space>
                </Row>

            </div>
            <div class="text-center pb-4">
                <input type="file" onChange={changeHandler} class="" accept=".csv, .xlsx" disabled={disableUpload}></input>
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
