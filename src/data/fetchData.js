// import md5 from 'js-md5';
//接口域名
export const  config = 'http://nz2-api.test.yz98.cn';
//获取地址省市区
export const dCode = (parentCode) =>  fetch(config+'/getLocationList?parentCode=' + parentCode ).then(response => response.json());
//用户登录
export const login_user = (userName, password) => fetch(config + '/login', {
    method: "POST",
    headers: {  
        "Content-Type": "application/x-www-form-urlencoded"  
    }, 
    mode: "cors",
    body: 'userName='+userName+'&password='+md5(password),
}).then(function (response) {return response.json()});