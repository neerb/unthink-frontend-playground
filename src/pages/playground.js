import * as React from "react"
import { Menu, Dropdown, Icon, Upload } from 'antd'
import { Link } from 'gatsby'
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
    return (

        <div class="screen bg-indigo-400"> {/* Example of full screen coloring with "screen" class (indigo 400)*/}

            <div class="py-12 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0" id="modal">
                <h1 class='text-7xl center-self mt-6 mb-10 place-self-stretch'>
                    😳 playground 😳
                </h1>
                <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"> {/* Show color change here */}

                        { /* Title Card */}
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl">Simple Form Example</h1>

                        { /* First name prompt */}
                        <label for="firstname" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">First Name</label>
                        <input id="firstname" class="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Johnny" />

                        { /* Last name prompt */}
                        <label for="lastname" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Last Name</label>
                        <input id="lastname" class=" mt-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border mb-5" placeholder="Appleseed" />

                        { /* Checkbox Examples */}
                        <label for="checkboxexamples" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Check Boxes</label>
                        <div class="flex grid grid-cols-1 ml-1 mt-1"> { /* Show mb here */}
                            <div class="flex items-center items-start mb-3">
                                <input id="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="checkbox-1" class="text-sm ml-2 font-medium text-gray-900">Checkbox 1</label>
                            </div>

                            <div class="flex items-center items-start mb-3">
                                <input id="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="checkbox-2" class="text-sm ml-2 font-medium text-gray-900">Checkbox 2</label>
                            </div>

                            <div class="flex items-center items-start mb-3">
                                <input id="checkbox-3" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="checkbox-3" class="text-sm ml-2 font-medium text-gray-900">Checkbox 3</label>
                            </div>
                        </div>

                        { /* Radio Button examples (note name is rbuttonex for connecting button choices) */}
                        <label for="radiobuttonexamples" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Radio Buttons</label>
                        <div class="flex grid grid-cols-1 ml-1 mt-1">
                            <div class="flex items-center items-start mb-3">
                                <input id="radio-1" name="rbuttonex" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="radio-1" class="text-sm ml-2 font-medium text-gray-900">Radio Button 1</label>
                            </div>

                            <div class="flex items-center items-start mb-3">
                                <input id="radio-2" name="rbuttonex" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="radio-2" class="text-sm ml-2 font-medium text-gray-900">Radio Button 2</label>
                            </div>

                            <div class="flex items-center items-start mb-3">
                                <input id="radio-3" name="rbuttonex" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"></input>
                                <label for="radio-3" class="text-sm ml-2 font-medium text-gray-900">Radio Button 3</label>
                            </div>
                        </div>

                        { /* Drop down boxes examples */}
                        <label for="dropdownboxes" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Drop Down Boxes (last one uses AntD)</label>
                        <div class="flex grid grid-cols-1 ml-1 mt-1">

                            <select name="selectList" id="selectList" class="mb-3">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>

                            <select name="selectList" id="selectList" class="mb-3">
                                <option value="item 1">Item 1</option>
                                <option value="item 2">Item 2</option>
                                <option value="item 3">Item 3</option>
                            </select>

                            { /* Use of AntD library dropdown component*/}
                            <Dropdown overlay={menu} class="mb-6">

                                <a className="ant-dropdown-link" href="#">
                                    Hover then select <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>

                        { /* File Browser example */}
                        <label for="browsefileexample" class="text-gray-800 text-sm font-bold leading-tight tracking-normal mt-8">File Browser</label>
                        <div class="border border-dashed border-gray-500 relative">
                            <input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"></input>
                            <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                                <h4>
                                    Drop files anywhere to upload
                                    <br />or
                                </h4>
                                <p class="">Select Files</p>
                            </div>
                        </div>


                        { /* Submit and cancel buttons */}
                        <div class="flex items-center justify-start w-full">
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm mt-6">
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