class VideoCallPage {
  appIdInput () {
    return cy.get('#appid');
  }

  tokenInput () {
    return cy.get('#token');
  }

  channelInput () {
    return cy.get('#channel');
  }

  micList () {
    return cy.get('.mic-list.dropdown-menu.show .dropdown-item');
  }

  videoList () {
    return cy.get('.profile-list.dropdown-menu.show .dropdown-item');
  }
}

export default new VideoCallPage();