"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Icons } from "../Icons";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <section className="bg-gray-800 py-9">
      <div className="px-4">
        <div className="flex flex-col ">
          <div className="w-full">
            <AccordionItem title="USA Underwriting" itemActive={true}>
              <h6 className="p-5">
                Monday - Friday, 9:00 am - 6:00 pm ET <br /> +1 (248) 541-2800{" "}
                <br /> customerservice@usaunderwriters.com <br />
              </h6>
            </AccordionItem>
            <AccordionItem title="Customer Service & Support">
              <div className="p-5">
                <h6 className="mb-1">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
              </div>
            </AccordionItem>
            <AccordionItem title="Claims Administration">
              <div className="p-5">
                <h6 className="mb-1">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="mb-1">
                  <Icons.Phone className="inline mr-1" /> +1 (855) 230-1656
                </h6>
                <h6>
                  <Icons.Map className="inline mr-3" />
                  P.O. Box 647 | Battle Creek, MI 49016
                </h6>
              </div>
            </AccordionItem>
          </div>

          <div className="w-full mt-5">
            <AccordionItem title="Underwriting Support" itemActive={true}>
              <h6 className="p-5">
                Monday - Friday, 9:00 am - 6:00 pm ET <br /> +1 (248) 541-2800{" "}
                <br /> customerservice@usaunderwriters.com <br />
              </h6>
            </AccordionItem>
            <AccordionItem title="Policy Suspensions And Coverage Approvals">
              <div className="p-5">
                <h6 className="mb-1">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
              </div>
            </AccordionItem>
            <AccordionItem title="RIP Qualification Question And Submissions for Coverage">
              <div className="p-5">
                <h6 className="mb-1">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
                <h6>
                  <Icons.Envelope className="inline mr-3" />
                  policybinding@usaunderwriters.com
                </h6>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="text-xs text-center text-white">
            <div className="mt-8 mb-3">
              <p>Copyright 2022 USA Underwriters</p>
              <div className="mt-2">
                <Link href="/" className="pl-2 font-semibold">
                  Privacy Policy
                </Link>
                |
                <Link href="/" className="pl-2 font-semibold ">
                  Terms of Use
                </Link>
              </div>
            </div>
            <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMobile;
