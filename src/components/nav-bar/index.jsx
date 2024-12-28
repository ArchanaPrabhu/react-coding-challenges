import { useState } from "react"
export default function NavBar() {
    const [pageName, setPageName] = useState("Home")
    const handleClick = (newPageName) => {
        pageName != newPageName ? setPageName(newPageName) : null
    }
    return (<>
        <div>
            <div>
                <a style={{ margin: '0 10px' }} onClick={() => handleClick("Home")}>Home</a>
                <a style={{ margin: '0 10px' }} onClick={() => handleClick("News")}>News</a>
                <a style={{ margin: '0 10px' }} onClick={() => handleClick("Contact")}>Contact</a>
                <a style={{ margin: '0 10px' }} onClick={() => handleClick("About")}>About</a>
            </div>
            <div className="card w-20 ma-0">
                <section className="card-text" data-testid="tab-content">
                    <span> {pageName} </span>
                </section>

            </div>
        </div>
    </>
    )
}