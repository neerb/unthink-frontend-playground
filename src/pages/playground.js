import React, { Component, useState, useRef, useEffect } from 'react'
import { Menu, Dropdown, Icon, Upload, Divider, Popover } from 'antd'
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
    const [nameField, setNameField] = useState();
    const [descField, setDescField] = useState();
    const [listPriceField, setListPriceField] = useState();
    const [productTypeField, setProductTypeField] = useState();
    const [imageField, setImageField] = useState();
    const [urlField, setUrlField] = useState();
    const [currencyField, setCurrencyField] = useState();
    const [brandField, setBrandField] = useState();
    const [productBrandField, setProductBrandField] = useState();
    const [availabilityField, setAvailabilityField] = useState();
    const [genderField, setGenderField] = useState();
    const [ignoreFieldsList, setIgnoreFieldsList] = useState();
    const [fileFormData, setFileFormData] = useState();
    const [mapFormData, setMapFormData] = useState();

    const [categorySeparator, setCategorySeparator] = useState();
    const [subcategorySeparator, setSubcategorySeparator] = useState();
    const [topLevelSeparator, setTopLevelSeparator] = useState();
    const [sharedSeparator, setSharedSeparator] = useState();
    const [productTypeSeparator, setProductTypeSeparator] = useState();

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

    const debug = true

    const submitButton = () => {
        /*
            Form Data Creation Here
        */
        var submitFormData = new FormData();

        /*
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
        */

        if (debug) {
            submitFormData.append("file_raw", uploadFile);
            submitFormData.append("name_col", 14);
            submitFormData.append("descr_col", 4);
            submitFormData.append("price_col", 16);
            submitFormData.append("list_price_col", 12);
            submitFormData.append("top_level_category_col", 6);
            submitFormData.append("category_col", 6);
            submitFormData.append("subcategories_col", 6);
            submitFormData.append("top_level_category_sep", ">");
            submitFormData.append("category_sep", ">");
            submitFormData.append("subcategories_sep", ">");
            submitFormData.append("product_type_col", 17);
            submitFormData.append("product_type_sep", ">");
            submitFormData.append("image_col", 8);
            submitFormData.append("url_col", 18);
            submitFormData.append("mfr_code_col", 7);
            submitFormData.append("currency_col", 3);
            submitFormData.append("brand_col", 2);
            submitFormData.append("product_brand_col", 2);
            submitFormData.append("avlble_col", 1);
            submitFormData.append("gender_col", 5);
            submitFormData.append("ignored_cols", "0,9");
            submitFormData.append("top_level_category_index", 0);
            submitFormData.append("category_index", 1);
        }
        else {
            // Required
            submitFormData.append("file_raw", uploadFile);
            submitFormData.append("name_col", 14);
            submitFormData.append("descr_col", 4);
            //submitFormData.append("price_col", 16);
            submitFormData.append("list_price_col", 12);
            //submitFormData.append("top_level_category_col", 6);
            //submitFormData.append("category_col", 6);
            //submitFormData.append("subcategories_col", 6);
            //submitFormData.append("top_level_category_sep", ">");
            //submitFormData.append("category_sep", ">");
            //submitFormData.append("subcategories_sep", ">");
            submitFormData.append("product_type_col", 17);
            submitFormData.append("product_type_sep", ">");
            submitFormData.append("image_col", 8);
            submitFormData.append("url_col", 18);
            //submitFormData.append("mfr_code_col", 7);
            submitFormData.append("currency_col", 3);
            submitFormData.append("brand_col", 2);
            submitFormData.append("product_brand_col", 2);
            submitFormData.append("avlble_col", 1);
            submitFormData.append("gender_col", 5);
            //submitFormData.append("ignored_cols", "0,9");
            //submitFormData.append("top_level_category_index", 0);
            //submitFormData.append("category_index", 1);

            // Optionals

        }


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
        request.open("POST", "http://localhost:8000/api/upload/");
        request.onreadystatechange = function (evt) {
            if (request.readyState !== 4) {
                return;
            }
            console.log("waited for it to finish")
            console.log(request.response);
        };
        request.send(submitFormData);
        let m = request.response;
        console.log(m);
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

    const onMFRCodeFieldChange = (e) => {
        if (e)
            setMfrCodeField(e.target.value);
    }

    const onPriceFieldChange = (e) => {
        if (e)
            setPriceField(e.target.value);
    }

    const onNameFieldChange = (e) => {
        if (e)
            setNameField(e.target.value);
    }

    const onDescFieldChange = (e) => {
        if (e)
            setDescField(e.target.value);
    }

    const onListPriceFieldChange = (e) => {
        if (e)
            setListPriceField(e.target.value);
    }

    const onProductTypeFieldChange = (e) => {
        if (e)
            setProductTypeField(e.target.value);
    }

    const onImageFieldChange = (e) => {
        if (e)
            setImageField(e.target.value);
    }

    const onUrlFieldChange = (e) => {
        if (e)
            setUrlField(e.target.value);
    }

    const onCurrencyFieldChange = (e) => {
        if (e)
            setCurrencyField(e.target.value);
    }

    const onBrandFieldChange = (e) => {
        if (e)
            setBrandField(e.target.value);
    }

    const onProductBrandFieldChange = (e) => {
        if (e)
            setProductBrandField(e.target.value);
    }

    const onAvailabilityFieldChange = (e) => {
        if (e)
            setAvailabilityField(e.target.value);
    }

    const onGenderFieldChange = (e) => {
        if (e)
            setGenderField(e.target.value);
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

    const IgnoreFieldInfo = (
        <div>
            <p>This field is for ...</p>
            <p>Ctrl + click to select multiple values.</p>
        </div>
      );

      const IndexInfo = (
        <div>
            <p>This field is for ...</p>
            <p>Index starts count from 0</p>
        </div>
      );


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

    function productTypeSeparatorFieldChange(val) {
        setProductTypeSeparator(val.target.value)
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

                        {/* Description */}
                        <h3 class="text-center">Upload product catalog below.</h3>

                        { /* Upload file/drag or enter link */}
                        <BrowseFileOrLink childToParent={childToParent} ></BrowseFileOrLink>

                        {/* Description */}
                        <h3 class="mt-5 text-center">Use dropdowns below to map Unthink Inc's database fields to your uploaded product catalog's columns.</h3>

                        <div class="grid cols-2">
                            { /* Category Drop Down */}
                            <div class='flex px-5 pb-2 pt-2 justify-between' >
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
                                <input type="text" maxlength="1" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={categorySeparatorFieldChange}></input>
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
                                <input type="text" maxlength="1" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={subcategorySeparatorFieldChange}></input>
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
                                <input type="text" maxlength="1" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={topLevelSeparatorFieldChange}></input>
                            </div>

                            {/*Pop up separator if at least one category field matches*/}
                            <div id="shareSep" class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class={textColor}>Shared Separator</label>
                                <input type="text" maxlength="1" id="sharedSep" disabled={isDisabled} placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={sharedSeparatorFieldChange} value={sharedSeparator}></input>
                            </div>

                            {/*Pop up for category counter index if at least one category field matches*/}
                            <div id="catMatch" class='flex px-5 pb-2 justify-between' >
                                <div>
                                <label class={textColor}>Category Index</label>
                                <Popover content={IndexInfo}> 
                                    <Button size = "small" shape = "circle">?</Button>
                                </Popover>
                                </div>
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
                                <div> 
                                <label class={textColor}>Top-Level Category Index</label>
                                <Popover content={IndexInfo}> 
                                    <Button size = "small" shape = "circle">?</Button>
                                </Popover>
                                </div>
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

                            { /* Name */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Name</label>

                                <select defaultValue="" onChange={onNameFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Description */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Description</label>

                                <select defaultValue="" onChange={onDescFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* List Price */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">List Price</label>

                                <select defaultValue="" onChange={onListPriceFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Product Type */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Product Type</label>

                                <select defaultValue="" onChange={onProductTypeFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            {/* Product Type Separator*/}
                            <div class='flex px-5 pb-2 justify-between' >
                                <label for="separator" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit justify-items-end pr-2">Product Type Separator</label>
                                <input type="text" maxlength="1" placeholder=' Type here...' class="mb-3 mx-4 w-1/4 right-0 top-0 border-solid border-2" onChange={productTypeSeparatorFieldChange}></input>
                            </div>

                            { /* Image */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Image</label>

                                <select defaultValue="" onChange={onImageFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* URL */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">URL</label>

                                <select defaultValue="" onChange={onUrlFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Currency */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Currency</label>

                                <select defaultValue="" onChange={onCurrencyFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Brand */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Brand</label>

                                <select defaultValue="" onChange={onBrandFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Product Brand */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Product Brand</label>

                                <select defaultValue="" onChange={onProductBrandFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Availability */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Availability</label>

                                <select defaultValue="" onChange={onAvailabilityFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>

                            { /* Gender */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Gender</label>

                                <select defaultValue="" onChange={onGenderFieldChange} name="selectList" id="selectList" class="mb-3 mx-4 w-3/4 right-0 top-0 border-solid border-2" disabled={!isFileUploaded ? true : null}>
                                    <option disabled={true} value="">Select from dropdown</option>
                                    {columnNameArray.map((cname) => {
                                        return <option key={cname} value={cname}>{cname}</option>
                                    })}
                                </select>
                            </div>


                            { /* Ignore fields section */}
                            <div class='flex px-5 pb-2 top-0 right-0 min-w-fit' >
                                <label for="dropdownboxes" class="w-1/4 text-gray-800 text-sm font-bold leading-tight tracking-normal min-w-fit">Ignore Fields</label>
                                <Popover content={IgnoreFieldInfo}> 
                                    <Button size = "small" shape = "circle">?</Button>
                                </Popover>
                                <div class="relative flex w-full pl-2">
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
                                Name: <b>{nameField}</b>
                            </p>
                            <p class="ml-4">
                                Description: <b>{descField}</b>
                            </p>
                            <p class="ml-4">
                                List Price: <b>{listPriceField}</b>
                            </p>
                            <p class="ml-4">
                                Product Type: <b>{productTypeField}</b>
                            </p>
                            <p class="ml-4">
                                Product Type Separator: <b>{productTypeSeparator}</b>
                            </p>
                            <p class="ml-4">
                                Image: <b>{imageField}</b>
                            </p>
                            <p class="ml-4">
                                URL: <b>{urlField}</b>
                            </p>
                            <p class="ml-4">
                                Currency: <b>{currencyField}</b>
                            </p>
                            <p class="ml-4">
                                Brand: <b>{brandField}</b>
                            </p>
                            <p class="ml-4">
                                Product Brand: <b>{productBrandField}</b>
                            </p>
                            <p class="ml-4">
                                Availability: <b>{availabilityField}</b>
                            </p>
                            <p class="ml-4">
                                Gender: <b>{genderField}</b>
                            </p>
                            <p class="ml-4">
                                Ignore Fields: <b>{ignoreFieldsList}</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center py-12" id="button">
            </div>
        </div >
    )

} //end of Playground

export default PlaygroundPage
