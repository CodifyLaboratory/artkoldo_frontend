import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import PlusButton from "../PlusButton";
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
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Тема</p>
        <Button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>&minus;</span>
        </Button>
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
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Тема</p>
        <Button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>+</span>
        </Button>
      </div>
    </Col>
  );
};

export default ThemeOptions;
