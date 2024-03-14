# HYBRBASE Assignment

For assignment description, see: https://hybrbase.notion.site/HYBRBASE-Full-stack-Coding-Challenge-29e4c2654fe64a09a17c50c08c9beb69

## Getting Started

### Let's run first time in your local

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now you has first look about this app, but you need do things to make sure it work normaly:

### Set up authentication

#### Create your app and enable APIs:

This repo use `google-auth-library` and `google-spreadsheet` to authetication and run Google Spreadsheet Apis. You will need to create an app at [Google Developers Console](https://console.developers.google.com/) and enable Google Sheets API, as well as Google Drive API.

More detail here: https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication?id=setting-up-your-quotapplicationquot

#### Prepare Service account Credentials:

Follow up this link to create and download your credentials file:
https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication?id=service-account

After follow the link, you will get the credentials file, it look like:

```javascript
{
  "type": "service_account",
  "project_id": "<your project name>",
  "private_key_id": "",
  "private_key": "<long key>",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
  "universe_domain": "googleapis.com"
}

```

The key we need now is `client_email` and `private_key`

#### Prepare ENV file and get documentID:

Create new `.env` file or run command:

```
cp .env.example .env
```

Fill `client_email` and `private_key` to `.env` file:

```shell
GOOGLE_SERVICE_ACCOUNT_EMAIL=<client_email>
GOOGLE_PRIVATE_KEY=<private_key>
GOOGLE_SHEET_ID=
GOOGLE_USER_EMAIL=<your email to see the sheets>
```

Restart the local runner, and run this command to get sheet ID:

```shell
curl  -X POST 'http://localhost:3000/api/sheet/new'
```

Response of above command look like below(or your can get it in the link via email). Copy this `docId` to env file too.

```json
{
  "ok": true,
  "data": { "docId": "158ITRD9YSefgLvYGTJ-RE9TB3WryYEMONj5ayZXXXXX" }
}
```

Now we already for test, open http://localhost:3000 with your browser to see the result.

## Deploy
