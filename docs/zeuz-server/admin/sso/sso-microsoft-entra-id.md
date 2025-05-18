---
id: sso-microsoft-entra-id
title: Microsoft Entra ID / Azure Active Directory
---

:::note
Also known as:
- **Azure Active Directory**
- **Active Directory**
- **Microsoft Single Sign On (SSO)**
:::


1. Open Microsoft Entra ID dashboard from the Azure developer portal.

![Open Entra ID dashboard](/img/how-tos/admin/sso/open-entra-id-dashboard.png)

2. Go to "App Registrations".

![Go to app registration](/img/how-tos/admin/sso/goto-app-registrations.png)

3. Click on "New registration".

![Click on new registration](/img/how-tos/admin/sso/click-on-new-registration.png)

4. Register application by filling out the information as specified. The
   redirect URI should be of the form:

   ```
   https://<ZEUZ-URL>/Home/superAdminFunction/auth-integration/ad-callback/
   ```

![Register ZeuZ application](/img/how-tos/admin/sso/register-zeuz-application.png)

5. Copy the "Application (client) ID" and "Directory (client) ID" and take note
   of them somewhere. Next, click on the "Add a certificate or secret".

![Copy client and tenant ID](/img/how-tos/admin/sso/copy-client-tenant-id.png)


6. Add a client secret. Description can be anything you want.

![add-client-secret](/img/how-tos/admin/sso/add-client-secret.png)

7. Copy the client secret.

![Copy client secret](/img/how-tos/admin/sso/copy-client-secret.png)

8. Open the "SSO" page from "Admin > Integrations > SSO" menu in ZeuZ.

![Open the SSO page in ZeuZ](/img/how-tos/admin/sso/open-sso-in-zeuz.png)

9. Fill out the information for "Active Directory" tab. Put the "AD credentials"
   in the following format based on the values you've copied earlier:

   ```json
   {
      "client_id": "<APPLICATION-CLIENT-ID>",
      "client_credential": "<CLIENT-SECRET>",
      "tenant_id": "<DIRECTORY-TENANT-ID>"
   }
   ```

![Setup Active Directory information](/img/how-tos/admin/sso/setup-ad-information.png)


10. Logout. You should now see the "Login with Microsoft" button.

![Sign in with Microsoft](/img/how-tos/admin/sso/sign-in-with-microsoft.png)
