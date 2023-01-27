import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
type propsData={
    Country:string,
    CustomerID:string,
    Description:string,
    InvoiceDate:string,
    InvoiceNo:string,
    Quantity:string,
    StockCode:string,
    UnitPrice:string
}
const DataAnalysis = () => {
    const [csvFile, setCsvFile] = useState<File>();
    const [csvArr,setCsvarr]=useState<propsData[]>([]);
    // let fileRef=useRef()
    let uniqueIds : any=[];
    const processCSV = (str:any) => {
        const headers = str.slice(0,str.indexOf('\n')).split(',');
        const rows = str.slice(str.indexOf('\n')+1).split('\n');
        // console.log(headers,rows);
        const newArray=rows.map((item : any)=>{
            const values=item.split(',')
            const eachObject=headers.reduce((obj : any,header : any,i :any)=>{
            
                // const x = header.find((item : any) => item.id === current.id);
                obj[header]=values[i];return obj;
            },{})
            return eachObject
        })     
      setCsvarr(newArray);
    }

    const submit = () => {
        const file : File|undefined= csvFile;
        const reader = new FileReader();
        reader.onload= function(e) {
            if(e.target!==null){
                const text = e.target.result;
                // console.log(text);
            processCSV(text);
            }   
        }
        if(file!==undefined){
            reader.readAsText(file);
        } 
    }
   useEffect(()=>{
    let dublicateremove=csvArr.slice(0,100);
    console.log(dublicateremove);
   },[csvArr]);
//    Create a component that will display all the customer id's in a drop down and generate bill for a specific user
// Display all the distinct items(description) in a drop down
// Display the total quantity and no of times that item is ordered
// On selecting a country list all the items and their quantity ordered. 
    
    // console.log(csvArr.slice(0,100));
  return (
    <>
    <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                // ref={}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    if(e.target!==null && e.target.files!==null){
                    setCsvFile(e.target.files[0]); 
                    } 
                }}
            >
            </input>
            <br/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}>
                Submit
            </button>
        </form>
       {csvArr.slice(0,100).map(item=>{
        // let id=[...new Set(item.CustomerID)]
        return(<p>{item.CustomerID}</p>)
       })}
        </>
  )
}

export default DataAnalysis