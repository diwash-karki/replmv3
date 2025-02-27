import type { InboxSDK as InboxSDKType } from '@inboxsdk/core';
import { loadInboxSDK } from '@inboxsdk/core';

export const initInboxSDK = async () => {
  try {
    const sdk = await loadInboxSDK(2, import.meta.env.VITE_INBOXSDK_APP_ID);

    sdk.Compose.registerComposeViewHandler((composeView) => {
      composeView.addButton({
        title: "My Extension Button",
        iconUrl: chrome.runtime.getURL('icon.png'),
        onClick: () => {
          // Handle button click
          console.log('Button clicked in compose view');
        },
      });
    });

  } catch (error) {
    console.error('Failed to load InboxSDK:', error);
  }
};