import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import SubNaBar from "../header/SubNaBar";
import "../../scss/app.scss";


const MainView = () => {
    return (
        <>
            <NavBar/>
            <div className={'utils__divider'}/>
            <SubNaBar/>
            <Footer/>
        </>
    )
}

export default MainView;