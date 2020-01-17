import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        let data = [
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-015-cart', sidebarListText: 'Construction'},
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-010-tank-1', sidebarListText: 'House Remodel'},
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-002-welding', sidebarListText: 'Interior Design'},
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-004-walkie-talkie', sidebarListText: 'Floors & Roofs'},
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-042-monitor', sidebarListText: 'Plumbing'},
            {sidebarListLink: "category-details-left-sidebar", sidebarListIcon: 'flaticon-050-boxes', sidebarListText: 'Electricity'}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <li key={i}><a href={val.sidebarListLink}><i className={val.sidebarListIcon} />{val.sidebarListText}</a></li>
            )
        })

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Services</h3>
                        <ul className="sidebar-list">
                            {Datalist}
                        </ul>
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Download brochure</h3>
                        <ul className="sidebar-list">
                            <li><a href="/"><i className="fa fa-file-pdf-o" />Brochures.PDF</a></li>
                            <li><a href="/"><i className="fa fa-file-word-o" />Brochures.DOC</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;