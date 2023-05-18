Страница интернет-магазина
Необходимо создать React-компонент (функциональный компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте в таком виде (компонент обведён пунктирной линией): ShopItemFuncВнешний вид страницы после реализации компонента

Пример использования
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Внутри компонента App
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
Описание компонента
Компонент должен иметь один props , в котором он ожидает объект с информацией о товаре со следующими свойствами:item

brand — название производителя товара;
title — название товара;
description — краткое описание товара;
descriptionFull — подробное описание товара;
price — цена товара;
currency — валюта товара.
Компонент должен создавать DOM элемент следующей структуры:

<div class="main-content">
  <h2>Tiger of Sweden</h2>
  <h1>Leonard coat</h1>
  <h3>Minimalistic coat in cotton-blend</h3>
  <div class="description">
    Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
  </div>
  <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">£399.00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
Соответственно название производителя необходимо подставить в , название товара в , краткое описание в , подробное описание в , цену и валюту в . При этом символ валюты должен следовать перед ценой, а цена должна быть представлена с двумя числами после запятой.h2h1h3div.descriptiondiv.price

Реализация
Реализуйте полноценный проект с помощью create-react-app. Для item можете использовать либо тип , либо вынести item в класс и использовать .objectinstanceOf

Используйте расположенный в этом каталоге CSS для стилизации.

Необязательная часть задачи (со звездочкой): задействуйте prop-types в реализации проекта.
