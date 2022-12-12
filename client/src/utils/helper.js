import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

async function addImageProcess(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

export async function generatePdf(imageUrls) {
  const doc = new jsPDF();
  for (const [i, url] of imageUrls.entries()) {
    const image = await addImageProcess(url);
    doc.addImage(image, 'png', 5, 5, 0, 0);
    if (i !== imageUrls.length - 1) {
      doc.addPage();
    }
  }
  return doc;
}

async function savePdf(imageUrls) {
  const multiPng = await generatePdf(imageUrls);

  // generate dataURLString
  // const dataURLString = multiPng.output('dataurlstring', 'multiPng.pdf');
  //console.log(dataURLString);

  // save PDF (blocked in iFrame in chrome)
  multiPng.output('save', 'multiPng.pdf');
}

export const printDocument = (input, opt) => {
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF(opt);
    pdf.addImage(imgData, 'JPEG', 0, 0);
    // pdf.output('dataurlnewwindow');
    pdf.save('download.pdf');
  });
};

export const printDocuments = async (input, opt, custom) => {
  const imageUrls = await Promise.all(
    input.map(async (item, index) => {
      let canvas = await html2canvas(item);
      return canvas.toDataURL('image/png');
    })
  );
  savePdf(imageUrls);
};
