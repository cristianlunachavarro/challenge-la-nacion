import weatherIcon from '../../assets/images/icons/weatherIcon.svg'
import clubIcon from '../../assets/images/icons/clubIcon.png'

const SubNavBar = () => {
    return (
        <div className={'sub-nav-bar'}>
            <div>
                <span className={'utils__bold utils__blue utils__display-none-320'}>{'Dolar: '} </span>
                <span>{'BNA:'}</span><span className={'utils__bold'}>{'$00,00 / $00,00'} </span>
                <span>{'Blue: '}</span><span className={'utils__bold'}> {'$00,00/ $00,00'}</span>
            </div>
            <div className={'sub-nav-bar__center'}>
                <img src={weatherIcon} className={'sub-nav-bar__club-icon utils__center utils__display-none-768'}/>
                <span className={'utils__bold utils__display-none-768'}>{'0.00º '}</span>
                <span className={'utils__display-none-768'}>{'Capital Federal'}</span>
            </div>
            <div className={'utils__blue utils__display-none-768'}>
                {'Review Newsletters'}
            </div>
            <div className={'sub-nav-bar__right utils__display-none-320'}>
                <img src={clubIcon} className={'sub-nav-bar__club-icon utils__center utils__display-none-320'}/>
                <span className={'utils__blue utils__display-none-320'}>{'Descubrí tu beneficios'}</span>
            </div>
        </div>
    );
}

export default SubNavBar;