const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `


    <div class="footer">
        <div class="footer-conteiner">
            <div class="footer-contents">
                <h2>ARTEMIS</h2>
                <ul>
                    <li class="twiter">twiter</li>
                    <li class="insta">instagram</li>
                    <li class="facebook">facebook</li>
                    <li class="youtube">youtube</li>
                </ul>
                <div class="footer-tel">
                    06-xxxx-xxxx
                </div>
                <div class="footer-mail">
                    0mailxxx@gmail.com
                </div>
                <div class="footer-c">
                    <div class="footer-c-c">©️</div>
                    <div class="footer-c-content">
                        2018-2022 ARTEMIS. Inc.
                    </div>
                </div>
            </div>
            <div class="footer-image">
                <div class="footer-image-01">
                    <img src="./img/img4.jpg" alt="">
                </div>
                <div class="footer-image-02">
                    <img src="./img/img5.jpg" alt="">
                </div>
            </div>
        </div>
    </div>


    `
}

createFooter();
