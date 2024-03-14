import { createNewSpreadsheetDocument } from "@/libs/google-sheet";

export async function POST() {
  try {
    const docId = await createNewSpreadsheetDocument();

    return Response.json({ ok: true, data: { docId } });
  } catch (error) {
    return Response.json({ ok: false, error: "Something wrong!" });
  }
}
