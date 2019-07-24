let vd={};
//判断是否为空
vd.isBlank=function(val){
  var str =(val+'').trim();
    if(str.length==0){
        return true;
    }
    return false;
}
//电话号码
vd.mobile=function(val){
    if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(val))){
        return false;
    }
    return true;
}
//整数或者小数
vd.decimal=function(val){
    if(!(/^[1-9]?[0-9]*\.[0-9]*$/.test(val))){
        return false;
    }
    return true;
}

//数字
vd.digital=function(val){
    if(!(/^[0-9]*$/.test(val))){
        return false;
    }
    return true;
}
//验证邮箱
vd.email=function(val){
    if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val))){
        return false;
    }
    return true;
}
vd.Integer=function(val){
    if(!(/^-?\d+$/.test(val))){
        return false;
    }
    return true;
}
export default vd;
