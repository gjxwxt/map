/*
 * @Author: yangyouwang yangyouwang
 * @Date: 2022-08-30 17:29:30
 * @LastEditors: yangyouwang yangyouwang
 * @LastEditTime: 2022-08-30 17:30:41
 * @FilePath: \avue\src\utils\ConvertPinyin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 封装 中文转英文方法
 */
 
 // 引入字符编码（JSON）
 import PinYin from './ChineseHelperStr.js'
 
// 定义方法
const loadPinYinInit = {}
 
// 获取所有编码
loadPinYinInit.GetPinyinStr = function () {   
    return PinYin;
}
 
// 汉字转拼音  
loadPinYinInit.ConvertPinyin = function (l1) {
    var l2 = l1.length;
    var I1 = "";
    var reg = new RegExp('[a-zA-Z0-9]');
    for (var i = 0; i < l2; i++) {
        var val = l1.substr(i, 1);
        var name = loadPinYinInit.arraySearch(val, PinYin);
        if (reg.test(val)) {
            I1 += val;
        } else if (name !== false) {
            I1 += name;
        }
    }
    I1 = I1.replace(/ /g, ' ');
    while (I1.indexOf('--') > 0) {
        I1 = I1.replace('--', '-');
    }
    return I1;
}
 
// 在对象中搜索  
loadPinYinInit.arraySearch = function (l1) {
    let needName = ''
    for (var name in PinYin) {
        if (PinYin[name].indexOf(l1) != -1) {
            needName =  loadPinYinInit.ucfirst(name); break;
        }
    }
    return needName;
}
 
// 首字母大写  
loadPinYinInit.ucfirst = function(l1) {
    if (l1.length > 0) {
        var first = l1.substr(0, 1).toUpperCase();
        var spare = l1.substr(1, l1.length);
        return first + spare; 
    }
}
export default loadPinYinInit