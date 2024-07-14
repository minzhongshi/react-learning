# JSX ==>JS与HTML结合的产物

 JS的扩展，同时具备HTML和JS的优点，浏览器不能直接识别该代码，需要通过 `Bable` 进行转换, 转换为 `react/jsx-runtime` 中的 jsx 和 jsxs方法调用的方式。
```javascript
 <div>
    <div></div>
    <span>
        <p>this is React</p>
        <p>this is React</p>
    </span>
</div>
```

```javascript
 import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("div", {}), /*#__PURE__*/_jsxs("span", {
        children: [/*#__PURE__*/_jsx("p", {
            children: "this is React"
        }), /*#__PURE__*/_jsx("p", {
            children: "this is React"
        })]
    })]
});
```

可以看出当一个标签下有多个子元素时用的时`jsxs`方法，单个使用`jsx`方法。

如何进行转换，对应关系如所示：

# 识别JS表表达式

使用`{}``语法识别表达式

 - 使用引号传递字符串
 - 使用JS变量
 - 函数调用和方法调用
 - 使用JS对象

```javascript
<div className="App">
      this is React
        {/*识别字符串*/}
        {/*{"这是字符串"}识别变量*/}
        {variable}
        {/*函数调用*/}
        {getName()}
        {/*方法调用*/}
        {new Date().getTime()}
        {/*使用JS对象*/}
        <div style={{color:'red'}}>这是使用JS对象</div>
    </div>
```


# 列表渲染
需要使用数组内置方法`map`,需要加上独一无二的`key`,用于提升更新性能

```javascript
 <div className="App">
      {/*渲染列表*/}
        <ul>
            {list.map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
```

# 条件渲染

- 逻辑与判断
- 三元运算
- 复杂判断
定义一个根据条件返回对应模板的函数，然后调用它

```javascript
const isLogin = false;

const artileType = 1 // 0 1 3

// 定义核心函数
function getArtType() {
  if (artileType === 0){
    return <div>这是0</div>
  }else if (artileType === 1){
    return <div>这是1</div>
  }else {
    return <div>这是3</div>
  }
}
function App() {
  return (
    <div className="App">
      {/*逻辑与判断*/}
        {!isLogin && <span>这是条件判断</span>}
      {/*  三元运算*/}
        {isLogin ? <span>true</span>:<span>false</span>}
        {/*复杂判断*/}
      {getArtType()}
    </div>
  );
}
```





