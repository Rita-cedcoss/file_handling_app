import { type } from "@testing-library/user-event/dist/type";
import React, { SyntheticEvent, useEffect, useState } from "react";
type propsData = {
  Country: string;
  CustomerID: string;
  Description: string;
  InvoiceDate: string;
  InvoiceNo: string;
  Quantity: string;
  StockCode: string;
  UnitPrice: string;
};
type custCompProps = {
  custArr: any;
  csvArr: propsData[];
};
const CustomerComp = (props: custCompProps) => {
  const [invoiceArr, setInvoicearr] = useState<propsData[]>([]);
  useEffect(()=>{
    console.log(props.csvArr);
  },[]) 
  let arr: any = [];
  // invoice generation
  const invoice = (e: any) => {
    let value = e.target.value;
    console.log(props.csvArr);
    props.csvArr.slice(0, 3000).map((item) => {
      console.log();
      if (item.CustomerID.slice(0,item.CustomerID.indexOf("."))=== value && item.CustomerID.slice(0,item.CustomerID.indexOf("."))!== "") {
        arr.push(item);
      }
    });
    setInvoicearr(arr);
  };
  return (
    <>
      <div>
        <h3>Customer Id</h3>
        <select onChange={invoice} className="form-select mt-4 mb-4">
          {props.custArr.map((item: any) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      {invoiceArr.length > 0 ? (
        <div className="container">
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
              {invoiceArr.map((item) => {
                return (
                  <>
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
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerComp;
