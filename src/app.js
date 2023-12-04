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
      store.deleteItemFromBasket(item.code);
    }, [store])
  }

  const basket = store.getState().basket

  const totalSum = store.getTotalSum()

  const basketInfo = basket.length > 0 ? `${basket.length} ${plural(basket.length, {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  })} / ${totalSum} ₽` : 'пусто'

  return (
    <PageLayout>
      <Head title='Магазин' />

      <Headline
        info={basketInfo}
        onClick={setActiveModal} />

      <List
        arr={list}
        onClick={callbacks.onAddItemToBasket} />

      <Modal
        arr={basket}
        onClick={callbacks.onDeleteItemFromBasket}
        totalSum={totalSum}
        activeModal={activeModal}
        setActiveModal={setActiveModal} />

    </PageLayout>
  );
}

export default App;
