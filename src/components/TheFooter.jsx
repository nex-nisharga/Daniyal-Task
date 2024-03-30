import Link from "next/link";
import { Icons } from "./Icons";
import { FooterMobile } from "./FooterMobile";

const TheFooter = () => {
  return (
    <>
      <footer className="hidden md:block">
        <div className="py-16 bg-gray-800">
          <div className="container">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-4">
                <h3 className="mb-3">USA Underwriter</h3>
                <h6>
                  NAIC #: 30457 <br /> P.O. Box 2426 <br /> Rancho Cucamonga,
                  CA, 91729
                </h6>
              </div>
              <div className="col-span-4">
                <h3 className="mb-3">Underwriting Support</h3>
                <h6 className="mb-2">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="mb-2">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
                <h6>
                  <Icons.Envelope className="inline mr-1" />{" "}
                  customerservice@usaunderwriters.com
                </h6>
              </div>
              <div className="col-span-4">
                <h3 className="mb-3">
                  Policy Suspensions And <br /> Coverage Approvals
                </h3>
                <h6 className="mb-2">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
              </div>
              <div className="col-span-4">
                <h3 className="mb-3">Customer Service & Support</h3>
                <h6 className="mb-2">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="mb-2">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
                <h6>
                  <Icons.Envelope className="inline mr-1" />{" "}
                  customerservice@usaunderwriters.com
                </h6>
              </div>
              <div className="col-span-4">
                <h3 className="mb-3">Claims Administration</h3>
                <h6 className="mb-2">
                  <Icons.Clock className="inline mr-1" /> Monday - Friday, 9:00
                  am - 6:00 pm ET
                </h6>
                <h6 className="mb-2">
                  <Icons.Phone className="inline mr-1" /> +1 (855) 230-1656
                </h6>
              </div>
              <div className="col-span-4">
                <h3 className="mb-3">
                  PIP Qualification Question and <br /> Submissions for Coverage
                </h3>
                <h6 className="mb-2">
                  <Icons.Phone className="inline mr-1" /> +1 (248) 541-2800
                </h6>
                <h6>
                  <Icons.Envelope className="inline mr-1" />
                  policybinding@usaunderwriters.com
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-gray-100">
          <div className="container">
            <div className="flex justify-between text-sm text-gray-900">
              <p className="">
                Copyright 2022 USA Underwriters |
                <Link href="/" className="pl-2 font-semibold">
                  Privacy Policy
                </Link>{" "}
                |
                <Link href="/" className="pl-2 font-semibold ">
                  Terms of Use
                </Link>
              </p>
              <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="block md:hidden">
        <FooterMobile />
      </footer>
    </>
  );
};

export default TheFooter;
