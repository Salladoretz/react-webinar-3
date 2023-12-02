import React, { useCallback, useState } from 'react';
import { plural } from './utils'
import List from "./components/list";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Headline from './components/headline';
import Modal from './components/modal'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const [activeModal, setActiveModal] = useState(false)

  const list = store.getState().list;

  const callbacks = {

    onAddItemToBasket: useCallback(item => {
      store.addItemToBasket(item);
    }, [store]),

    onDeleteItemFromBasket: useCallback(item => {
      console.log('жопка')
      store.deleteItemFromBasket(item.code);
    }, [store])
  }

  const basket = store.getState().basket

  const totalPrice = basket.map(item => {
    return item.price * item.quantity
  }).reduce((total, item) => total + item, 0).toLocaleString()

  const itemInfo = item => {
    return `${item.price.toLocaleString()} ₽`
  }

  const basketInfo = basket.length > 0 ? `${basket.length} ${plural(basket.length, {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  })} / ${totalPrice} ₽` : 'пусто'

  const basketItemInfo = item => {
    let sum = item.price * item.quantity
    return `${sum.toLocaleString()} ₽  ${item.quantity} шт`
  }


  return (
    <PageLayout>
      <Head title='Магазин' />

      <Headline
        info={basketInfo}
        buttonName={'Перейти'}
        onClick={setActiveModal} />

      <List
        arr={list}
        info={itemInfo}
        buttonName={'Добавить'}
        onClick={callbacks.onAddItemToBasket} />

      <Modal
        arr={basket}
        info={basketItemInfo}
        buttonName={'Удалить'}
        onClick={callbacks.onDeleteItemFromBasket}
        totalPrice={totalPrice}
        activeModal={activeModal}
        setActiveModal={setActiveModal} />

    </PageLayout>
  );
}

export default App;
