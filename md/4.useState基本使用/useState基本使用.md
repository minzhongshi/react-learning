# 组件基本使用

```javascript
function Button() {
    return <button>click</button>
}

const Button2 = () =>{
    return <button>click2</button>
}
function App() {
    return (
        <div className="App">
            <Button2/>
            <Button></Button>
        </div>
    );
}
```

# 受控表单绑定

- 声明一个useState状态
- 通过input value属性绑定状态
- 绑定input onChang事件用输入框数据替换状态值

```javascript
   const [value ,setValue] = useState('');
return (
    <div className="App">
        <input type="text"
               value={value}
               onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>
);
```



