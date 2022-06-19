import clientPromise from "../../mongodb.config";
// Code snippet from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
export default async function UserDetails(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const treatmentDetails = await db
      .collection("hospital")
      .find({ Email: req.body.id })
      .toArray();
    console.log(treatmentDetails);
    if (treatmentDetails.length) {
      res.json({ user: true });
    } else {
      res.json({ user: false });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
