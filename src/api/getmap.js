import axios from 'axios'

export const getMapJson=(code,areaType)=>{
    // console.log(areaType)
    return areaType =='province' ? axios.get(`/map/province/${code}.json`): areaType=='city'?axios.get(`/map/city/${code}.json`):axios.get(''+'/map/china.json')
}
export const getMapData=(code)=>{
    return code==10000? axios.get('https://mock.mengxuegu.com/mock/630daf53c94098684fb184ea/map/china'):axios.get(`https://mock.mengxuegu.com/mock/630daf53c94098684fb184ea/map/${code}`)
}
