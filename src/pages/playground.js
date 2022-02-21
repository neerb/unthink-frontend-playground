import * as React from "react"
import { Menu, Dropdown, Icon, Upload, Divider } from 'antd'
import { Link } from 'gatsby'
import BrowseFileOrLink from './components/BrowseFileOrLink'
import { Input, Button, Space, Row, Col } from 'antd'
import { UploadOutlined, AppstoreAddOutlined } from '@ant-design/icons'


const { SubMenu } = Menu;


const menu = (
    <Menu>
        <Menu.Item key="0">
            Item 1
        </Menu.Item>
        <Menu.Item key="1">
            Item 2
        </Menu.Item>
        <Menu.Item key="3">Item 3</Menu.Item>
    </Menu>
);


const PlaygroundPage = () => {
    function handleAddIgnoredFieldClick() {

    }

    function handleAddFilteredFieldClick() {

    }


    return (

        <div class="screen bg-amber-400"> {/* Example of full screen coloring with "screen" class (indigo 400)*/}

            <div class="py-12 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0" id="modal">
                <h1 class='text-7xl center-self mt-6 mb-10 place-self-stretch'>
                    😳 playground 😳
                </h1>
                <div role="alert" class="container mx-auto w-3/6 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"> {/* Show color change here */}

                        { /* Title Card */}
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl">Unthink AI Product Upload</h1>

                        { /* Upload file/drag or enter link */}
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

                        <BrowseFileOrLink class=''></BrowseFileOrLink>

                        { /* Category Drop Down */}
                        <div class='flex px-5 pb-2 pt-5' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Category</label>

                            <select name="selectList" id="selectList" class="mb-3 mx-4 w-3/4">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>
                        </div>

                        { /* Subcategories Drop Down */}
                        <div class='flex px-5 pb-2' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Subcategories</label>

                            <select name="selectList" id="selectList" class="mb-3 mx-4 w-3/4">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>
                        </div>

                        { /* Top-level Category Drop Down */}
                        <div class='flex px-5 pb-2' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Top-Level Category</label>

                            <select name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>
                        </div>

                        { /* Price Drop Down */}
                        <div class='flex px-5 pb-2' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Price</label>

                            <select name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>
                        </div>

                        { /* mfr_code Drop Down */}
                        <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">MFR Code</label>

                            <select name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>
                        </div>

                        { /* Ignore fields section */}
                        <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit mr-5">Ignore Fields</label>

                            <Button
                                type="primary"
                                icon={<AppstoreAddOutlined />}
                                onClick={handleAddIgnoredFieldClick()}
                            />
                        </div>

                        { /* Filter fields section */}
                        <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                            <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit mr-5">Filter Fields</label>

                            <Button
                                type="primary"
                                icon={<AppstoreAddOutlined />}
                                onClick={handleAddFilteredFieldClick()}
                            />
                        </div>




                        { /* Submit and cancel buttons */}
                        <div class="flex items-center justify-start w-full">
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-emerald-700 rounded text-white px-8 py-2 text-sm mt-6">
                                Submit
                            </button>
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm mt-6" onclick="modalHandler()">
                                <Link to="/" class="text-neutral 500">
                                    Cancel (returns to index page)
                                </Link>
                            </button>
                        </div>

                        { /* Exit button */}
                        <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center py-12" id="button">
            </div>

            { /* Example alert at bottom of page */}
            <div class="-m-2 text-center">
                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-red-600 rounded-full p-2 shadow text-teal text-sm">
                        <span class="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">Alert!</span>
                        <span class="inline-flex px-2">You have reached the bottom of the page</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlaygroundPage