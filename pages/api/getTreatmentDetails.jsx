import clientPromise from "../../mongodb.config";

export default async function UserDetails(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("hospital");
    const treatmentDetails = await db
      .collection("treatment")
      .find({ treatmentId: req.body.id })
      .toArray();
    res.json({ treatmentDetails });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
