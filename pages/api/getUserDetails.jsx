import clientPromise from "../../mongodb.config";

export default async function UserDetails(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const userEmail = req.body.email;
    if (userEmail === "invalid") {
      const userDetails = await db
        .collection("patient")
        .find({ patientId: req.body.id })
        .toArray();
      res.json({ userDetails });
    } else {
      const userDetails = await db
        .collection("patient")
        .find({ email: userEmail })
        .toArray();
      res.json({ userDetails });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
