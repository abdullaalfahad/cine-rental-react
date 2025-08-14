import React from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./CartDetails";
import { useContext } from "react";
import { MovieContext } from "../context";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useContext(MovieContext);

  return (
    <header>
      {isModalOpen && <CartDetails onClose={() => setIsModalOpen(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <img src={logo} width="139" height="26" alt="" />

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={sun} width="24" height="24" alt="sun" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setIsModalOpen(true)}
            >
              {cart.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cart.length}
                </span>
              )}
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
