import axios from 'axios'


export const requestLogin=(data)=>{
    return axios({
        url:'/login',
        method:'post',
        data:data
    })
}

//电影列表
export const reqMovieList=()=>{
    return axios({
        url:"/movie",
        method:"get"
    })
}

//电影详情
export const reqMovieDetail=(params)=>{
    return axios({
        url:"/getMovieDetail",
        method:"get",
        params
    })
}