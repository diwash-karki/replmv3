/// <reference types="chrome" />
import { loadInboxSDK } from '@inboxsdk/core';

const initInboxSDK = async () => {
  try {
    const sdk = await loadInboxSDK(2, import.meta.env.VITE_INBOXSDK_APP_ID);

    // Add compose button
    sdk.Compose.registerComposeViewHandler((composeView) => {
      composeView.addButton({
        title: "My Extension Button",
        iconUrl: chrome.runtime.getURL('icon.png'),
        onClick: () => {
          console.log('Button clicked in compose view');
        },
      });
    });

  } catch (error) {
    console.error('Failed to load InboxSDK:', error);
  }
};

initInboxSDK();