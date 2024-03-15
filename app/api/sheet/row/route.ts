import { appendRow } from "@/libs/google-sheet";
import { SHEET_NAME } from "@/libs/google-sheet";
import { buildAdminMail, sendMail } from "@/libs/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await appendRow(SHEET_NAME, body);
    await sendMail(buildAdminMail(body));

    return Response.json({ ok: true, message: "Successful!" });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "Something wrong!" });
  }
}
