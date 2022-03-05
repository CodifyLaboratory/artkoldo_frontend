import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import "./style.css";

const ThemeOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = [
    "Человек",
    "Портрет",
    " Пейзаж",
    " Люди",
    " Животные",
    " Природа",
    " Женщины, натюрморт",
    " Нюд",
    " Города",
    " Архитектура",
    " Тело",
    " Пляж",
    " Культура",
    " Любовь",
    " Мужчины",
    " Геометрия",
    " Дети",
    " Звезды",
    " Музыка",
    " Религия",
    " Интерьер",
    " Вода",
    " Машины",
    " Собаки",
    " Путешествие",
    " Рыба",
    " Кошки",
    " Свет",
    " Еда",
    " Семья",
    " Наука и технология",
    " Спорт",
    " Кино",
    " Лодка",
    " Время",
    " Сельская жизнь",
    " Наука",
    " Политика",
    " Здоровье и красота",
    " Корабль",
    " Язык",
    " Велосипед",
    " Бизнес",
    " Образование",
    " Типография",
    " Коровы",
    " Поезд",
    " Самолет",
    " Стена",
    " Яхта",
    " Кухня",
    " Мотоцикл",
    " Дом",
  ];

  return isOptionsOpen ? (
    <Col sm={12} md={12} lg={12}>
      <div className="filter-menu-section">
        <p>Тема</p>
        <button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>&minus;</span>
        </button>
      </div>
      {styleCheckboxes.map((el, i) => (
        <Row key={i} className="checkbox-row">
          <input type="checkbox" />
          <span className="checkbox-title">{el}</span>
        </Row>
      ))}
      <div className="select-all-options">Все стили</div>
    </Col>
  ) : (
    <Col sm={12} md={12} lg={12}>
      <div className="filter-menu-section">
        <p>Тема</p>
        <button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>+</span>
        </button>
      </div>
    </Col>
  );
};

export default ThemeOptions;
