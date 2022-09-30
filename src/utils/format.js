/*
 * @Author: yangyouwang yangyouwang
 * @Date: 2022-09-15 09:56:13
 * @LastEditors: yangyouwang yangyouwang
 * @LastEditTime: 2022-09-15 10:05:01
 * @FilePath: \avue\src\utils\format.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function numFormat(num){
	//对输入的数字或者数字型字符串进行格式转换，一般转换为Kg，数字太大转换为吨，保留两位小数
		let number=num/1000;
		return  number > 1000 ? (number/1000).toFixed(2) + '吨' : number.toFixed(2) + 'Kg'
}