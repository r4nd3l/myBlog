---
layout: post
title: "Windows Phone"
description: "Lumia 640 get a new life - aka Microfost Windows Phone"
tags: [ Development]
---

Giving a new life for Lumia 640 (Microsoft Windows Phone)

Lumia 640
- https://www.windowslatest.com/2017/08/27/uninstall-default-apps-in-windows-10-mobile/
- https://www.windowscentral.com/how-to-uninstall-oem-app-windows-phone 

Lumia 640 - Win10
- https://youtu.be/E_ZKLPFGkYs

Lumia 640 - WP8 to WP10
- https://handsontek.net/update-windows-phone-8-1-windows-mobile-10/

```
OTC Tool Server Issues?! -> FIX HERE

For 32-bit applications that are running on 32-bit OSs and for 64-bit applications that are running on 64-bit OSs, update the following subkey values:
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v2.0.50727]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001

For 32-bit applications that are running on 64-bit OSs, update the following subkey values:
[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v2.0.50727]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v4.0.30319]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
```


- https://windowsreport.com/windows-10-mobile-registry/
- http://allaboutwindowsphone.com/features/item/23400_How_to_Rescue_an_old_Insiders-.php
+ https://www.windowslatest.com/2016/12/02/enable-continuum-support-lumia-phone/
+ https://lowendmac.com/2016/microsoft-lumia-435-upgraded-to-windows-10-mobile/

Lumia 640 - Windows 10 Mobile Build 14393.1066 Changelog
- https://thewincentral.com/windows-10-mobile-build-14393-1066-live-now-non-insiders-changelog/

Lumia 640 - Install appx without trusted certificate
- https://stackoverflow.com/questions/23812471/installing-appx-without-trusted-certificate

Lumia 640 - build numbers
- https://en.wikipedia.org/wiki/Windows_10_Mobile_version_history

Lumia 640 - Deplox Tool
- http://bsubramanyamraju.blogspot.com/2016/02/windows-10-uwp-apps-how-to-deploy-appx.html
+ https://developer.microsoft.com/en-US/windows/downloads/windows-sdk/

- https://docs.microsoft.com/en-us/previous-versions/windows/apps/mt203806(v=vs.140)?redirectedfrom=MSDN

```
DeployAppx.exe tool from Windows 10 IoT Core images. That tool apparently works correctly on phones as well and it can list, uninstall, reinstall, sideload apps as well as register an app directly from extracted files in a directory. Using this method, it is almost always possible to install the app again directly from Store app if you would like to install it again.
```

