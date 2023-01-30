import React, {
  useEffect,
  useState,
} from "react";
import CountryComp from "./CountryComp";
import CustomerComp from "./CustomerComp";
import DiscriptComp from "./DiscriptComp";
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
const DataAnalysis = () => {
  const [csvArr, setCsvarr] = useState<propsData[]>([]);
  const [custArr, setCustarr] = useState<any>([]);
  const [discript, setDiscript] = useState<any>([]);
  const [CountryArr, setCountryArr] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //   for fill dropdown
  const processCSV = (str: any) => {
    const headers = str.slice(0, str.indexOf("\r")).split(",");
    console.log(headers);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const newArray = rows.map((item: any) => {
      const values = item.split(",");
      const eachObject = headers.reduce((obj: any, header: any, i: any) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    setCsvarr(newArray);
  };
  useEffect(() => {
    fetch("./online_retail.csv")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        processCSV(data);
        setLoading(false);
      });
    let arr1: any = [];
    let discript: any = [];
    let contArr: any = [];
    let customerData = csvArr.slice(0, 3000);
    let Discription = csvArr.slice(0, 3000);
    let country: any = csvArr.slice(0, 3000);
    // customer id data unique
    customerData.map((item) => {
      if (!arr1.includes(item.CustomerID)) {
        arr1.push(item.CustomerID);
      }
    });
    // description data unique
    Discription.map((item) => {
      if (!discript.includes(item.Description)) {
        discript.push(item.Description);
      }
    });
    // country data unique
    country.map((item: any) => {
      if (!contArr.includes(item.Country)) {
        contArr.push(item.Country);
      }
    });
    setCustarr(arr1);
    setDiscript(discript);
    setCountryArr(contArr);
  }, [csvArr]);
  return (
    <>
      <div className="container mt-5">
        {loading ? (
          <div className="text-center">
            <img
               alt=""
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              height="50px"
              width="50px"
            />
          </div>
        ) : (
          <>
            <div className="mt-2">
              <CustomerComp custArr={custArr} csvArr={csvArr} />
            </div>
            <hr></hr>
            <div className="mt-2">
              <DiscriptComp discript={discript} csvArr={csvArr} />
            </div>
            <hr></hr>
            <div>
              <CountryComp CountryArr={CountryArr} csvArr={csvArr} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default DataAnalysis;
