import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const HEADER_ROW = ["name", "email", "phone", "company", "package"];
export const SHEET_NAME = "Packages";
export const DOC_TITLE = "HYBRBASE";

type RowData = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  package?: string;
};

type GetRowsOptions =
  | {
      offset?: number | undefined;
      limit?: number | undefined;
    }
  | undefined;

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

export const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID || "",
  serviceAccountAuth
);

export const loadSheet = async (name: string) => {
  await doc.loadInfo();
  let sheet = doc.sheetsByTitle[name];
  if (!sheet) {
    sheet = await doc.addSheet({ title: name, headerValues: HEADER_ROW });
  }
  return sheet;
};

export const appendRow = async (name: string, data: RowData) => {
  const sheet = await loadSheet(name);
  await sheet.addRow(data);
};

export const getRows = async (
  name: string,
  options: GetRowsOptions = {
    offset: 1,
    limit: 1,
  }
) => {
  const sheet = await loadSheet(name);
  return sheet.getRows(options);
};

export const createNewSpreadsheetDocument = async () => {
  const doc = await GoogleSpreadsheet.createNewSpreadsheetDocument(
    serviceAccountAuth,
    {
      title: DOC_TITLE,
    }
  );

  await doc.loadInfo();
  await doc.share(process.env.GOOGLE_USER_EMAIL || "", { role: "writer" });
  return doc.spreadsheetId;
};
