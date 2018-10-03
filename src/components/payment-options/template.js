const template = (html) => html`

  <section class="section">
    <h1>Payment Options</h1>
    <div class="grid">

      <span class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
      <h2>Online Option</h2>
      Go to
      <a href="http://devfestphilippines.eventbrite.com">devfestphilippines.eventbrite.com</a>
      </span>

      <span class="cell">
      <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" />
      </svg>
      <h2>Bank Option</h2>

      <p></p>
      To those who doesn't need an official receipt.<br>
      You can deposit your payment at the bank account details below:
      </p>

      <span class="grid">
        <p>
        Bank: UnionBank<br>
        Account Name: Ralph Vincent Regalado<br>
        Account No: xxxxxxxx
        </p>
        <p>
        Bank: BDO<br>
        Account Name: Juvar Abrera<br>
        Account No: xxxxxxxx
        </p>
      </span>

      <p>
      Send the scanned deposit slip to<br>
      devfestphilippines@gmail.com<br>
      Follow the email format below:<br><br>

      Subject: DevFest - Payment<br>
      Body: Full Name, Address, Company, Position
      </p>


      </span>


    </div>

    //added button  by Niccolo Lampa
    <a href="https://www.eventbrite.com/e/devfest-philippines-2018-tickets-49635185175" target="_blank" rel="noopener" class="button">
            <svg class="button-icon" viewBox="0 0 24 24">
              <path d="M4,4A2,2 0 0,0 2,6V10A2,2 0 0,1 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12A2,2 0 0,1 22,10V6A2,2 0 0,0 20,4H4M4,6H20V8.54C18.76,9.25 18,10.57 18,12C18,13.43 18.76,14.75 20,15.46V18H4V15.46C5.24,14.75 6,13.43 6,12C6,10.57 5.24,9.25 4,8.54V6Z"></path>
            </svg>
            BUY TICKET
          </a>

  </section>

`;

export { template };

