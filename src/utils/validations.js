const isNumber = (input) => {
  const numberRegex = /^\d+$/g;
  if (input.match(numberRegex)) return;

  throw new Error("[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.");
};

module.exports = { isNumber };
