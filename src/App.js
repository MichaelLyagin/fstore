import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Categories from "./components/Categories";
import { BiInfinite } from "react-icons/bi";
import ProductMW from "./components/ProductMW";

class App extends React.Component {
  constructor(props){ //Конструтор принимающий различный свойства
    super(props) //Конструтор родит. класса
    this.state = {  //Состояние содержащее массив товаров
      items: [
        {
          id: 1,
          title: "Стул STOOL GROUP",
          img: "ikea_volfgang_104_046_61_4.jpg",
          des: "Простой и удобный стул Concept придется по душе поклонникам современных интерьеров. Модель выполнена в духе минимализма, с упором на комфорт и функциональность. Прочные стальные ножки окрашены в белый цвет и снабжены специальными накладками, препятствующими порче напольного покрытия.",
          category: "chair",
          price: 1000,
          amount: 1
        },
        {
          id: 2,
          title: "Стол LACK ЛАКК",
          img: "lack-lakk-pridivannyy-stolik-chernyy__0836742_pe709554_s5.0b58cbfd.jpg",
          des: "Этот столик с черной отделкой легко сочетать с другой мебелью в интерьере. Благодаря уникальной конструкции его легко собирать, поднимать и перемещать, и мы можем предлагать его по действительно низкой цене.",
          category: "table",
          price: 1500,
          amount: 1
        },
        {
          id: 3,
          title: "Стол ОМТЭНКСАМ",
          img: "36140.970.jpeg",
          des: "Материал поверхности столешницы устойчив к появлению царапин и прост в уходе. Контуры столешницы четко видны, т. к. ее верхняя поверхность и край отделаны разными материалами. Матовая поверхность столешницы комфортна для глаз, так как не бликует под воздействием освещения.",
          category: "table",
          price: 2000,
          amount: 1
        },
        {
          id: 4,
          title: "Шкаф 2-дверный Titus Оскар",
          img: "647da4f23da79dea56c31920b6044092.jpg",
          des: "Шкаф-купе Турин вместительный и эргономичный. Наличие раздвижных дверей экономит пространство комнаты. Большое количество полок и штанг позволит свободно рассортировать и разложить одежду, аксессуары и текстиль. Глубина шкафа — 65 см. Изготовлен из прочной плиты ЛДСП, сверху покрыт гладкой белой финиш-пленкой.",
          category: "cupboard",
          price: 12000,
          amount: 1
        },
        {
          id: 5,
          title: "Шкаф Мелания Хелен",
          img: "14676_big.jpg",
          des: "Шкаф распашной Турин подойдет для гостиной, спальни, офиса или гардеробной. Вместительный шкаф с большим количеством полок позволит свободно рассортировать и разложить одежду, аксессуары и текстиль. Зеркальная дверь делает шкаф визуально легче и расширяет пространство комнаты. Глубина корпуса — 60 см. ",
          category: "cupboard",
          price: 20000,
          amount: 1
        },
        {
          id: 6,
          title: "Гардеробная система Оскар",
          img: "IMG_6868.jpg",
          des: "Гардеробная система Оскар предлагает большой выбор элементов, адаптирующихся к размерам конкретного помещения, а также потребностям и стилю жизни пользователя. Благодаря основным и вспомогательным модулям появляются бесконечные композиционные вариации оформления интерьера.",
          category: "cupboard",
          price: 15000,
          amount: 1
        },
        {
          id: 7,
          title: "Угловой диван Торонто",
          img: "38ef2b2f410f8053778125c8860a3ad2.jpg",
          des: "Основным преимуществом дивана является наличие универсального угла, местоположение которого можно выбрать во время сборки. Производитель предусмотрел удобный ящик для хранения вещей или спальных принадлежностей. Надежный механизм типа дельфин позволяет легко трансформировать диван с габаритами 235х90х155 см в спальное место размером 143х204 см. ",
          category: "sofa",
          price: 20000,
          amount: 1
        },
        {
          id: 8,
          title: "Диван Баден-Баден",
          img: "59383703cd75aeaf22999eb63044c2fa.jpg",
          des: "Основным преимуществом дивана является наличие универсального угла, местоположение которого можно выбрать во время сборки. Производитель предусмотрел удобный ящик для хранения вещей или спальных принадлежностей. Надежный механизм типа дельфин позволяет легко трансформировать диван с габаритами 235х90х155 см в спальное место размером 143х204 см. ",
          category: "sofa",
          price: 25000,
          amount: 1
        },
        {
          id: 9,
          title: "Кровать Мелодия",
          img: "slattum-karkas-krovati-s-obivkoy-knisa-svetlo-seryy__0726695_pe735410_s5.0b58cbfd.jpg",
          des: "Двуспальная кровать Мелодия с модным лаконичным дизайном поможет обустроить спальную комнату стильно и комфортно. Модель с красивой, приятной на ощупь велюровой обивкой идеально впишется в интерьеры: модерн, классический, скандинавский.",
          category: "bed",
          price: 22000,
          amount: 1
        },
      ],
      currentItems:[], //Массив элементов, которые показываются пользователю в данный момент
      selectedCat: 'all',  //Категория выбранная по умолчанию
      inBasket: [], //Товары в корзине
      showProductMW: false, //Показывать модальное окно товара?
      ProductInMW: [] //Товар для модального окна
    } 
    this.state.currentItems = this.state.items.map(el => el.id) //По умолчанию помещаем в currentItems массив всех id элементов items
    this.selectCategory = this.selectCategory.bind(this)   //Добавляем возможность работы методов с состояниями
    this.addToBasket = this.addToBasket.bind(this)
    this.deleteBasket = this.deleteBasket.bind(this)
    this.addCounter = this.addCounter.bind(this)
    this.decCounter = this.decCounter.bind(this)
    this.changeShowProductMW = this.changeShowProductMW.bind(this)
    this.closeModalWindow = this.closeModalWindow.bind(this)
  }
  
  render(){ //Метод для вывода компонент
  return (
    <div className='wrapper'> 
      <Header basket={this.state.inBasket} delete={this.deleteBasket} addCounter={this.addCounter} decCounter={this.decCounter}/>
      <Categories selectCategory={this.selectCategory} selectedCat={this.state.selectedCat} /> {/*Передаем props в виде метода в компонент*/}
      <Products changeShowProductMW={this.changeShowProductMW} dataItems={this.state.items} items={this.state.currentItems} add={this.addToBasket} inBasket={this.state.inBasket}/> {/*Передаем массив необходимых товаров и метод в компонент*/} 
      {this.state.showProductMW && <ProductMW closeModalWindow={this.closeModalWindow} item={this.state.ProductInMW} dataItems={this.state.items} inBasket={this.state.inBasket} onAdd={this.addToBasket}/>}
      <Footer />
      {console.log(this.state.currentItems)}
      {console.log(this.state.inBasket)}
    </div>
  )
  }
  
  changeShowProductMW(item){ //Методи изменения состояния отвечающего за отображение модального окна товара 
    this.setState({showProductMW: !this.state.showProductMW})
    this.setState({ProductInMW: item})
  }

  closeModalWindow(){
    this.setState({showProductMW: false})
  }

  selectCategory(cat) {  //Метод для возможности выбора категории. Метод изменяет текущую выбранную категорию и выводимый массив
    if(cat === 'all'){
      this.setState({
        currentItems: this.state.items.map(el => el.id)
      })
      this.setState({selectedCat: cat})//Изменение категории выбранной по умолчанию
      return
    }
    let updated = this.state.items.filter(el => el.category === cat)
    updated = updated.map(el => el.id)
    this.setState({currentItems: updated}) //В массиве currentItems только id товаров, которые надо вывести на страницу
    this.setState({selectedCat: cat})//Изменение категории выбранной по умолчанию
  }


  addToBasket(item){ //Метод добавления товара в корзину
    let added = false
    this.state.inBasket.forEach(el => {
      if(el.id === item.id)
        added = true
    })
    if(!added){
      item.amount=1
      this.setState({inBasket: [...this.state.inBasket, item]})
    }
  }

  deleteBasket(id){ //Метод удаления товара из корзины
    this.setState({inBasket: this.state.inBasket.filter(el => el.id !== id)}) //В массив попадают только те товары, id не равен переданному
  }

  addCounter(it){ //Метод увеличения кол-ва товара
    
    const updated = this.state.inBasket.map(el => {
      if(el.id === it.id){
        return {...el, amount: ++el.amount}
      } else {
        return {...el}
      }
    })
    this.setState({inBasket: updated})
  }

  decCounter(it){ //Метод уменьшения кол-ва товара
    const updated = this.state.inBasket.map(el => {
      if(el.id === it.id){
        if(el.amount > 1){
          return {...el, amount: --el.amount}
        } else {
          return {...el}
        }
      } else {
        return {...el}
      }
    })
    this.setState({inBasket: updated})
  }
  
} 

export default App;
