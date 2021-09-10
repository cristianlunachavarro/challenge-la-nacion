
const Article = (props) => {

    const baseClassName = `${props.className}__article`
    return (
        <div className={baseClassName}>
            <div className={`${baseClassName}__author2`}>
                {`Por ${props.article.autor}`}
            </div>
            <div className={`${baseClassName}__bajada2`}>
                {props.article.bajada}
            </div>
            <div className={`${baseClassName}__title`}>
                {props.article.titulo}
            </div>
            <div className={`${baseClassName}__bajada`}>
                {props.article.bajada}
            </div>
            <div className={`${baseClassName}__author`}>
                {`Por ${props.article.autor}`}
            </div>
            <div>
                <img src={props.article.imagen} className={`${baseClassName}__image`}/>
            </div>
        </div>
    )
}

export default Article;