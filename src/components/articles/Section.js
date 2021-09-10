import Article from "./Article";

const Section = (props) => {

    return (
        <div className={props.className}>
            <div className={`${props.className}__left`}>
                {props.articles.slice(0, props.left).map((article) => (
                    <Article article={article} className={props.className}/>
                ))}
            </div>
            <div className={`${props.className}__divider`}/>
            <div className={`${props.className}__right`}>
                {props.articles.slice(props.left, props.left + props.right).map((article) => (
                    <Article article={article} className={props.className}/>
                ))}
            </div>
        </div>
    )
}

export default Section;