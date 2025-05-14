import { When } from '@badeball/cypress-cucumber-preprocessor';
import videoCallPage from '../pages/videoCallPage';

When(/^I enter the "(.*)"$/, (field) => {
  cy.fixture('credentials').then((data) => {
    const inputMap = {
      appId: videoCallPage.appIdInput(),
      token: videoCallPage.tokenInput(),
      channel: videoCallPage.channelInput()
    };
    inputMap[field].clear().type(data[field]);
  });
});

When(/^I select from a list of "(.*)"$/, (input) => {
  cy.get('button').contains(input).click();

  const listGetterMap = {
    'Mics': videoCallPage.micList,
    'Profiles': videoCallPage.videoList,
  };

  const getList = listGetterMap[input];
  if (!getList) {
    throw new Error(`No list defined for input: ${input}`);
  }

  getList().then(($items) => {
    const count = $items.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($items[randomIndex]).click();
  });
});