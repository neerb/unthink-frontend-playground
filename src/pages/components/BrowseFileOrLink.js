import React, { Component, useState, useRef } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Input, Space, Row, Col } from 'antd'
import readXlsxFile from 'read-excel-file'

/*
In the "BrowseFileOrLink.js" react component you'll see a method called changeHandler, in that function the readXlsx file 
gets parsed and returns an array of rows to which I take the first row to get all of the column names and store them into 
a list called columnNameList. The next step is gonna be mapping all of those column names from that list to the dropdown boxes
*/

export default function BrowseFileOrLink() {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const columnNameList = useState([]);

    //const readXlsxFile = require('read-excel-file/node')

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);

        console.log(event.target.files[0])

        readXlsxFile(event.target.files[0]).then((rows) => {

            console.log(rows);
            let firstRow = true;

            for (const r of rows) {
                columnNameList.push(r);

                if (firstRow) {
                    for (const cname of r) {
                        columnNameList.push(cname);
                        console.log(cname);
                    }

                var select = document.getElementById("selectCat") 
                for(var i = 3; i < columnNameList.length; i++) //this for loop is for mapping dropdown options
                { //starts at i=3 bc first 4 were not part of columns of xcel
                    var cat = columnNameList[i];
                    var element = document.createElement("option");
                    element.textContent = cat;
                    element.value = cat;
                    select.appendChild(element);
        
                } //end of for loop



                    firstRow = false;
                }
                else {

                }
            }



        })




        setIsFilePicked(true)

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
        
        <div class='flex px-5 pb-2'>
        <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Category</label>
        <select id="selectCat" class="mb-3 mx-4 w-3/4">
            <option value="category">Select</option>
        </select>
        


        
        </div>


        </div >
    )
}