import { generateCode, plural } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  getTotalSum() {
    return Math.round(this.state.basket.map(item => {
      return item.price * item.quantity
    }).reduce((total, item) => total + item, 0)).toLocaleString()
  }

  getBasketInfo() {
    return this.state.basket.length > 0 ? `${this.state.basket.length} ${plural(this.state.basket.length, {
      one: 'товар',
      few: 'товара',
      many: 'товаров'
    })} / ${this.getTotalSum()} ₽` : 'пусто'
  }

  addItemToBasket(item) {

    let arr = [...this.state.basket]
    let index = arr.findIndex(el => el.code === item.code)

    if (index < 0) {

      this.setState({
        ...this.state,
        basket: [...this.state.basket, { code: item.code, title: item.title, price: item.price, quantity: 1 }]
      })

    } else {

      ++arr[index].quantity

      this.setState({
        ...this.state,
        basket: arr
      })
    }
  };

  deleteItemFromBasket(code) {

    this.setState({
      ...this.state,
      basket: this.state.basket.filter(item => item.code !== code)
    })
  }
}

export default Store;
