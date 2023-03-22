import "../pages/home/Home"
import "./Header.css"

export default function Header() {
    return (
        <div className='Header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React and Node </span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1649933693.jpg" alt="" />
        </div>
    )
}
