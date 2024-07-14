// 项目根组件

import { useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment,addToNum} from "./store/modules/counterStore";
import {fetchChannlList} from "./store/modules/channelStore";



function App() {

const {count} = useSelector(state => state.counter);
const {channelList} = useSelector(state => state.channel);
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchChannlList())
},[dispatch]);

  return (
    <div className="App">
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())} >+</button>
        <button onClick={()=>dispatch(addToNum(10))} >TO 10</button>
        <button onClick={()=>dispatch(addToNum(20))} >TO 20</button>
        <ul>
            {channelList.map(item=> <li key={item.rpid}>{item.content}</li>)}
        </ul>
    </div>
  );
}

export default App;
