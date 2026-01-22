---
sidebar_position: 3
---

import PurchaseBanner from '@site/src/components/PurchaseBanner';

# Account Section

<PurchaseBanner />

## 🌟 Q1: Unable to log in to Mi Forum account?

First, please check your network status and try multiple times. It is recommended to log in using the official Mi Forum community client first, and then set your default browser to Chrome or Microsoft Edge. Do not use the system's built-in browser, and it is best not to use browsers like Quark or QQ browser.

<mark>The following issues have been fixed in version 1.0.2</mark>

~~According to feedback from the group, the reason for being unable to log in to the Mi Forum account (AstroBox keeps spinning) is that your avatar is the default avatar. You can try uploading an avatar in the Mi Forum.~~

## 🌟 Q2: Unable to log in to Xiaomi account?

You can log in using <mark>phone number or Mi ID or email + password</mark>.

If you cannot log in with your phone number in an overseas region, please wait for subsequent version updates.

If login keeps spinning: You can try checking if there are wearable devices under the account, changing your password, etc. If it still doesn't work, please provide the log and give us feedback.

## Q3: Xiaomi account login in an infinite loop of two-step verification?

If you are using Wi-Fi, switch to mobile data; otherwise, switch to Wi-Fi; if it still doesn't work, try again later.

### About Xiaomi account login

Some AstroBox functions involve calling Xiaomi account service interfaces to access resources or enable specific device operations. During this process, user-provided account credentials (including username, password, or authorization tickets, etc.) will be directly submitted to Xiaomi's official servers to complete identity verification.

This software will not store, record, or tamper with user credentials without the user's consent. However:

- The security of this transfer behavior completely depends on Xiaomi's server and its interface implementation mechanism, which is beyond the control or guarantee of this software.

- If user accounts are restricted, login fails, or data problems occur due to interface changes, service policy adjustments, or security mechanism triggers, this software and its developers will not be responsible for related liabilities;

- Users should carefully judge whether to use such functions and bear full responsibility for the risks involved in using account credentials.

We strongly recommend that users operate only in a trusted network environment and evaluate their account security requirements before authorizing login.

The code for obtaining the Authkey for Xiaomi account login has been fully open-sourced. If you have any questions, please check it yourself:

https://github.com/AstralSightStudios/AstroBox-Public/blob/main/src-tauri/src/auth.rs

:::note

This tutorial is written by Yulimfish, Chuan., wuhaiqi, and others. I (lladlam) am only a third-party re-publisher. The copyright belongs to Yulimfish, Chuan., wuhaiqi, and others.

:::