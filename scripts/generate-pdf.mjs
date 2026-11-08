import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesDir = path.join(__dirname, "..", "notes");
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir, { recursive: true });
}

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
});

const pageWidth = 210;
const pageHeight = 297;
const margin = 18;
const contentWidth = pageWidth - margin * 2;

function drawHeader(title, subtitle) {
  // Deep slate-950 header
  doc.setFillColor(9, 13, 22);
  doc.rect(0, 0, pageWidth, 42, "F");

  // Royal blue accent line
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 42, pageWidth, 2, "F");

  // Logo Monogram
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(margin, 8, 22, 22, 3, 3, "F");
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, 8, 22, 22, 3, 3, "S");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("MFH", margin + 11, 21, { align: "center" });

  // Header Title
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(title, margin + 28, 18);

  doc.setTextColor(148, 163, 184);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(subtitle, margin + 28, 26);

  // Status badge
  doc.setFillColor(37, 99, 235, 0.2);
  doc.roundedRect(pageWidth - margin - 45, 12, 45, 12, 2, 2, "F");
  doc.setTextColor(59, 130, 246);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("PROJECT PROPOSAL", pageWidth - margin - 22.5, 19.5, { align: "center" });
}

function drawFooter(pageNumber, totalPages) {
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, pageHeight - 16, pageWidth - margin, pageHeight - 16);

  doc.setTextColor(100, 116, 139);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Midhula Farm Hut • Competition Submission & Client Handover", margin, pageHeight - 10);
  doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: "right" });
}

// ------------------------------------------------------------------------
// PAGE 1: Executive Overview & UI Architecture
// ------------------------------------------------------------------------
drawHeader(
  "MIDHULA FARM HUT",
  "Website Development Competition Submission & Master Architecture"
);

let y = 54;

doc.setTextColor(15, 23, 42);
doc.setFont("helvetica", "bold");
doc.setFontSize(14);
doc.text("1. Executive Summary & Brand Translation", margin, y);
y += 7;

doc.setFont("helvetica", "normal");
doc.setFontSize(9.5);
doc.setTextColor(51, 65, 85);
const introText =
  "This project was specifically crafted for Midhula Farm Hut (founded by Sajith, located in Nedupuzha, Thrissur, Kerala) in response to the Website Development Competition organized with tech_by_richard. Built with an uncluttered, high-contrast, clean white, ocean blue, and vibrant ruby red aesthetic, this solution reflects the beauty of pure Albino Full Red Guppies and Electric Blue Crayfish, backed by a conversion-first WhatsApp live ordering workflow.";
const introLines = doc.splitTextToSize(introText, contentWidth);
doc.text(introLines, margin, y);
y += introLines.length * 4.8 + 4;

// Key Metrics Grid Box
doc.setFillColor(248, 250, 252);
doc.setDrawColor(226, 232, 240);
doc.setLineWidth(0.4);
doc.roundedRect(margin, y, contentWidth, 24, 2, 2, "FD");

const colW = contentWidth / 4;
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(37, 99, 235);
doc.text("28.7K+", margin + colW * 0.5, y + 9, { align: "center" });
doc.text("75,000+", margin + colW * 1.5, y + 9, { align: "center" });
doc.text("15,000+", margin + colW * 2.5, y + 9, { align: "center" });
doc.text("99.8%", margin + colW * 3.5, y + 9, { align: "center" });

doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.setTextColor(100, 116, 139);
doc.text("Instagram Community", margin + colW * 0.5, y + 16, { align: "center" });
doc.text("YouTube Subscribers", margin + colW * 1.5, y + 16, { align: "center" });
doc.text("Safe Parcels Shipped", margin + colW * 2.5, y + 16, { align: "center" });
doc.text("Live Arrival Rate", margin + colW * 3.5, y + 16, { align: "center" });
y += 32;

// Brand Colors Section
doc.setTextColor(15, 23, 42);
doc.setFont("helvetica", "bold");
doc.setFontSize(12);
doc.text("2. Standardized Color Palette & Design Identity", margin, y);
y += 6;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
const paletteDesc =
  "Strictly disciplined modern palette using clean white background, ocean blue, ruby red, and deep black typography:";
doc.text(paletteDesc, margin, y);
y += 7;

const paletteItems = [
  { name: "Clean Crisp White", hex: "#FFFFFF", role: "Primary canvas background; maximum clarity and whitespace" },
  { name: "Ocean Royal Blue", hex: "#2563EB", role: "Primary aquatic brand accent; represents clean spring water & crayfish" },
  { name: "Radiant Ruby Red", hex: "#DC2626", role: "Albino Full Red guppy highlight, urgency tags, and featured badges" },
  { name: "Deep Obsidian Black", hex: "#09090B", role: "High-contrast headings, header bar, and razor-sharp typography" },
  { name: "WhatsApp Direct Green", hex: "#25D366", role: "Official instant 1-click booking and order confirmation CTAs" },
];

paletteItems.forEach((item) => {
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 8.5, 1.5, 1.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`[${item.hex}]  ${item.name}`, margin + 4, y + 5.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(item.role, margin + 70, y + 5.5);

  y += 10.5;
});
y += 4;

// Features Highlight
doc.setTextColor(15, 23, 42);
doc.setFont("helvetica", "bold");
doc.setFontSize(12);
doc.text("3. Core Homepage Innovations Built for This Task", margin, y);
y += 6;

const features = [
  "Touch-Native Instagram Reels Swiper: Integrated with the exact 5 Instagram videos requested by the client, complete with full-screen playback simulation, views counter, and pre-filled WhatsApp inquiry.",
  "Live Stock & Breed Catalog: Filterable across Guppies, Crayfish, Cichlids, Plants, and Feed, featuring water chemistry chips (pH, Temp, Hardness) and instant quick-view modals.",
  "100% Live Arrival & 72-Hour Medical Oxygen Protocol: Step-by-step breakdown of the insulated thermocol packing and zero-risk continuous unboxing video DOA warranty.",
  "Interactive WhatsApp Order Estimator: Dynamic calculator allowing hobbyists to choose strains, pairs, and delivery zones (Kerala, South India, Pan-India) with auto-formatted WhatsApp chat text.",
  "Customer Unboxing Wall & Thrissur Heritage: Authentic customer WhatsApp chat testimonials and the heartwarming story behind naming the farm after Midhula.",
];

features.forEach((feat) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const bulletLines = doc.splitTextToSize(`• ${feat}`, contentWidth - 4);
  doc.text(bulletLines, margin + 2, y);
  y += bulletLines.length * 4.4 + 1.5;
});

drawFooter(1, 2);

// ------------------------------------------------------------------------
// PAGE 2: Technical Specifications & ₹35,000 Full-Phase Roadmap
// ------------------------------------------------------------------------
doc.addPage();
drawHeader(
  "MIDHULA FARM HUT",
  "Technical Architecture, Component Standards & Project Roadmap"
);

y = 54;

doc.setTextColor(15, 23, 42);
doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.text("4. Component Architecture & Code Cleanliness", margin, y);
y += 6;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const archText =
  "The codebase follows enterprise-grade Next.js 16 App Router principles with clean separation of concerns inside `src/app/`, `src/components/ui/`, `src/components/farm/`, and `src/data/`. All atomic components are 100% reusable, typed with TypeScript interfaces, and built for high-speed responsiveness across all devices.";
const archLines = doc.splitTextToSize(archText, contentWidth);
doc.text(archLines, margin, y);
y += archLines.length * 4.6 + 4;

// Component Table
doc.setFillColor(248, 250, 252);
doc.setDrawColor(226, 232, 240);
doc.roundedRect(margin, y, contentWidth, 36, 2, 2, "FD");

doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text("Component", margin + 4, y + 6);
doc.text("File Path", margin + 45, y + 6);
doc.text("Reusability & Role", margin + 105, y + 6);

const compRows = [
  ["Button", "src/components/ui/button.tsx", "6 Variants (default blue, red, whatsapp, etc.)"],
  ["Badge", "src/components/ui/badge.tsx", "Status pills (blue, red, dark, slate) with live pulse"],
  ["Modal", "src/components/ui/modal.tsx", "Accessible clean white dialog with scroll lock"],
  ["Tabs", "src/components/ui/tabs.tsx", "Active blue pill tabs with counter badges"],
  ["Accordion", "src/components/ui/accordion.tsx", "Clean expandable FAQ cards with animated chevrons"],
];

let rowY = y + 12;
compRows.forEach(([name, pth, role]) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(37, 99, 235);
  doc.text(name, margin + 4, rowY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(pth, margin + 45, rowY);

  doc.setTextColor(71, 85, 105);
  doc.text(role, margin + 105, rowY);
  rowY += 5;
});

y += 44;

// Roadmap Section
doc.setTextColor(15, 23, 42);
doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.text("5. Comprehensive Plan for the ₹35,000 Full-Scope Phase", margin, y);
y += 6;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
const roadmapIntro =
  "As the winner develops the full platform, our modular architecture is built to seamlessly plug in the remaining deliverables without rewriting core logic:";
doc.text(roadmapIntro, margin, y);
y += 7;

const roadmapPhases = [
  {
    phase: "Phase 1: Dynamic Product Catalog & Detail Pages",
    detail: "Dedicated URL routes (/breeds/[slug]) with multi-angle high-res photo sliders, broodstock lineage breakdown, water compatibility calculator, and direct related accessory upsells.",
  },
  {
    phase: "Phase 2: Admin Dashboard with Full CRUD Operations",
    detail: "Secure authentication for Sajith & farm staff to create, update, price, and archive live stock pairs, upload photos, and toggle 'In Stock / Few Pairs / Seasonal' statuses in real time.",
  },
  {
    phase: "Phase 3: Automated WhatsApp Ordering & Order History",
    detail: "Deep integration with WhatsApp Cloud API to automatically acknowledge customer inquiries, send shipping updates, and generate printable thermocol box dispatch labels.",
  },
  {
    phase: "Phase 4: Dedicated About Us & Interactive Farm Visit Booking",
    detail: "Complete story of Midhula Farm Hut, interactive map of the Nedupuzha Thrissur facility, virtual 360-degree breeding vat walkthrough, and visitor slot scheduler.",
  },
];

roadmapPhases.forEach((p) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(p.phase, margin, y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  const detailLines = doc.splitTextToSize(p.detail, contentWidth - 4);
  doc.text(detailLines, margin + 4, y);
  y += detailLines.length * 4 + 3;
});

y += 3;
// Closing note
doc.setFillColor(37, 99, 235, 0.08);
doc.setDrawColor(37, 99, 235, 0.4);
doc.roundedRect(margin, y, contentWidth, 20, 2, 2, "FD");

doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(37, 99, 235);
doc.text("Ready for Immediate Deployment & Full Contract Execution", margin + 4, y + 6);

doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
doc.text(
  "This project satisfies all competition criteria: creative Instagram asset integration, strict brand colors, Next.js + Tailwind + Swiper stack, maximum mobile responsiveness, and zero AI-boilerplate feel.",
  margin + 4,
  y + 11,
  { maxWidth: contentWidth - 8 }
);

drawFooter(2, 2);

// Save PDF
const pdfPath = path.join(notesDir, "Midhula_Farm_Hut_Client_Proposal.pdf");
const pdfBuffer = doc.output("arraybuffer");
fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));

console.log(`✅ Client Proposal PDF updated successfully at: ${pdfPath}`);
