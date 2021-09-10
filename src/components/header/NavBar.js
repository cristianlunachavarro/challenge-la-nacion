import nacionLogo from '../../assets/images/nacionLogo.png'
import dropIcon from '../../assets/images/icons/dropIcon.png'
import searchIcon from '../../assets/images/icons/searchIcon.png'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'utils__flex-row'}>
                <div className={'nav-bar__boton nav-bar__left utils__flex-row'}>
                    <boton>
                        {'SELECCIONES'}
                    </boton>
                    <img src={dropIcon} className={'nav-bar__icons'} alt={'dropIcon'}/>
                </div>
                <div className={'nav-bar__boton nav-bar__left'}>
                    <boton>
                        {'BUSCAR'}
                    </boton>
                    <img src={searchIcon} className={'nav-bar__icons'} alt={'searchIcon'}/>
                </div>
            </div>
            <div className={'nav-bar__middle'}>
                <img src={nacionLogo} className={'nav-bar__logo'} alt={'nacionLogo'}/>
            </div>
            <div className={'utils__flex-row'}>
                <div className={'nav-bar__boton nav-bar__right nav-bar__boton-l'}>
                    <boton>
                        {'SUSCRIBITE'}
                    </boton>
                    <img src={searchIcon} className={'nav-bar__icons utils__display-768'} alt={'searchIcon'}/>
                </div>
                <div className={'nav-bar__boton nav-bar__right utils__display-none-768 nav-bar__boton-r'}>
                    <boton>
                        {'INSCRIBITE'}
                    </boton>
                </div>
            </div>
        </div>
    )
}

export default NavBar