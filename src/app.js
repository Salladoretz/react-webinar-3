import React from 'react';
import { plural } from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                //Предотвращение сброса выделения при удалении записи
                onClick={e => { e.target.tagName != 'BUTTON' ? store.selectItem(item.code) : '' }}>
                <div className='Item-code'>{item.code}</div>

                {
                  item.selectCount > 0 //Решение задачи №3 - отображаем дополнительную надпись, если счетчик выделений больше 0
                    ? <div className='Item-title'>{item.title} {plural(item.selectCount)}</div>
                    : <div className='Item-title'>{item.title}</div>
                }

                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div >
    </div >
  );
}

export default App;
