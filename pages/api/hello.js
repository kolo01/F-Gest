// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import nodemailer from "nodemailer";

export default function handler(req, res) {
  const email = process.env.EMAIL;
  const pass = process.env.PASS;

  console.log(req.body);
  const titre = req.body.titre;
  const quantite = req.body.quantite;
  const message = {
    from: email,
    to: email,
    subject: `Recapitulatif de commande`,
    text: `Recapitulatif de commande`,
    html:
      `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
      
           
            <div class="block  pl-10  ProductContainer">
            <p></p>
            ` +
      `<div style="margin-left:30px;margin-top:30px" class="cat" id="cat">${titre.map(
        (element, index) => {
          return `<div style="border-color:black; border-bottom-width:2px; border-top-width:0px;border-right-width:0px;border-left-width:0px; border-style:dashed; width:fit-content;">
        <p  class="block  text-xl leading-tight   font-medium text-black "><b>Produit : </b> <span class="Livre">${element}</span> </p>
        <p  class="block  text-xl leading-tight   font-medium text-black "><b>Quantite : </b> <span class="Livre">${quantite[index]}</span> </p>
            `;
        }
      )}</div>` +
      `
            </div>
           
          </div>
        </div>
      </div>      
</body>
</html>
   `,
  };
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }

  res.status(200).json({ name: "John Doe" });
}
