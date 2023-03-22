import "./Topbar.css"

export default function Topbar(){
    return(
        <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topListItem">
                <li className="topList">Name</li>
                <li className="topList">About</li>
                <li className="topList">Contact</li>
                <li className="topList">Write</li>
                <li className="topList">LogOut</li>
            </ul>
        </div>
        <div className="topRight">
        <img
        className="topImg"
         src="https://static.toiimg.com/thumb/msid-93061686,imgsize-33668,width-400,resizemode-4/93061686.jpg"alt="A person hiking in the mountains"/>
         {/* alt="" */}
         <i className=" topSearchIcon fa fa-search" aria-hidden="true"></i>
        </div>

        </div>
    )
}