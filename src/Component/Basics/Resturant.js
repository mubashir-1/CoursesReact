import React, { useState } from 'react'
import "./Style.css";
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((currentElement) => {
            return currentElement.year;
        })
    ), 'All Courses',
]


export default function Resturant() {
    const [menuData, setmenuData] = useState(Menu)
    const [menuList, setmenuList] = useState(uniqueList)

    const filterItem = (year) => {
        if (year === 'All Courses') {
            return setmenuData(Menu);

        }
        const updatedList = Menu.filter((currentElement) => {
            return currentElement.year === year;
        })
        setmenuData(updatedList)
    }

    return (
        <div>
            
            <Navbar menuList={menuList} filterItem={filterItem} />
            <MenuCard menuData={menuData} />
        </div>
    )
}
