import React from "react";
import "./ContactsPage.css";
import PageWrapper from "../../components/PageWrapper/index";
import { Link } from "react-router-dom";

export default function ContactsPage() {
  return (
    <div>
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Контакты</span>
      </div>
      <hr />
      <div className="contacts">
        <span>Контакты</span>
      </div>
      <hr />
    </div>
  );
}
