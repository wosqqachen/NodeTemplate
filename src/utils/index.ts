/**
 * @desc 校验类型
 * @param value 被校验值
 */
export const checkType = (value: any) => {
  let type = Object.prototype.toString.call(value).split(' ')[1];
  const reg = /(\w*)\]/g;
  type = type.replace(reg, (_, $1) => {
    return $1;
  });
  return type.toLowerCase();
};
