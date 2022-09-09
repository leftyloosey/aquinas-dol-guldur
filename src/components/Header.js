function Header() {
    return (
    <div class="container-fluid mt-1">
    <header class="headerflex">
        <span>
            <img src="me.jpg" alt="img"/>
        </span>
        <span id="span-h">
            david hardin
        </span>
    

    <div id="hbox">
        <span >
            <a class="text-decoration-none text-dark" href="#section-about">about</a>
        </span>

        <span>
            <a class="text-decoration-none text-dark" href="#section-work">work</a>
        </span>

        <span>
            <a class="text-decoration-none text-dark" href="#section-contact">contact</a>
        </span>
    </div>
</header>
</div>
    )
}

export default Header