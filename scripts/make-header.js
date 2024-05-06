function buildPage() {
    var html = ' ';
    <div class="wrapper">
        <div class="logo">
          <h1>Main Page</h1>
        </div>
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div> 
        <ul class="menu off-screen">
          <li>
            <a href="projects.html">Projects</a>
          </li>
          <li class="dropdown">
            <a href="#">Examples</a>
            <ul class="dropcon">
              <li><a href="projects/toggle.html">Toggles</a></li>
              <li><a href="#">link 2</a></li>
              <li><a href="#">link 3</a></li>
            </ul>
          </li>
          <li>
            <a href="">XXXXX</a>
          </li>
          <li>
            <a href="">XXXX</a>
          </li>
          <li>
            <a href="">XXXXXXXX</a>
          </li>
        </ul>
      </div>
    $('#make').empty().append(html);
}