import "../sidebar/slidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitles">About Me</span>
                <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/04/yash-spills-some-beans-about-kgf-chapter-3-001.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur sit voluptas rem reprehenderit pariatur sint vitae quidem. Id, quis unde.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}