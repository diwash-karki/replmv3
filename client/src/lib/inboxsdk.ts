import { InboxSDK, ComposeViewHandler } from '@inboxsdk/core';

export const initInboxSDK = async () => {
  try {
    const sdk = await InboxSDK.load(2, import.meta.env.VITE_INBOXSDK_APP_ID);
    
    sdk.Compose.registerComposeViewHandler((composeView: ComposeViewHandler) => {
      composeView.addButton({
        title: "My Extension Button",
        iconUrl: 'https://example.com/icon.png',
        onClick: (event) => {
          // Handle button click
          console.log('Button clicked in compose view');
        },
      });
    });

  } catch (error) {
    console.error('Failed to load InboxSDK:', error);
  }
};
