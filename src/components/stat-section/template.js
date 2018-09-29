const template = (html) => html`

  <section class="section">
    <div class="grid">

    <!--
    can't implement stat-item component to work with attributes, so I'll disable this slot tag and use
    raw html instead
    <slot></slot>
    -->

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
      </svg>
      <span>
        <span class="number">538</span><br>
        <span class="detail">Attendees</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M9,3A4,4 0 0,1 13,7H5A4,4 0 0,1 9,3M11.84,9.82L11,18H10V19A2,2 0 0,0 12,21A2,2 0 0,0 14,19V14A4,4 0 0,1 18,10H20L19,11L20,12H18A2,2 0 0,0 16,14V19A4,4 0 0,1 12,23A4,4 0 0,1 8,19V18H7L6.16,9.82C5.67,9.32 5.31,8.7 5.13,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M9,11A1,1 0 0,0 8,12A1,1 0 0,0 9,13A1,1 0 0,0 10,12A1,1 0 0,0 9,11Z" />
      </svg>
      <span>
        <span class="number">25</span><br>
        <span class="detail">Speakers</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M5,1C5,3.7 6.56,6.16 9,7.32V22H11V15H13V22H15V7.31C17.44,6.16 19,3.7 19,1H17A5,5 0 0,1 12,6A5,5 0 0,1 7,1M12,1C10.89,1 10,1.89 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3C14,1.89 13.11,1 12,1Z" />
      </svg>
      <span>
        <span class="number">30</span><br>
        <span class="detail">Volunteers</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
      </svg>
      <span>
        <span class="number">40</span><br>
        <span class="detail">Sponsors</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M3,4H21A1,1 0 0,1 22,5V16A1,1 0 0,1 21,17H22L24,20V21H0V20L2,17H3A1,1 0 0,1 2,16V5A1,1 0 0,1 3,4M4,6V15H20V6H4Z" />
      </svg>
      <span>
        <span class="number">20</span><br>
        <span class="detail">Talks</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
      </svg>
      <span>
        <span class="number">204</span><br>
        <span class="detail">Codelabs<br>Participant</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z" />
      </svg>
      <span>
        <span class="number">324</span><br>
        <span class="detail">Codelabs<br>Participant</span>
      </span>
    </div>

    <div class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8M20.3,12L12,20.3L3.7,12L12,3.7L20.3,12M11,15.5H12.5V17H11V15.5M12,6.95C14.7,7.06 15.87,9.78 14.28,11.81C13.86,12.31 13.19,12.64 12.85,13.07C12.5,13.5 12.5,14 12.5,14.5H11C11,13.65 11,12.94 11.35,12.44C11.68,11.94 12.35,11.64 12.77,11.31C14,10.18 13.68,8.59 12,8.46C11.18,8.46 10.5,9.13 10.5,9.97H9C9,8.3 10.35,6.95 12,6.95Z" />
      </svg>
      <span>
        <span class="number">After<br>Party</span>
      </span>
    </div>

  </section>

`;

export { template };

