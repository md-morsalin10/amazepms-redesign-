import ServicesHero from "@/components/services/ServicesHero";
import PropertyAssetManagement from "@/components/services/PropertyAssetManagement";
import ServicePartners from "@/components/services/ServicePartners";

export const metadata = {
  title: "Services | Amaze Property Management",
  description: "Comprehensive property management, security, and facility services for your needs.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
      <ServicesHero />
      <PropertyAssetManagement />
      <ServicePartners />
    </main>
  );
}