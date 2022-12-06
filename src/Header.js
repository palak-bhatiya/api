function Header(){
    return(
        <header className="main-header">
        <div className="header">
          <div className="container">
            <div className="navigation d-flex justify-content-around align-items-center">
              <div className="logo">
                <img src={require('./image/logo.png')} alt="" />
              </div>
              <div className="menu d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none">
                <li><a href="#">home</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">blog</a></li>
              </div>
              <button className="button primary px-20">
                <a href="#">support us</a>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header;