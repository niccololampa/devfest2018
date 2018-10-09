const template = html => html`
  <div class="header-space"></div>

  <!-- Edits by Niccolo Lampa -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CodeLabs Pages</title>
    <link rel="stylesheet" href="style.styl">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Noto|Roboto" rel="stylesheet">
  </head>
  <body>

    <main>
      <div class= "container">
        <header>
          <h1>CodeLabs</h1>
        </header>
      </div>

      <div class="welcome">
        <img class="welcome-image" src="codelabs-logo.png" alt="code-labs-logo">
        <p class= "greeting">Welcome to DevFest 2018 CodeLabs</p>
      </div>


      <div class="container">
        <div class= "code-labs-grids">

          <div class = "box firebase-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for Firebase Codelabs</h2>
              </div>
              <div class="duration-date-section">
                <p class= "minutes-date">79min</p>
                <p class=>Updated Sept 12,2018</p>
              </div>
              <div class="icon-button-section">
                <img class="logo" src="firebase-logo.png" alt="firebase">
                <button class= "start-button firebase">Start</button>
              </div>
            </a>
          </div>

          <div class = "box assistant-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for Assistant Codelabs</h2>
              </div>
                <div class="duration-date-section">
                  <p class= "minutes-date">79min</p>
                  <p class=>Updated Sept 12,2018</p>
                </div>
                <div class="icon-button-section">
                  <img class="logo" src="assistant-logo.png" alt="assistant">
                  <button class= "start-button assistant">Start</button>
                </div>
            </a>
          </div>

          <div class = "box ml-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for ML Codelabs</h2>
              </div>
              <div class="duration-date-section">
                <p class= "minutes-date">79min</p>
                <p class=>Updated Sept 12,2018</p>
              </div>
              <div class="icon-button-section">
                <img class="logo" src="ml-logo.png" alt="machine-learning">
                <button class= "start-button ml">Start</button>
              </div>
            </a>
          </div>

          <div class = "box web-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for Web Codelabs</h2>
              </div>
              <div class="duration-date-section">
                <p class= "minutes-date">79min</p>
                <p class=>Updated Sept 12,2018</p>
              </div>
              <div class="icon-button-section">
                <img class="logo" src="web-logo.png" alt="google">
                <button class= "start-button web">Start</button>
              </div>
            </a>
          </div>

          <div class = "box android-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for Android Codelabs</h2>
              </div>
              <div class="duration-date-section">
                <p class= "minutes-date">79min</p>
                <p class=>Updated Sept 12,2018</p>
              </div>
              <div class="icon-button-section">
                <img class="logo" src="android-logo.png" alt="android">
                <button class= "start-button android">Start</button>
              </div>
            </a>
          </div>

          <div class = "box cloud-box">
            <a href="" class="grid-anchor">
              <div class= "title-codelab">
                <h2 class= "code-lab-title">Title for Cloud Codelabs</h2>
              </div>
              <div class="duration-date-section">
                <p class= "minutes-date">79min</p>
                <p class=>Updated Sept 12,2018</p>
              </div>
              <div class="icon-button-section">
                <img class="logo" src="cloud-logo.png" alt="cloud">
                <button class= "start-button cloud">Start</button>
              </div>
            </a>
          </div>

        </div>

      </div>
    </main>
  </body>

  <footer-section></footer-section>
`;

export { template };
