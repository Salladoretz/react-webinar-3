const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function plural(num) {
  if (num % 10 === 2 && num != 12 || num % 10 === 3 && num != 13 || num % 10 === 4 && num != 14) {
    return ` | Выделяли ${num} раза`
  } else {
    return ` | Выделяли ${num} раз`
  }
}

//Исправление замечаний 2
export function setCounter(list) {

  let arr = []
  list.map(item => arr.push(Number(item.code)))

  //отбираем записи только с числовым кодом
  let result = arr.filter(item => !isNaN(item))

  //возвращаем наибольшее значение, либо 0 при пустом массиве
  return result.length ? Math.max.apply(0, result) : 0
}