## 创建

- 模板： vanilla，vanilla-ts，vue，vue-ts，react，react-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts
```npm
pnpm create vite 项目名称 --template 模板
```

## useState 自动推导
>Ts自动会对传入默认值做自动推导，不需要标注类型

- 场景：明确初始值


## useState 传递泛型函数
> useState 本身是个泛型函数，可以传入具体的自定义类型

```ts
type User = {
    name: string,
    age: number
}
 const [user,setUser] = useState<User>({
    name: 'smz',
    age: 13
})
const [user,setUser] = useState<User>(()=>{
    return{
        name: 'smz',
        age: 13
    }
})
```

## useState 初始值null
>不清楚初始值

```ts
type User = {
    name: string,
    age: number
}
    const [user,setUser] = useState<User | null>(null)
```

## Props ts基本使用
>本质就是给函数的参数做类型注解，可以使用type对象或者interface接口来做注解
```ts
type Props = {
    className: string,
    title?: string
}
function Button(props:Props){
    const {className} = props
    return <button className={className}>点击</button>
}

<Button  className={'smz'} />
```

## Props ts children属性
> children 是一个特殊的prop，支持多种不同类型数据的传入，需要通过一个内置的ReactNode类型来做注解

ReactNode类型：

string 、 number、 ReactElement、ReactFragment、ReactPortal、boolean、null 以及 undefined

```ts
type Props = {
    className: string,
    title?: string,
    children: React.ReactNode
}
function Button(props:Props){
    const {className,children} = props
    return <button className={className}>{children}</button>
}

<Button  className={'smz'} ><span>click</span></Button>
```

## Props 为事件prop添加类型

> 组件经常执行类型为函数的prop实现子传父。这类prop重点在于函数类型的注解


说明
1. 在组建内部调用时需要遵守类型的约束，参数传递需要满足要求
2. 绑定prop时如果绑定内联函数直接可以推断出参数类型，否则需要单独注解匹配的参数类型

```ts
type Props = {
    onGetMsg?: (msg: string) => void
}
function Son(props: Props) {
    const {onGetMsg} = props
    const clickHandler = () =>{
        onGetMsg?.('231232')
    }
    return <button onClick={clickHandler}>sendMsg</button>
}

function App() {
    const getMsg = (msg: string) => {
        console.log(msg)
    }
  return (
    <>
       <Son onGetMsg={(msg)=>console.log(msg)}/>
        <Son onGetMsg={getMsg} />
    </>
  )
}
```
## useRef + TS

- 获取dom
>获取dom时 可以直接把要获取的dom元素的类型当成泛型参数传递给useRef，可以推导出.current属性的类型

```ts
import {useEffect, useRef} from "react";

function App() {
  const domRef = useRef<HTMLInputElement>(null)

    useEffect(()=> {
    domRef.current?.focus()
},[])

  return (
    <>
        <input ref={domRef} />
    </>
  )
}
```

- 引用稳定的存储器
> 把UseRef当成引用稳定的存储器使用的场景可以通过泛型传入联合类型来做，比如定时器场景

```ts
import {useEffect, useRef} from "react";

function App() {
  const timerRef = useRef<number | undefined>(undefined)

    useEffect(()=> {
            timerRef.current = setInterval(() => {
                console.log('1')
            }, 1000)
            return () => clearInterval(timerRef.current)
        }, [])
  return (
    <>
        THIS IS DIV
    </>
  )
}
```
