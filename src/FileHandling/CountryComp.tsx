import React, { useState } from 'react'
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
type contCompProps={
    CountryArr:any
    csvArr:propsData[];
  }
  // For country 
const CountryComp = (props:contCompProps) => {
  const [countryArr,setCountryarr]=useState<propsData[]>([]);
  let arr:any=[];
  const funcContry=(e : any)=>{
      let value=e.target.value;
      console.log(value,props.csvArr);
      props.csvArr.slice(0,3000).map((item)=>{
        console.log(item.Country);
        if(item.Country===value){
          console.log(item);
          arr.push(item);
        }
      })
      setCountryarr(arr);
    } 
  return (
    <div>
      <h3>Country Data</h3>
    <select onChange={funcContry} className="form-select mt-4 mb-4">
    {props.CountryArr.map((item : any)=>{
    return(<option value={item}>
        {item}
        </option>)
   })}
   </select>
   {countryArr.length>0?<div className='container'>
    <table className="table">
  <thead>
  <tr>
      <th scope="col">CustomerID</th>
      <th scope="col">Description</th>
      <th scope="col">InvoiceDate</th>
      <th scope="col">InvoiceNo</th>
      <th scope="col">Quantity</th>
      <th scope="col">StockCode</th>
      <th scope="col">UnitPrice</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
  {countryArr.map(item=>{
      return(<>
    <tr>
      <td>{item.CustomerID}</td>
      <td>{item.Description}</td>
      <td>{item.InvoiceDate}</td>
      <td>{item.InvoiceNo}</td>
      <td>{item.Quantity}</td>
      <td>{item.StockCode}</td>
      <td>{item.UnitPrice}</td>
      <td>{item.Country}</td>
    </tr>
    </>)
    })}
  </tbody>
</table>
</div>:""}
  
   </div>

  )
}

export default CountryComp