---
layout: post
title: "Instagram feed"
description: "Shortlink how to use Instagram API in a custom way"
tags: [ Linux , Shell , command, Instagram, Development ]
---


## Instrgram feed 
source: 
[GitHub - stevenschobert/instafeed.js: A simple Instagram JavaScript plugin for your website](https://github.com/stevenschobert/instafeed.js)

Facebook for developers:
App ID: 541712343866124
App Secret: 1a17d67f1484f1234726d6f5c1510367
Display Name: s4mple.team
Contact email: s4mple.team@gmail.com

Facebook login:
acc: s4mple.team@gmail.com
pw: s3cretP@ssword

Links:
[Get Access Tokens and Permissions - Instagram Platform - Documentation - Facebook for Developers](https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions)

[Long-Lived Tokens - Instagram Platform - Documentation - Facebook for Developers](https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens)

Facebook developer dashboard:
[Login into Facebook](https://developers.facebook.com/apps/541712343866124/dashboard/)


---
Instagram Display API, created my redirect_uri on ngrok and correctly assign my app_id.

```
{
"error_type": "OAuthException",
"code": 400,
"error_message": "Insufficient developer role"
}
```

Fixing code:

```
https://api.instagram.com/oauth/authorize
  ?app_id={app-id}
  &redirect_uri={redirect-uri}
  &scope=user_profile,user_media
  &response_type=code
```

Solution:
Remove everything from Instagram > Apps and Websites:
- Active
- Tester invites

Head to - [Login into Facebook](https://developers.facebook.com/apps/541712343866124/roles/roles/)

Go to Roles > Instagram Users and add your Instagram account. Then go to https://www.instagram.com/accounts/manage_access/ to accept the Tester Invite from your app.

Head to the browser and paste:

```
https://api.instagram.com/oauth/authorize?client_id=541712343866124&redirect_uri=https://s4mpleteam.herokuapp.com/&scope=user_profile,user_media&response_type=code&state=1
```

Then click `Agree` and you will get a URL with a code like:

```
https://s4mpleteam.herokuapp.com/?code=AQBWEfTyy24sWBfemSyxQTBjsBO6GGj52eTjaCcjV4k-aHwqHFwZm42Rk2UUqU2bSCfBrFaNhNbnol4ODHhTe2cjoidkqGysPOiy2pL7g6EcPr-QtfVvOTxm7aprBJcYH0dUNo0lMEUc8jTE3QmhYUQXv6iGT8VFj1O4sU6iGyRck0JLD2gt3hHJ1oNzsxm4KEo1Q1234lEPRmhCPbxdz5c-t1C8fyTmuwjnW43amDQxSg&state=1#_
```

Copy the code part from it, like 

`AQBWEfTyy24sWBfemSyxQTBjsBO6GGj52eTjaCcjV4k-aHwqHFwZm42Rk2UUqU2bSCfBrFaNhNbnol4ODHhTe2cjoidkqGysPOiy2pL7g6EcPr-QtfVvOTxm7aprBJcYH0dUNo0lMEUc8jTE3QmhYUQXv6iGT8VFj1O4sU6iGyRck0JLD2gt3hHJ1oNzsxm4KEo1Q1234lEPRmhCPbxdz5c-t1C8fyTmuwjnW43amDQxSg&state=1`

Details:
link - [Login into Facebook](https://developers.facebook.com/apps/541712343866124/instagram-basic-display/basic-display/)
Instagram App ID: 538231234342448
Instagram App Secret: c3091bcae77df01cc123479af199968a
Instagram Display Name: s4mple.team

Sample token: (from the link - provided)

`IGQVJWQlBfckQ5dVZAsR2FTaXlWTEp3ZAjZA3aVV2U1234ZA29yQzNsVE1zaUFwNkc5Ym81ZAlZA5bTBieU1zbUdCamNZAM2I1dGQ4cDVzdmlhQVBoWVhrYlVkcWJQSzBZAZAEdnc2dleE1tbjl1a2x5WkFWNHY1SgZDZD`

Paste this into the code: (accessToken)

```
// InstaFeed Custom settings
document.addEventListener("DOMContentLoaded", function() {
    let userFeedMedia = new Instafeed({
        get: 'user',
        clientId: '538231234342448',
        target: "instafeed_media_instagram",
        resolution: 'standard_resolution',
        accessToken: 'IGQVJWQlBfckQ5dVZAsR2FTaXlWTEp3ZAjZA3aVV2U1234ZA29yQzNsVE1zaUFwNkc5Ym81ZAlZA5bTBieU1zbUdCamNZAM2I1dGQ4cDVzdmlhQVBoWVhrYlVkcWJQSzBZAZAEdnc2dleE1tbjl1a2x5WkFWNHY1SgZDZD',
        sortBy: 'most-recent',
        limit: 12,
        links: true,
        template:'<div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative cursor-pointer shadow-lg rounded-lg media_container">' +
        '<a href="{{link}}" target="_blank">' +
        '<img src="{{image}}" title="{{caption}}" class="block w-full rounded-lg border bg-center bg-cover bg-no-repeat flex items-center justify-center">' +
        '<div class="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 bg-yellow-300 rounded-lg _overlay">' +
        '<div class="text-2xl flex text-white absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">' +
        '<span class="mr-2 fas fa-external-link-square-alt"></span>' +
        '<p class="font-bold">Next</p>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>'
    });

    userFeedMedia.run();
});
```

