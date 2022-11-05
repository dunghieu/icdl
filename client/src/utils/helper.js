import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export const printDocument = (input, opt) => {
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF.jsPDF(opt);
    pdf.addImage(imgData, 'JPEG', 0, 0);
    // pdf.output('dataurlnewwindow');
    pdf.save('download.pdf');
  });
};
