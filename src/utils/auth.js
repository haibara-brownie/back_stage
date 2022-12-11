import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

// 登陆时间设置
export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, Date.now())
}

// 获取
export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME)
}

// 比较是否已经过期
export const diffTokenTime = () => {
    const currentTime = Date.now()
    const tokenTime = getTokenTime()
    return currentTime - tokenTime > TOKEN_TIME_VALUE
}
