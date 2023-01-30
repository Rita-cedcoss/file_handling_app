import React, { useState } from "react";
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
type discriptProps = {
  discript: any;
  csvArr: propsData[];
};
const DiscriptComp = (props: discriptProps) => {
  const [discArr, setDiscarr] = useState<propsData[]>([]);
  const [totalQuant, setTotal] = useState(0);
  let arr: any = [];
  // display data selected 
  const funcDiscription = (e: any) => {
    let total: number = 0;
    let value = e.target.value;
    console.log(value, props.csvArr);
    props.csvArr.slice(0, 3000).map((item) => {
      console.log(item.Country);
      if (item.Description === value && item.Quantity !== "") {
        console.log(item);
        arr.push(item);
        total += parseInt(item.Quantity);
      }
    });
    setDiscarr(arr);
    setTotal(total);
  };
  console.log(totalQuant);

  return (
    <div>
      <h3>Order Item</h3>
      <select onChange={funcDiscription} className="form-select mt-4 mb-4">
        {props.discript.map((item: any) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {discArr.length > 0 ? (
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
              {discArr.map((item) => {
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
      <p>Total Quntity={totalQuant}</p>
    </div>
  );
};

export default DiscriptComp;
