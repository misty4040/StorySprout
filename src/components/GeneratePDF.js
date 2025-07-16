import jsPDF from "jspdf";

export default function generatePDF({ story, childName, personalMessage }) {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;

  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.text(`${childName}'s Magical Story`, pageWidth / 2, 30, {
    align: "center",
  });

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  const lines = pdf.splitTextToSize(story, maxWidth);
  let yPosition = 50;

  lines.forEach((line) => {
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }
    pdf.text(line, margin, yPosition);
    yPosition += 7;
  });

  if (personalMessage) {
    pdf.addPage();
    yPosition = 30;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "italic");
    pdf.text(personalMessage, pageWidth / 2, yPosition, { align: "center" });
  }

  pdf.save(`${childName}_Magical_Story.pdf`);
}
