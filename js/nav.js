
const createNav = () => {
    let nav = document.querySelector('.navber');
        // クラス名を探して取得する

    nav.innerHTML = `
    

    <header>
        <nav>
            <ul>
                <div class="icon">ARTEMIS</div>
                <li>about</li>
                <li>shop</li>
                <li><a href="news.html">news</a></li>
                <li>contact</li>
                <li id=darkmode>darkmode</li>
                <li><i id="menu" class="fa-solid fa-align-right"></i></li>
            </ul>
        </nav>
    </header>


    <div class="menu">
        <div class="menu-title">
            <h1>ARTEMIS</h1>
        </div>
        <ul>
            <li>about</li>
            <li>shop</li>
            <li><a href="news.html">news</a></li>
            <li>contact</li>
            <li id=darkmode>darkmode</li>
        </ul>
    </div>

    `
}

createNav();
