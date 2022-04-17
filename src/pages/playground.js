import React, { Component, useState, useRef, useEffect } from 'react'
import { Menu, Dropdown, Icon, Upload, Divider } from 'antd'
import { Link } from 'gatsby'
import BrowseFileOrLink from './components/BrowseFileOrLink'
import { Input, Button, Space, Row, Col } from 'antd'
import { UploadOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import readXlsxFile from 'read-excel-file'
import { render } from 'react-dom'
import reactDom from 'react-dom'
import Papa from 'papaparse'
const axios = require('axios');
var csv = require('jquery-csv');


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

const defaultState = {

}




function PlaygroundPage() {

    const [columnNameArray, setColumnNameArray] = useState([]);
    const [uploadFile, setUploadFile] = useState();
    //const [uploadFileURL, setUploadFileURL] = useState();
    const [isFileUploaded, setIsFileUploaded] = useState();
    const [count, setCount] = useState();
    const [categoryField, setCategoryField] = useState();
    const [subcategoriesField, setSubCategoriesField] = useState();
    const [topLevelCategoryField, setTopLevelCategoryField] = useState();
    const [priceField, setPriceField] = useState();
    const [mfrCodeField, setMfrCodeField] = useState();
    const [ignoreFieldsList, setIgnoreFieldsList] = useState();
    const [filterFieldsList, setFilterFieldsList] = useState();

    const [fileFormData, setFileFormData] = useState();
    const [mapFormData, setMapFormData] = useState();

    const [categorySeparator, setCategorySeparator] = useState();
    const [subcategorySeparator, setSubcategorySeparator] = useState();
    const [topLevelSeparator, setTopLevelSeparator] = useState();
    const [sharedSeparator, setSharedSeparator] = useState();

    const [catCounter, setCatCounter] = useState(0); //for category index counter
    const [topLevelCounter, setTopLevelCounter] = useState(0); //for top level index counter

    const [isDisabled, setIsDisabled] = useState(true) //prop is initially disabled
    const [textColor, setTextColor] = useState("gray w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2");

    //const [Separators, setSeparators] = useState(false); //used for submit button to show separators

    //const [isURLfile, setIsURLfile] = useState();

    // used to hold new state
    var categoryFieldVar;
    var subcategoryFieldVar;
    var topLevelFieldVar;

    const parseFile = (file) => {
        if (uploadFile.name.endsWith('.xlsx')) {
            console.log("Currently looking at " + uploadFile.name); //this.state.uploadFile.name will show uploaded file name. testing
            console.log("input file is xlsx");
            readXlsxFile(uploadFile).then((rows) => {

                console.log(rows);
                console.log("size row: " + rows[0].length);
                let tempArray = [];

                for (const cname of rows[0]) {
                    tempArray.push(cname);
                    console.log(cname);
                }
                setColumnNameArray([...tempArray]);
                console.log("size list: " + columnNameArray.length);

                /*
                let columnMapCount = 0;
                let rowCount = 1;
                setFileFormData(new FormData());
                while (rows[rowCount]) {
                    for (const cell of rows[rowCount]) {
                        fileFormData.append(columnNameArray[columnMapCount], cell);
                        columnMapCount++;
                    }
                    columnMapCount = 0;
                    rowCount++;
                }
                for (var value of fileFormData.values()) {
                    console.log(value);
                }
                */
            }) //end of readXlsxFile
        } //end of if xlsx
        else if (uploadFile.name.endsWith('.csv')) {
            console.log("Currently looking at " + uploadFile.name); //uploadFile.name will show uploaded file name. testing
            console.log("input file is csv");


            Papa.parse(uploadFile, {
                header: false, //header needs to be false or data is objects rather than array
                complete: function (row) {
                    console.log("Parsing complete:", row.data);
                    console.log("row size " + row.data[0].length);
                    console.log("row[0] is " + row.data[0]); //first row
                    let tempArray = [];

                    for (const cname of row.data[0]) {
                        tempArray.push(cname);
                        console.log(cname);
                    } //end of for loop

                    setColumnNameArray([...tempArray]);
                    console.log("size list: " + columnNameArray.length);

                } //end of complete
            }) //end of papa parse


        } //end of if csv 


        for (const cname of columnNameArray) {
            console.log(cname);
        }
    }


    React.useEffect(() => {
        console.log(uploadFile);


        if (!(uploadFile instanceof File)) {
            // Upload link logic here
            console.log(uploadFile);

            axios.get('https://support.staffbase.com/hc/en-us/article_attachments/360009159392/access-code.csv')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    //var result = $.csv.toObjects(response);
                    //parseFile(result);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
        else if (isFileUploaded && uploadFile) {
            parseFile(uploadFile);
            /*
            if (uploadFile.name.endsWith('.xlsx')) {
                console.log("Currently looking at " + uploadFile.name); //this.state.uploadFile.name will show uploaded file name. testing
                console.log("input file is xlsx");
                readXlsxFile(uploadFile).then((rows) => {

                    console.log(rows);
                    console.log("size row: " + rows[0].length);
                    let tempArray = [];

                    for (const cname of rows[0]) {
                        tempArray.push(cname);
                        console.log(cname);
                    }
                    setColumnNameArray([...tempArray]);
                    console.log("size list: " + columnNameArray.length);

                    /*
                    let columnMapCount = 0;
                    let rowCount = 1;
                    setFileFormData(new FormData());
                    while (rows[rowCount]) {
                        for (const cell of rows[rowCount]) {
                            fileFormData.append(columnNameArray[columnMapCount], cell);
                            columnMapCount++;
                        }
                        columnMapCount = 0;
                        rowCount++;
                    }
                    for (var value of fileFormData.values()) {
                        console.log(value);
                    }
                    
                }) //end of readXlsxFile
            } //end of if xlsx
            else if (uploadFile.name.endsWith('.csv')) {
                console.log("Currently looking at " + uploadFile.name); //uploadFile.name will show uploaded file name. testing
                console.log("input file is csv");


                Papa.parse(uploadFile, {
                    header: false, //header needs to be false or data is objects rather than array
                    complete: function (row) {
                        console.log("Parsing complete:", row.data);
                        console.log("row size " + row.data[0].length);
                        console.log("row[0] is " + row.data[0]); //first row
                        let tempArray = [];

                        for (const cname of row.data[0]) {
                            tempArray.push(cname);
                            console.log(cname);
                        } //end of for loop

                        setColumnNameArray([...tempArray]);
                        console.log("size list: " + columnNameArray.length);

                    } //end of complete
                }) //end of papa parse


            } //end of if csv 
                */

            for (const cname of columnNameArray) {
                console.log(cname);
            }

        } //end of big if statement

    }, [uploadFile]); //end of useEffect

    const nameToColumnNumberConvert = (name) => {
        return columnNameArray.indexOf(name);
    }

    const childToParent = (childData) => {
        setUploadFile(childData);
        setIsFileUploaded(true);


        //setIsFileUploaded(false);


        /*
        columnNameArray = childData;
        console.log("break");
        console.log("size: " + columnNameArray.length)
        for (const cname of columnNameArray) {
            console.log(cname);
        }
        */

    }

    const submitButton = () => {
        /*
            Form Data Creation Here
        */
        var submitFormData = new FormData();

        submitFormData.append("category", nameToColumnNumberConvert(categoryField));
        submitFormData.append("subcategories", nameToColumnNumberConvert(subcategoriesField));
        submitFormData.append("top-level-category", nameToColumnNumberConvert(topLevelCategoryField));
        submitFormData.append("price", nameToColumnNumberConvert(priceField));
        submitFormData.append("MFRCode", nameToColumnNumberConvert(mfrCodeField));

        submitFormData.append("categorySeparator", categorySeparator);
        submitFormData.append("subcategorySeparator", subcategorySeparator);
        submitFormData.append("top-levelcategorySeparator", topLevelSeparator);
        submitFormData.append("sharedcategorySeparator", sharedSeparator);

        submitFormData.append("categoryCounter", catCounter);
        submitFormData.append("topLevelCategoryCounter", topLevelCounter);


        setMapFormData(submitFormData);

        // Also need for ignore and filter fields
        //mapFormData.append("category", );
        //mapFormData.append("category", );

        for (var value of submitFormData.values()) {
            console.log(value);
        }

        /*
                //test if category, subcategory, or top level field matches
                if(categoryField == subcategoriesField && subcategoriesField == topLevelCategoryField ) //all fields the same
                {
                    console.log("All fields are the same");
                    //make dropdown with 3 options
                }
                else
                    console.log("Not all same");
                    //no dropdown needed
        */

        /*
            API Requests here
        */
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8000");
        request.send(submitFormData);
        console.log(request.response);
    } //end of submit button


    React.useEffect(() => {
        //console.log("categoryField is " + categoryField)
        categoryFieldVar = categoryField;
        //console.log("categoryFieldVar is " + categoryFieldVar)
        //console.log("subcategoriesField is " + subcategoriesField)
        subcategoryFieldVar = subcategoriesField;
        //console.log("subcategoryFieldVar is " + subcategoryFieldVar)
        //console.log("subcategoriesField is " + topLevelCategoryField)
        topLevelFieldVar = topLevelCategoryField;
        //console.log("subcategoryFieldVar is " + topLevelFieldVar)
        isThreeToOne();
    }, [categoryField, subcategoriesField, topLevelCategoryField]); //will run when categoryField changes

    function isThreeToOne() {

        //test if category, subcategory, or top level field matches
        // if(categoryField == subcategoriesField && subcategoriesField == topLevelCategoryField ) //all fields the same
        if (categoryFieldVar == subcategoryFieldVar && subcategoryFieldVar == topLevelFieldVar && typeof categoryFieldVar != 'undefined') {
            console.log("All fields are the same");
            //console.log("Category Field Var is " + categoryFieldVar);
            //console.log("Subcategory Field Var is " + subcategoryFieldVar);
            //console.log("Top Level Category Field Var is " + topLevelFieldVar);   
            setIsDisabled(false); //enable fields
            console.log(isDisabled);
            setTextColor("w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2");
        }
        else {
            console.log("Not all same");
            //console.log("Category Field Var is " + categoryFieldVar);
            //console.log("Subcategory Field Var is " + subcategoryFieldVar);
            //console.log("Top Level Category Field Var is " + topLevelFieldVar);   
            setIsDisabled(true); //disable fields
            //document.getElementById("SharedSep").value = "";
            //setSharedSeparator(null);
            setTopLevelCounter(0); //reset index to 0
            setCatCounter(0); //reset index to 0
            setSharedSeparator("");
            setTextColor("w-1/4 text-gray-300 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2"); //light gray text
        }

    }

    const onCategoryFieldChange = (e) => {
        if (e) {
            setCategoryField(e.target.value);
            //console.log("e.target.value Cat is " + e.target.value);
        }
    }

    const onSubcategoriesFieldChange = (e) => {
        if (e) {
            setSubCategoriesField(e.target.value);
            //console.log("e.target.value Sub is " + e.target.value);
        }
    }

    const onTopLevelCategoryFieldChange = (e) => {
        if (e) {
            setTopLevelCategoryField(e.target.value);
            //console.log("e.target.value TLC is " + e.target.value);
        }
    }

    const onPriceFieldChange = (e) => {
        if (e)
            setPriceField(e.target.value);
    }

    const onMFRCodeFieldChange = (e) => {
        if (e)
            setMfrCodeField(e.target.value);
    }

    const onIgnoreFieldsChange = (e) => {
        if (e) {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }

            setIgnoreFieldsList(value);
        }
    }

    const onFilterFieldsChange = (e) => {
        if (e) {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }

            setFilterFieldsList(value);
        }
    }

    function categorySeparatorFieldChange(val) {
        setCategorySeparator(val.target.value) //get value of textbox
    }

    function subcategorySeparatorFieldChange(val) {
        setSubcategorySeparator(val.target.value)
    }

    function topLevelSeparatorFieldChange(val) {
        setTopLevelSeparator(val.target.value)
    }

    function sharedSeparatorFieldChange(val) {
        setSharedSeparator(val.target.value)
    }

    const incrementCatCounter = (e) => {
        setCatCounter(catCounter + 1);
    }

    const decrementCatCounter = (e) => {
        //if counter > 0 --> decrement
        if (catCounter > 0) {
            setCatCounter(catCounter - 1);
        }
        else
            console.log("Index cannot be below 0");
    }

    const resetCatCounter = (e) => {
        setCatCounter(0);
    }

    const incrementTopLevelCounter = (e) => {
        setTopLevelCounter(topLevelCounter + 1);

    }

    const decrementTopLevelCounter = (e) => {
        //if counter > 0 --> decrement
        if (topLevelCounter > 0) {
            setTopLevelCounter(topLevelCounter - 1);
        }
        else
            console.log("Index cannot be below 0");
    }

    const resetTopLevelCounter = (e) => {
        setTopLevelCounter(0);
    }



    return (

        <div class="screen bg-slate-700"> {/* Example of full screen coloring with "screen" class (indigo 400)*/}

            <div class="py-12 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" class="container mx-auto w-4/6 max-w-2xl">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 content-center"> {/* Show color change here */}

                        { /* Title Card */}
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl text-center">Unthink AI Product Upload</h1>

                        { /* Upload file/drag or enter link */}
                        <BrowseFileOrLink childToParent={childToParent} ></BrowseFileOrLink>

                        <div class="grid cols-2">
                            { /* Category Drop Down */}
                            <div class='flex px-5 pb-2 pt-5 justify-between' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Category</label>

                                <select defaultValue="" onChange={onCategoryFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-6/12 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            {/*Category Separator*/}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2 ">Category Separator</label>
                                <input type="text" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={categorySeparatorFieldChange}></input>
                            </div>

                            { /* Subcategories Drop Down */}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="dropdownboxes" className="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Subcategories</label>

                                <select defaultValue="" onChange={onSubcategoriesFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-6/12 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            {/*Subcategory Separator*/}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2">Subcategory Separator</label>
                                <input type="text" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={subcategorySeparatorFieldChange}></input>
                            </div>

                            { /* Top-level Category Drop Down */}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="dropdownboxes" className="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Top-Level Category</label>

                                <select defaultValue="" onChange={onTopLevelCategoryFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-6/12 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option> 
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            {/*Top-level Separator*/}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2">Top-Level Category Separator</label>
                                <input type="text" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={topLevelSeparatorFieldChange}></input>
                            </div>

                            {/*Pop up separator if at least one category field matches*/}
                            <div id="shareSep" class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class={textColor}>Shared Separator</label>
                                <input type="text" id="sharedSep" disabled={isDisabled} placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={sharedSeparatorFieldChange} value={sharedSeparator}></input>
                            </div>

                            {/*Pop up for category counter index if at least one category field matches*/}
                            <div id="catMatch" class='flex px-5 pb-2 justify-between' >
                                <label class={textColor}>Category Index</label>
                                {/*put counter box here */}
                                <div class="flex w-2/5">
                                    <Button disabled={isDisabled} onClick={decrementCatCounter}>-</Button>
                                    <h3 for="counter display" class="pl-2 pr-2 text-gray-800 text-lg font-bold" >{catCounter}</h3>
                                    <Space>
                                        <Button disabled={isDisabled} onClick={incrementCatCounter}>+</Button>
                                        <Button disabled={isDisabled} onClick={resetCatCounter}>Reset</Button>
                                    </Space>
                                </div>
                            </div>

                            {/*Pop up for top level category counter index if at least one category field matches*/}
                            <div id="topMatch" class='flex px-5 pb-2 justify-between' >
                                <label class={textColor}>Top-Level Category Index</label>
                                {/*put counter box here */}
                                <div class="flex w-2/5">
                                    <Button disabled={isDisabled} onClick={decrementTopLevelCounter}>-</Button>
                                    <h3 for="counter display" class="pl-2 pr-2 text-gray-800 text-lg font-bold" >{topLevelCounter}</h3>
                                    <Space>
                                        <Button disabled={isDisabled} onClick={incrementTopLevelCounter}>+</Button>
                                        <Button disabled={isDisabled} onClick={resetTopLevelCounter}>Reset</Button>
                                    </Space>
                                </div>
                            </div>

                            { /* Price Drop Down */}
                            <div class='flex px-5 pb-2' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Price</label>

                                <select defaultValue="" onChange={onPriceFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* mfr_code Drop Down */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">MFR Code</label>

                                <select defaultValue="" onChange={onMFRCodeFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>


                            { /* Ignore fields section */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit mr-5">Ignore Fields</label>

                                <div class="relative flex w-full">
                                    <label class="w-full">

                                        <select onChange={onIgnoreFieldsChange} class="w-full block mt-1 form-multiselect border-solid border-2" multiple="true" disabled={!isFileUploaded ? true : null}>
                                            {columnNameArray.map((cname) => {
                                                return <option key={cname} value={cname}>{cname}</option>
                                            })}
                                        </select>
                                    </label>
                                </div>

                                {/*
                            <Button
                                type="primary"
                                icon={<AppstoreAddOutlined />}
                                onClick={handleAddFilteredFieldClick()}
                            />
                            */}
                            </div>

                            { /* Filter fields section */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit mr-5">Filter Fields</label>

                                <div class="relative flex w-full">
                                    <label class="w-full">

                                        <select onChange={onFilterFieldsChange} class="block w-full mt-1 form-multiselect border-solid border-2" multiple="true" disabled={!isFileUploaded ? true : null}>
                                            {columnNameArray.map((cname) => {
                                                return <option key={cname} value={cname}>{cname}</option>
                                            })}
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>


                        <h1 class="text-gray-800 font-bold tracking-normal leading-tight mb-4 text-lg text-center">Optional fields:</h1>




                        { /* Submit and cancel buttons */}
                        <div class="flex items-center justify-center w-full">
                            <button onClick={submitButton} class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-emerald-700 rounded text-white px-8 py-2 text-sm mt-6">
                                Submit
                            </button>
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm mt-6" onclick="modalHandler()">
                                <Link to="/" class="text-neutral 500">
                                    Back
                                </Link>
                            </button>
                        </div>

                        <div class="mt-10 grid cols-1 items-center justify-start w-full">
                            <h1>Mappings</h1>
                            <p class="ml-4">
                                Category: <b>{categoryField}</b>
                            </p>
                            <p class="ml-4">
                                Category Separator: <b>{categorySeparator}</b>
                            </p>
                            <p class="ml-4">
                                Subcategories: <b>{subcategoriesField}</b>
                            </p>
                            <p class="ml-4">
                                Subategory Separator: <b>{subcategorySeparator}</b>
                            </p>
                            <p class="ml-4">
                                Top-Level Category: <b>{topLevelCategoryField}</b>
                            </p>
                            <p class="ml-4">
                                Top-Level Category Separator: <b>{topLevelSeparator}</b>
                            </p>
                            <p class="ml-4">
                                Shared Separator: <b>{sharedSeparator}</b>
                            </p>
                            <p class="ml-4">
                                Category Index: <b>{catCounter}</b>
                            </p>
                            <p class="ml-4">
                                Top-Level Category Index: <b>{topLevelCounter}</b>
                            </p>
                            <p class="ml-4">
                                Price: <b>{priceField}</b>
                            </p>
                            <p class="ml-4">
                                MFR Code: <b>{mfrCodeField}</b>
                            </p>
                            <p class="ml-4">
                                Ignore Fields: <b>{ignoreFieldsList}</b>
                            </p>
                            <p class="ml-4">
                                Filter Fields: <b>{filterFieldsList}</b>
                            </p>
                        </div>
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

} //end of Playground

export default PlaygroundPage
