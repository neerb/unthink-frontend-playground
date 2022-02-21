import React, { Component } from 'react'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

export default function BrowseFileOrLink() {
    return (
        <div>
            <div class="border border-dashed border-gray-500 relative">
                <input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"></input>
                <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <h4>
                        Drop files anywhere to upload
                        <br />or
                    </h4>
                    <Upload>
                        <Button type='primary' shape="round">
                            <UploadOutlined />Upload
                        </Button>
                    </Upload>
                </div>
            </div>
        </div >
    )
}