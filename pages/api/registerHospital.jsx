import clientPromise from "../../mongodb.config";

// Code snippet cited from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
export default async function registerHospital(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const hospitalDetails = await db
      .collection("hospital")
      .find({ email: req.body.hospitalEmail })
      .toArray();
    const hospitalDetails2 = await db
      .collection("hospital")
      .find({ email: req.body.hospitalId })
      .toArray();
    if (hospitalDetails.length) {
      res.json({
        message: "Hospital Already Registered with given Email",
        user: false,
      });
    } else if (hospitalDetails2.length) {
      res.json({
        message: "Hospital Already Registered with given Hospital Id",
        user: false,
      });
    } else {
      await db.collection("hospital").insertOne({
        Name: req.body.hospitalName,
        Id: req.body.hospitalId,
        managerName: req.body.managerName,
        phoneNumber: req.body.phoneNumber,
        ambulanceService: req.body.ambulanceService,
        address: req.body.address,
        Capacity: req.body.hospitalCapacity,
        Pass: req.body.hospitalPass,
        Email: req.body.hospitalEmail,
      });
      res.json({ message: "Hospital added succesfully", user: true });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
