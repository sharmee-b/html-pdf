/** Reference: https://github.com/chuongtrh/html_to_pdf
 *
 * Header footer issue: https://github.com/puppeteer/puppeteer/issues/1822
 */
const fs = require("fs");
const path = require("path");
const { html_to_pdf } = require("./converter");

try {
  (async () => {
    const dataBinding = {
      items: [
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
        {
          name: "item 1",
          price: 100,
        },
        {
          name: "item 2",
          price: 200,
        },
        {
          name: "item 3",
          price: 300,
        },
      ],
      total: 600,
      isWatermark: true,
    };

    const templateHtml = fs.readFileSync(
      path.join(process.cwd(), "invoice.html"),
      "utf8"
    );

    const options = {
      format: "A4",
      headerTemplate: `
      <div style="color: lightgray; border-top: solid lightgray 1px; font-size: 10px; padding-top: 5px; text-align: center; width: 100%;">
        <span>This is a test header</span> - <span class="pageNumber"></span>
      </div>
    `,
      footerTemplate: `
              <div style="color: lightgray; border-top: solid lightgray 1px; font-size: 10px; padding-top: 5px; text-align: center; width: 100%;">
                <span>This is a test message</span> - <span class="pageNumber"></span>
              </div>
            `,
      displayHeaderFooter: true,
      margin: {
        bottom: 70, // minimum required for footer msg to display
        left: 25,
        right: 35,
        top: 70,
      },
      printBackground: true,
      path: "invoice.pdf",
    };

    await html_to_pdf({ templateHtml, dataBinding, options });

    console.log("Done: invoice.pdf is created!");
  })();
} catch (err) {
  console.log("ERROR:", err);
}
