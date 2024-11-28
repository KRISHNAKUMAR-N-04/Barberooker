import React from "react";
import { NavbarLater } from "./Navbar";
import Footer from "./Footer";
import './StylistBook.css';

export default function StylistBook(){
    return(
        <div className="stylist">
            <NavbarLater/>
            <div className="body-stylist">
                <div className="book-content-left">
                    hella fellas!!
                </div>
                <div className="book-content-right">
                    hella fellas!!
                </div>
            </div>
            <Footer/>
        </div>
    )
}