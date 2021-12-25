import React, { FC, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let obj: any = {};
  const [data, setData] = useState(obj);
  let myAsyncFunction = async () => {
    let response = await axios.get("https://randomuser.me/api")
      .then((response) => {
        console.log("data", response);
        setData(response.data);
      });

  };
  useEffect(() => {
    myAsyncFunction();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className='employee-details'>
      {
        data && data.results?.length > 0 && data.results.map((item: any, index: any) => {
          return (
            <div key={index}><div><span>{item.name.title} : {item.name.first} {item.name.last}</span><span>{item.email}</span>
              <span><button onClick={myAsyncFunction}>Refresh</button></span></div></div>)
        })
      }
    </div>
  );
}

export default App;
