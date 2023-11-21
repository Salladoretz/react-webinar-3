/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.counter = this.state.list.length //Решение задачи №2 - добавляем общий счетчик количества записей
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

  /**
   * Добавление новой записи
   */
  addItem() {
    
    this.setState({
      ...this.state,
      ...this.counter = ++this.counter,                                       //Решение задачи №2 - счетчик увеличивается при каждом добавлении записи
      list: [...this.state.list, {code: this.counter, title: 'Новая запись'}] //Решение задачи №2 - заменили this.list.length на this.counter
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        item.selected = false                                           //Решение задачи №1 - при каждом выделении записи сбрасываем выделение всем записям
        if (item.code === code) {
          item.selected = !item.selected;
          item.selectCount ? ++item.selectCount : item.selectCount = 1; //Решение задачи №3 - добавляем счетчик выделений каждой записи
        }
        return item;
      })
    })
  }
}

export default Store;
