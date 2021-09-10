import * as url from "url";

const CardFullScreen = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.article.imagen})`}} className={'card-fullscreen'}>
            <div className={'card-fullscreen__card-container'}>
                <div className={'card-fullscreen__text-container'}>
                    <div className={'card-fullscreen__infografia'}>
                        {'INFOGRAFÍA'}
                    </div>
                    <div className={'card-fullscreen__title'}>
                        {props.article.titulo}
                    </div>
                    <div className={'card-fullscreen__author utils__bold'}>
                        {`Por ${props.article.autor}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFullScreen;