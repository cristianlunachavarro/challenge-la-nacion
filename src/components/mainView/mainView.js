import {useState, useEffect} from 'react'

import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import SubNaBar from "../header/SubNaBar";
import CardFullScreen from "../articles/CardFullScreen";
import Section from "../articles/Section";

import {articles} from "../../helpers/articles.json"

import "../../scss/app.scss";


const FORMAT1 = {articles: 3, className: 'format1', left: 1, right: 2}
const FORMAT2 = {articles: 2, className: 'format2', left: 1, right: 1}
const FORMAT3 = {articles: 2, className: 'format3', left: 1, right: 1}


const layout = [FORMAT1, FORMAT2, FORMAT3]


const MainView = () => {

    const [fetchedArticles, setFetchedArticles] = useState([])
    const [headline, setHeadline] = useState({})

    const getArticles = () => {
        new Promise((res) => setFetchedArticles(articles))
            .catch(() => setFetchedArticles('')
            );
    }

    const getHeadline = () => {
        articles.map((article) => {
            if (article.titular) {
                setHeadline(article)
            }
        })
    }

    useEffect(() => {
        getArticles()
        getHeadline()
    }, [])

    const copyArticles = [...fetchedArticles].filter((article) => article.id !== headline.id)
    copyArticles.reverse()

    return (
        <>
            <NavBar/>
            <div className={'utils__divider'}/>
            <SubNaBar/>
            <CardFullScreen
                article={headline}
            />

            {layout.map(item => {
                let articlesToPass = []
                const articlesNumber = item.articles
                for (let i = 0; i < articlesNumber; i++) {
                    if (copyArticles.length === 0) {
                        return
                    }
                    articlesToPass.push(copyArticles.pop())
                }
                return (
                    <>
                        <Section
                            articles={articlesToPass}
                            className={item.className}
                            left={item.left}
                            right={item.right}
                        />
                        <div className={'utils__divider utils__width-70 utils__center-margin'}/>
                    </>
                )
            })}

            <Footer/>
        </>
    )
}

export default MainView;