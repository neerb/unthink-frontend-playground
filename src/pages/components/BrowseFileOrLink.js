import React, { Component } from 'react'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

export default function BrowseFileOrLink() {

    const fileName = ''

    const uploadFunction = (file) => {
        const reader = new FileReader();

        reader.onload = e => {
            console.log(e.target.result);
        };

        console.log("File name: " + file);

        reader.readAsText(file);

        // Prevent upload
        return false;
    }

    return (
        <div>
            <div class="border border-dashed border-gray-500 relative">
                <input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"></input>
                <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <h4>
                        Drop files anywhere to upload
                        <br />or
                    </h4>
                    <Upload accept='.csv, .xlsx, .xml'
                        showUploadList={false}
                        beforeUpload={file => {
                            uploadFunction(file)
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