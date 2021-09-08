import nacionLogo from '../../assets/images/nacionLogo.png'

import fbIcon from '../../assets/images/icons/fbIcon.png'
import twitterIcon from '../../assets/images/icons/twitterIcon.png'
import rssIcon from '../../assets/images/icons/rssIcon.png'
import igIcon from '../../assets/images/icons/igIcon.png'
import apple from '../../assets/images/appleIcon.png'
import google from '../../assets/images/googleIcon.png'


const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'utils__width-100 utils__display-768 utils__text-center'}>
                <img src={nacionLogo} className={'footer__logo'} alt={'nacionLogo'}/>
                <div className={'utils__divider utils__margin-top-bottom'}/>
            </div>
            <div className={'utils__flex-row'}>
                <img src={fbIcon} className={'footer__icon'} alt={'fbIcon'}/>
                <img src={twitterIcon} className={'footer__icon'} alt={'twitterIcon'}/>
                <img src={rssIcon} className={'footer__icon'} alt={'rssIcon'}/>
                <img src={igIcon} className={'footer__icon'} alt={'igIcon'}/>
            </div>
            <div>
                <img src={nacionLogo} className={'footer__logo utils__display-none-768'} alt={'nacionLogo'}/>
            </div>
            <div className={'33'}>
                <img src={apple} className={'footer__image'} alt={'apple'}/>
                <img src={google} className={'footer__image'} alt={'google'}/>
            </div>
        </div>
    )
}

export default Footer;