import {Component, forwardRef, useImperativeHandle, useRef} from "react";

import {create} from "zustand";

const createCounterStore = (set) =>{
  return {
    count: 0,
    setCount: ()=>{
      set((state)=>({
        count:state.count + 1
      }))
    }
  }
}

const createCounterStore2 = (set) =>{
  return {
    listData: [],
    //异步方法
    fetchList: async ()=> {
      const  res = await fetch(URL)
      const jsonData = await  res.json()
      //调用更新
      set({
        listData: jsonData.data.channels
      })
    },
  }
}

// 创建store
const useStore = create((...a)=>({
  ...createCounterStore(...a),
  ...createCounterStore2(...a)
}))

// 绑定store到组件
function App() {
  const {count,inc} = useStore();
  return (
    <div className="App">
      <button onClick={inc}>{count}</button>
    </div>
  );
}

export default App;
