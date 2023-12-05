import React, { useCallback, useState } from 'react';
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

  const list = store.getState().list

  const basket = store.getState().basket

  const totalSum = store.getTotalSum()

  const basketInfo = store.getBasketInfo()

  const callbacks = {
    onAddItemToBasket: useCallback(item => {
      store.addItemToBasket(item);
    }, [store]),

    onDeleteItemFromBasket: useCallback(item => {
      store.deleteItemFromBasket(item.code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин' />

      <Headline
        info={basketInfo}
        onClick={setActiveModal} />

      <List
        arr={list}
        onClick={callbacks.onAddItemToBasket} />

      {activeModal ?
        <Modal
          arr={basket}
          onClick={callbacks.onDeleteItemFromBasket}
          totalSum={totalSum}
          activeModal={activeModal}
          setActiveModal={setActiveModal} />
        : ''}

    </PageLayout>
  )
}

export default App;
