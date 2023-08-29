import React from "react";
import Image from "next/image";
import { Header } from "./componentes/Header";
import { Mission } from "./componentes/mission";
import { Button, Link } from "@mui/material";
import Checkout from "./checkout/page";



export default function Home() {
  return (
    <main>
      <Header />
      <Mission />
      <Button className=" flex text-black mx-auto" variant="contained">
      <Link href="/checkout">Más info</Link>
      </Button>
    </main>
  );
}
