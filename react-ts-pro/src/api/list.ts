// 定义泛型

type ResType<T> = {
    message:string
    data: T
}

type ChannelItem = {
    id: number
    name: string
}

type ChannelRes = {
    channels: ChannelItem[]
}