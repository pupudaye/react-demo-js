import { Alchemy, Network } from 'alchemy-sdk';
import { Client }  from "@notionhq/client";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Welcome from './component/basic/Welcome';
// import Clock from './component/basic/Clock';
// import LoginControl from './component/basic/LoginControl';
// import NumberList from './component/basic/NumberList';
// import Calculator from './component/basic/StatusUp';
// import SignUpDialog from './component/basic/CompositionVsInheritance';
// import FilterableProductTable from './component/serach/FilterableProductTable';
// import Game from './component/game/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
const settings = {
  apiKey: "UHJme6Vm_HrnAYgiuejTdtp8s3UpfIHO",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);  
const latestBlock = alchemy.core.getBlockNumber();
console.log(latestBlock)


// Initializing a client
const notion = new Client({
  auth: "secret_sgnkiDtE5iJF9JgcxWpiZqkn8Fsil6ozGc6CEZHKHBl",
})
async function test(){
  const listUsersResponse = await notion.users.list({})
  console.log(listUsersResponse)
}

test()


// const dataList = [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ]

root.render(
  <React.StrictMode>
    {/* <NumberList dataList={doubled}/>
    <Welcome />
    <LoginControl />
    <Clock increment={1} /> */}
    {/* <Calculator/> */}
    {/* <FilterableProductTable products={dataList}/> */}
    {/* <SignUpDialog/> */}
    {/* <Game size={3}/> */}
  </React.StrictMode>
);

// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
