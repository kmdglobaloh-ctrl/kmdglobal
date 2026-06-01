import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, COMPANY_FULL, PHONE, PHONE_HREF, ESTABLISHED, YEARS_IN_BUSINESS, SISTER_COMPANY, EMAIL } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "About Alfieri Brothers — Cleveland, OH Excavation Contractors",
  description: `Learn about ${COMPANY_FULL}, a family-owned excavation and contracting company serving Cleveland and Northeast Ohio since ${ESTABLISHED}. Over ${YEARS_IN_BUSINESS} years of experience.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / About
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-black text-[#0d1444] mb-2">About {COMPANY} Brothers</h1>
          <p className="text-[#cc2222] font-semibold mb-6">Cleveland's Trusted Excavation & Contracting Experts Since {ESTABLISHED}</p>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
            <p>
              {COMPANY_FULL} is a family-owned and operated contracting business located in Cleveland, Ohio. Founded in {ESTABLISHED}, we have spent over {YEARS_IN_BUSINESS} years building a reputation for honest work, fair pricing, and the kind of reliability that keeps Cleveland homeowners and businesses coming back year after year.
            </p>
            <p>
              We specialize in underground utility work — sewer installation and repair, water and gas line services, backflow prevention — as well as excavation, grading, basement waterproofing, dye testing, and demolition. We also provide commercial snow removal for parking lots and large properties throughout the winter months.
            </p>
            <p>
              What sets us apart is simple: we own our equipment, we employ our own crew, and we show up when we say we will. There are no layers of subcontractors and no finger-pointing when something needs to be fixed. When Alfieri Brothers is on your job, you're working directly with us.
            </p>
            <p>
              Over the decades, Cleveland's infrastructure has aged significantly. We know the specific challenges Northeast Ohio homeowners face — aging clay sewer laterals, basement water intrusion from heavy Lake Erie weather, and the increasingly strict compliance requirements from NEORSD and Cleveland Water. We don't just complete the work; we navigate all of it for you.
            </p>

            <h2 className="text-2xl font-black text-[#0d1444] mt-8">Alfieri Management LLC</h2>
            <p>
              Our sister company, <strong>{SISTER_COMPANY}</strong>, manages residential rental properties in the Cleveland area. With the same family-owned values that guide our contracting work, Alfieri Management provides well-maintained housing for Cleveland-area residents. Visit our <Link href="/alfieri/rental" className="text-[#1a237e] hover:underline">Rental Property page</Link> to learn more about current availability.
            </p>

            <h2 className="text-2xl font-black text-[#0d1444] mt-8">Our Memberships</h2>
            <p>
              We are proud members of <strong>COSE (Council of Smaller Enterprises)</strong>, Northeast Ohio's leading small business advocacy organization. We are also affiliated with <strong>Alside</strong>, a leading manufacturer of building products headquartered in Cuyahoga Falls, OH.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-[#0d1444] text-white rounded-2xl p-6">
            <h3 className="font-black text-lg mb-4">At a Glance</h3>
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex justify-between">
                <span>Founded</span>
                <span className="text-white font-bold">{ESTABLISHED}</span>
              </div>
              <div className="flex justify-between">
                <span>Years in Business</span>
                <span className="text-white font-bold">{YEARS_IN_BUSINESS}+</span>
              </div>
              <div className="flex justify-between">
                <span>Location</span>
                <span className="text-white font-bold">Cleveland, OH</span>
              </div>
              <div className="flex justify-between">
                <span>Ownership</span>
                <span className="text-white font-bold">Family-owned</span>
              </div>
              <div className="flex justify-between">
                <span>Licensed</span>
                <span className="text-white font-bold">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Insured</span>
                <span className="text-white font-bold">Fully insured</span>
              </div>
              <div className="flex justify-between">
                <span>Sister Company</span>
                <span className="text-white font-bold text-right">{SISTER_COMPANY}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#cc2222] text-white rounded-2xl p-6 text-center">
            <p className="font-black text-lg mb-2">Ready to Work Together?</p>
            <p className="text-red-200 text-sm mb-4">We'd love to help with your project.</p>
            <a href={PHONE_HREF} className="block bg-white text-[#cc2222] font-black px-4 py-3 rounded-lg mb-2 hover:bg-gray-100 transition-colors">
              📞 {PHONE}
            </a>
            <Link href="/alfieri/quote" className="block border border-white text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm">
              Get a Free Estimate
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong className="text-[#0d1444]">Email:</strong>{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#1a237e] hover:underline">{EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
