import React from 'react';
import './ContactsPage.css'
import PageWrapper from '../../components/PageWrapper/index'
import { Link } from "react-router-dom";

export default function ContactsPage() {
    return (
        <div>
            <PageWrapper>
                 <div className="breadcrumbs">
                 <p> <a href="/">Главная/</a> <a href="/Contacts">
        Контакты/...</a></p>
                 </div>
                <hr />
                <div className="contacts">
                    <span>Контакты</span>
                </div>
                <hr/>
            </PageWrapper>
            
        </div>
    )
}



