import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailTemplatesService {
    constructor(){}

    async emailtemplateDetail(template_attributes: any){
    const {
     templateName = '',
     customerName ='',
     customerEmail = '',
     order_id = '',
     productsData = [],
     billing_address = { address1: '', address2: '' },
     shipping_address = { address1: '', address2: '' },
     price_before_discount = '',
     price_after_discount = '',
     total_discounts = '',
     dateRange = {start: '', end: ''},
     pdflink = '',
     tracklink = '',
    } = template_attributes;
 
    const generateTableRows = (items: any[]) => {
        const rowTemplate = (el: { image: any; ProductName: any; quantity: any; }) => `
          <tr>
       <td>
         <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #fff; width: 640px; margin: 0 auto;" width="640">
           <tbody>
             <tr>
               <td class="column column-1" width="41.67%" style="text-align: left; padding: 10px 30px 10px 30px; vertical-align: top;">
                 <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                   <tr>
                     <td class="pad" style="width:100%; padding: 0;">
                       <div class="alignment" align="left" style="line-height:10px">
                         <div style="max-width: 130px;">
                           <img src="${el.image}" style="display: block; height: auto; width: 100%;" width="130" alt="Product image">
                         </div>
                       </div>
                     </td>
                   </tr>
                 </table>
               </td>
               <td class="column column-2" width="58.33%" style="text-align: left; padding: 0 30px; vertical-align: top;">
                 <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                   <tr>
                     <td class="pad">
                       <div style="color:#000000; font-family: Montserrat, sans-serif; font-size: 14px; line-height: 150%; text-align: left;">
                         <p style="margin: 0;"><span style="color: #2b303a;">${el.ProductName} | Qty - ${el.quantity}</span></p>
                       </div>
                     </td>
                   </tr>
                 </table>
               </td>
             </tr>
           </tbody>
         </table>
       </td>
     </tr>
    `;
    return items.map(rowTemplate).join("");
    };
   const EmailTemplate = {
     orderReceiveTemplate : {
        options: {sandbox: false,},
        content: {
            from: "info@mailer.thesleepcompany.in",
            subject : "Your The Sleep Company Order is successfully placed!",
            html: `
            <head>
   <title></title>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!--[if mso]>
   <xml>
      <o:OfficeDocumentSettings>
         <o:PixelsPerInch>96</o:PixelsPerInch>
         <o:AllowPNG/>
      </o:OfficeDocumentSettings>
   </xml>
   <![endif]--><!--[if !mso]><!-->
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
   <!--<![endif]-->
   <style>
      * {
      box-sizing: border-box;
      }
      body {
      margin: 0;
      padding: 0;
      }
      a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
      }
      #MessageViewBody a {
      color: inherit;
      text-decoration: none;
      }
      p {
      line-height: inherit
      }
      .desktop_hide,
      .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
      }
      .image_block img+div {
      display: none;
      }
      sup,
      sub {
      line-height: 0;
      font-size: 75%;
      }
      @media (max-width:660px) {
      .desktop_hide table.icons-inner,
      .social_block.desktop_hide .social-table {
      display: inline-block !important;
      }
      .icons-inner {
      text-align: center;
      }
      .icons-inner td {
      margin: 0 auto;
      }
      .mobile_hide {
      display: none;
      }
      .row-content {
      width: 100% !important;
      }
      .stack .column {
      width: 100%;
      display: block;
      }
      .mobile_hide {
      min-height: 0;
      max-height: 0;
      max-width: 0;
      overflow: hidden;
      font-size: 0px;
      }
      .desktop_hide,
      .desktop_hide table {
      display: table !important;
      max-height: none !important;
      }
      }
   </style>
    <!--[if mso ]>
   <style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style>
   <![endif]-->
</head>
<body class="body" style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
   <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
   <tbody>
      <tr>
         <td>
            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:25px;padding-top:27px;width:100%;padding-right:0px;padding-left:0px;">
                                             <div class="alignment" align="center" style="line-height:10px">
                                                <div style="max-width: 160px;"><img src="https://8b060d7dea.imgdist.com/pub/bfra/2mom8gk2/t19/gls/fuq/TSC%20Normal%20Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="160" alt="I'm an image" title="I'm an image" height="auto"></div>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                                <p style="margin: 0;">Thank you for your purchase! 💙</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-top:35px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                <p style="margin: 0;"><strong>Hi ${customerName}!&nbsp;</strong></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-top:5px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                <p style="margin: 0;">Your order from The Sleep Company has successfully been placed. Scroll to view the order details.</p>
                                                <p style="margin: 0;">We will share the tracking link with you when your order is shipped.&nbsp;</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:15px;padding-top:15px;">
                                             <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:17px;line-height:150%;text-align:center;mso-line-height-alt:25.5px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>Estimated Delivery Date: ${
                                                  dateRange.start
                                                } - ${
        dateRange.end
      }</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-top:35px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #aaacb0;"><strong><span style="word-break: break-word;">ORDER NUMBER</span></strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:150%;text-align:left;mso-line-height-alt:30px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;"><strong>#${order_id}</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="divider_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-top:10px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #aaacb0;"><strong><span style="word-break: break-word;">PRODUCTS ORDERED</span></strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">

               <tbody>
                  ${generateTableRows(productsData)}
               </tbody>
                 

            </table>
            <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-top:45px;">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:15px;padding-top:35px;">
                                             <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>Payment Details</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Order Amount</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Order Savings</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Shipping and Handling</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-top:15px;">
                                             <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:180%;text-align:left;mso-line-height-alt:36px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong><span style="word-break: break-word; color: #2b303a;">Total Amount</span></strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                                 <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;">₹${price_before_discount}</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;">-₹${total_discounts}</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:10px;line-height:180%;text-align:right;mso-line-height-alt:18px;">&nbsp;</div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;">FREE</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-top:15px;">
                                             <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:180%;text-align:right;mso-line-height-alt:36px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong><span style="word-break: break-word; color: #2b303a;">₹${price_after_discount}</span></strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-top:35px;">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #e8e8e8;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:15px;padding-top:35px;">
                                             <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>DELIVERY ADDRESS</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;"${template_attributes.shipping_address?.address1}</span></p>
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                  template_attributes.shipping_address?.address2 || ''
                                                }</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:15px;padding-top:20px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>BILLING ADDRESS</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                  template_attributes.billing_address?.address1 || ''
                                                }</span></p>
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                  template_attributes.billing_address?.address2 || ''
                                                }</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>

                                    <table class="divider_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-top:35px;">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-10" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-top:35px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #808389;">Please reply to this email incase you have any question or reach out to us at <strong>care@thesleepcompany.in</strong></span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
                                             <div class="alignment" align="center">
                                                <!--[if mso]>
                                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://thesleepcompany.in/account#view=orders" style="height:62px;width:154px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1a2b58">
                                                   <w:anchorlock/>
                                                   <v:textbox inset="0px,0px,0px,0px">
                                                      <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
                                                         <![endif]--><a href="https://thesleepcompany.in/account#view=orders" target="_blank" style="background-color:#1a2b58;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:60px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>View Order</strong></span></span></a><!--[if mso]>
                                                      </center>
                                                   </v:textbox>
                                                </v:roundrect>
                                                <![endif]-->
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                             <div class="alignment" align="center">
                                                <table class="social-table" width="156px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                   <tr>
                                                      <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/thsleepco/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                      <td style="padding:0 10px 0 10px;"><a href="https://x.com/thesleepco_?lang=en" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
                                                      <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">Please view your My Orders page on thesleepcompany.in for more details on tracking.</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="divider_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                             <div class="alignment" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span style="word-break: break-word;">&#8202;</span></td>
                                                   </tr>
                                                </table>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                       <tr>
                                          <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                             <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                                                <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">The Sleep Company © 2024</span></p>
                                             </div>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                           <tbody>
                              <tr>
                                 <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
                                       <tr>
                                          <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                             <!--[if vml]>
                                             <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                                <![endif]-->
                                                <!--[if !vml]><!-->
                                                <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                                   <!--<![endif]-->
                                                   <tr>
                                                      <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                      <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                   </tr>
                                                </table>
                                                </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            <!-- End -->
</body>
</html> `,
        },
        recipients: [
            {
                address: customerEmail,
            },
        ],
     },

     orderReceivedEdd : {
        options: {sandbox : false},
        content: {
            from: "info@mailer.thesleepcompany.in",
            subject : "Your The Sleep Company Order is successfully placed!",
            html: ` 
<head>
 <title></title>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <!--[if mso]>
 <xml>
    <o:OfficeDocumentSettings>
       <o:PixelsPerInch>96</o:PixelsPerInch>
       <o:AllowPNG/>
    </o:OfficeDocumentSettings>
 </xml>
 <![endif]--><!--[if !mso]><!-->
 <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
 <!--<![endif]-->
 <style>
    * {
    box-sizing: border-box;
    }
    body {
    margin: 0;
    padding: 0;
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: inherit !important;
    }
    #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    }
    p {
    line-height: inherit
    }
    .desktop_hide,
    .desktop_hide table {
    mso-hide: all;
    display: none;
    max-height: 0px;
    overflow: hidden;
    }
    .image_block img+div {
    display: none;
    }
    sup,
    sub {
    line-height: 0;
    font-size: 75%;
    }
    @media (max-width:660px) {
    .desktop_hide table.icons-inner,
    .social_block.desktop_hide .social-table {
    display: inline-block !important;
    }
    .icons-inner {
    text-align: center;
    }
    .icons-inner td {
    margin: 0 auto;
    }
    .mobile_hide {
    display: none;
    }
    .row-content {
    width: 100% !important;
    }
    .stack .column {
    width: 100%;
    display: block;
    }
    .mobile_hide {
    min-height: 0;
    max-height: 0;
    max-width: 0;
    overflow: hidden;
    font-size: 0px;
    }
    .desktop_hide,
    .desktop_hide table {
    display: table !important;
    max-height: none !important;
    }
    }
 </style>
 <!--[if mso ]>
 <style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style>
 <![endif]-->
</head>
<body class="body" style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
 <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
 <tbody>
    <tr>
       <td>
          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:25px;padding-top:27px;width:100%;padding-right:0px;padding-left:0px;">
                                           <div class="alignment" align="center" style="line-height:10px">
                                              <div style="max-width: 160px;"><img src="https://8b060d7dea.imgdist.com/pub/bfra/2mom8gk2/t19/gls/fuq/TSC%20Normal%20Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="160" alt="I'm an image" title="I'm an image" height="auto"></div>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                              <p style="margin: 0;">Thank you for your purchase! 💙</p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-top:35px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                              <p style="margin: 0;"><strong>Hi ${customerName}!&nbsp;</strong></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-top:5px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                              <p style="margin: 0;">Your order from The Sleep Company has successfully been placed. Scroll to view the order details.</p>
                                              <p style="margin: 0;">We will share the tracking link with you when your order is shipped.&nbsp;</p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>


                                  



                                  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-top:35px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #aaacb0;"><strong><span style="word-break: break-word;">ORDER NUMBER</span></strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:150%;text-align:left;mso-line-height-alt:30px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;"><strong>#${order_id}</strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="divider_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-top:10px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #aaacb0;"><strong><span style="word-break: break-word;">PRODUCTS ORDERED</span></strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">

             <tbody>
                ${generateTableRows(productsData)}
             </tbody>
               

          </table>
          <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-top:45px;">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:15px;padding-top:35px;">
                                           <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>Payment Details</strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Order Amount</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Order Savings</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>

                                  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">Shipping and Handling</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-top:15px;">
                                           <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:180%;text-align:left;mso-line-height-alt:36px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong><span style="word-break: break-word; color: #2b303a;">Total Amount</span></strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                               <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;">₹${price_before_discount}</p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;">-₹${total_discounts}</p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:10px;line-height:180%;text-align:right;mso-line-height-alt:18px;">&nbsp;</div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#000000;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:right;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;">FREE</p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-top:15px;">
                                           <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:180%;text-align:right;mso-line-height-alt:36px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong><span style="word-break: break-word; color: #2b303a;">₹${price_after_discount}</span></strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-top:35px;">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #e8e8e8;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:15px;padding-top:35px;">
                                           <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>DELIVERY ADDRESS</strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${template_attributes.shipping_address?.address1 || ''}</span></p>
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                template_attributes.shipping_address?.address1 || ''
                                              }</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:15px;padding-top:20px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:left;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>BILLING ADDRESS</strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:left;mso-line-height-alt:23.400000000000002px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                template_attributes.billing_address?.address1 || ''
                                              }</span></p>
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${
                                                template_attributes.billing_address?.address2 || ''
                                              }</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                 
                                  <table class="divider_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-top:35px;">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-10" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-top:35px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #808389;">Please reply to this email incase you have any question or reach out to us at <strong>care@thesleepcompany.in</strong></span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
                                           <div class="alignment" align="center">
                                              <!--[if mso]>
                                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://thesleepcompany.in/account#view=orders" style="height:62px;width:154px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1a2b58">
                                                 <w:anchorlock/>
                                                 <v:textbox inset="0px,0px,0px,0px">
                                                    <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
                                                       <![endif]--><a href="https://thesleepcompany.in/account#view=orders" target="_blank" style="background-color:#1a2b58;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:60px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>View Order</strong></span></span></a><!--[if mso]>
                                                    </center>
                                                 </v:textbox>
                                              </v:roundrect>
                                              <![endif]-->
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                           <div class="alignment" align="center">
                                              <table class="social-table" width="156px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                 <tr>
                                                    <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/thsleepco/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                    <td style="padding:0 10px 0 10px;"><a href="https://x.com/thesleepco_?lang=en" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
                                                    <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">Please view your My Orders page on thesleepcompany.in for more details on tracking.</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="divider_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                           <div class="alignment" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                 <tr>
                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span style="word-break: break-word;">&#8202;</span></td>
                                                 </tr>
                                              </table>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                                  <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                     <tr>
                                        <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                           <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                                              <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">The Sleep Company © 2024</span></p>
                                           </div>
                                        </td>
                                     </tr>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
             <tbody>
                <tr>
                   <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                         <tbody>
                            <tr>
                               <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
                                     <tr>
                                        <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                           <!--[if vml]>
                                           <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                              <![endif]-->
                                              <!--[if !vml]><!-->
                                              <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                                 <!--<![endif]-->
                                                 <tr>
                                                    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                    <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                 </tr>
                                              </table>
                                              </td>
                                              </tr>
                                           </table>
                                        </td>
                                     </tr>
                                     </tbody>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                </tr>
             </tbody>
          </table>
          <!-- End -->
</body>
</html>`,
        },
        recipient: [
            {
                address: customerEmail,
            },
        ],
     },

     shippedTemplate : {
        options:{sandbox: false},
        content : {
            from: "info@mailer.thesleepcompany.in",
            subject: "Your The Sleep Company Order is Shipped!",
            html: `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            <head>
               <title></title>
               <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <!--[if mso]>
               <xml>
                  <o:OfficeDocumentSettings>
                     <o:PixelsPerInch>96</o:PixelsPerInch>
                     <o:AllowPNG/>
                  </o:OfficeDocumentSettings>
               </xml>
               <![endif]--><!--[if !mso]><!-->
               <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
               <!--<![endif]-->
               <style>
                  * {
                  box-sizing: border-box;
                  }
                  body {
                  margin: 0;
                  padding: 0;
                  }
                  a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
                  }
                  #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  }
                  p {
                  line-height: inherit
                  }
                  .desktop_hide,
                  .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
                  }
                  .image_block img+div {
                  display: none;
                  }
                  sup,
                  sub {
                  line-height: 0;
                  font-size: 75%;
                  }
                  @media (max-width:660px) {
                  .desktop_hide table.icons-inner,
                  .social_block.desktop_hide .social-table {
                  display: inline-block !important;
                  }
                  .icons-inner {
                  text-align: center;
                  }
                  .icons-inner td {
                  margin: 0 auto;
                  }
                  .mobile_hide {
                  display: none;
                  }
                  .row-content {
                  width: 100% !important;
                  }
                  .stack .column {
                  width: 100%;
                  display: block;
                  }
                  .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
                  }
                  .desktop_hide,
                  .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
                  }
                  .row-6 .column-1 .block-7.divider_block td.pad {
                  padding: 10px 0 0 !important;
                  }
                  .row-6 .column-1 .block-7.divider_block .alignment table {
                  display: inline-table;
                  }
                  }
               </style>
               <!--[if mso ]>
               <style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style>
               <![endif]-->
            </head>
            <body class="body" style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
               <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:25px;padding-top:27px;width:100%;padding-right:0px;padding-left:0px;">
                                                         <div class="alignment" align="center" style="line-height:10px">
                                                            <div style="max-width: 160px;"><img src="https://8b060d7dea.imgdist.com/pub/bfra/2mom8gk2/t19/gls/fuq/TSC%20Normal%20Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="160" alt="I'm an image" title="I'm an image" height="auto"></div>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                                            <p style="margin: 0;">Order Shipped !</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0;">Hi ${customerName} !&nbsp;</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-top:5px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0;">Your order has been shipped! The countdown to better comfort begins !</p>
                                                            <p style="margin: 0;">Click on the following link to track your order!</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #aaacb0;"><strong><span style="word-break: break-word;">ORDER NUMBER</span></strong></span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:150%;text-align:center;mso-line-height-alt:30px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;"><strong>#${order_id}</strong></span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
                                                         <div class="alignment" align="center">
                                                            <!--[if mso]>
                                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="clickpost AWB Link" style="height:62px;width:200px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1a2b58">
                                                               <w:anchorlock/>
                                                               <v:textbox inset="0px,0px,0px,0px">
                                                                  <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
                                                                     <![endif]--><a href="${tracklink}" target="_blank" style="background-color:#1a2b58;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:60px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>Track your Order</strong></span></span></a><!--[if mso]>
                                                                  </center>
                                                               </v:textbox>
                                                            </v:roundrect>
                                                            <![endif]-->
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #e8e8e8;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:20px;">
                                                         <div style="color:#1a2b58;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #1a2b58;"><strong>DELIVERY ADDRESS</strong></span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:180%;text-align:center;mso-line-height-alt:23.400000000000002px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${template_attributes.shipping_address?.address1 || ''}</span></p>
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b303a;">${template_attributes.shipping_address?.address2 || ''}</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                               
                                                <table class="divider_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:35px;">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #F0F0F0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:20px;padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #808389;">Please reply to this email incase you have any question or reach out to us at <strong>care@thesleepcompany.in</strong></span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                                         <div class="alignment" align="center">
                                                            <table class="social-table" width="156px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                               <tr>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/thsleepco/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://x.com/thesleepco_?lang=en" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">Please view your My Orders page on thesleepcompany.in for more details on tracking.</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="divider_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">The Sleep Company © 2024</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
                                                   <tr>
                                                      <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                         <!--[if vml]>
                                                         <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                                            <![endif]-->
                                                            <!--[if !vml]><!-->
                                                            <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                                               <!--<![endif]-->
                                                               <tr>
                                                                  <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                  <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                               </tr>
                                                            </table>
                                                            </td>
                                                            </tr>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- End -->
            </body>
            </html>`,
        },
        recipients: [
            {
                address: customerEmail,
            },
        ],
     },

     deliveredTemplate : {
        options:{sandbox: false},
        content: {
            from: "info@mailer.thesleepcompany.in",
            subject: "Your The Sleep Company Order is Delivered!",
            html: `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            <head>
               <title></title>
               <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <!--[if mso]>
               <xml>
                  <o:OfficeDocumentSettings>
                     <o:PixelsPerInch>96</o:PixelsPerInch>
                     <o:AllowPNG/>
                  </o:OfficeDocumentSettings>
               </xml>
               <![endif]--><!--[if !mso]><!-->
               <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
               <!--<![endif]-->
               <style>
                  * {
                  box-sizing: border-box;
                  }
                  body {
                  margin: 0;
                  padding: 0;
                  }
                  a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
                  }
                  #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  }
                  p {
                  line-height: inherit
                  }
                  .desktop_hide,
                  .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
                  }
                  .image_block img+div {
                  display: none;
                  }
                  sup,
                  sub {
                  line-height: 0;
                  font-size: 75%;
                  }
                  @media (max-width:660px) {
                  .desktop_hide table.icons-inner,
                  .social_block.desktop_hide .social-table {
                  display: inline-block !important;
                  }
                  .icons-inner {
                  text-align: center;
                  }
                  .icons-inner td {
                  margin: 0 auto;
                  }
                  .mobile_hide {
                  display: none;
                  }
                  .row-content {
                  width: 100% !important;
                  }
                  .stack .column {
                  width: 100%;
                  display: block;
                  }
                  .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
                  }
                  .desktop_hide,
                  .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
                  }
                  }
               </style>
               <!--[if mso ]>
               <style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style>
               <![endif]-->
            </head>
            <body class="body" style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
               <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
               <tbody>
                  <tr>
                     <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:25px;padding-top:27px;width:100%;padding-right:0px;padding-left:0px;">
                                                         <div class="alignment" align="center" style="line-height:10px">
                                                            <div style="max-width: 160px;"><img src="https://8b060d7dea.imgdist.com/pub/bfra/2mom8gk2/t19/gls/fuq/TSC%20Normal%20Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="160" alt="I'm an image" title="I'm an image" height="auto"></div>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                                            <p style="margin: 0;">Order Delivered!</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0;">Hi ${customerName} !&nbsp;</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-top:5px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0;">Your Order has been successfully delivered!</p>
                                                            <p style="margin: 0;">Fall in love with the SmartGRID Comfort💙</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #f0f0f0;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
                                                         <div class="alignment" align="center">
                                                            <!--[if mso]>
                                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="clickpost AWB Link" style="height:62px;width:210px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1a2b58">
                                                               <w:anchorlock/>
                                                               <v:textbox inset="0px,0px,0px,0px">
                                                                  <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
                                                                     <![endif]--><a href="${pdflink}" target="_blank" style="background-color:#1a2b58;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:60px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>Download Invoice</strong></span></span></a><!--[if mso]>
                                                                  </center>
                                                               </v:textbox>
                                                            </v:roundrect>
                                                            <![endif]-->
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #e8e8e8;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-top:5px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0;">If your order has multiple shipments the invoices are made for every package.</p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #808389;">Please reply to this email incase you have any question or reach out to us at <strong>care@thesleepcompany.in</strong></span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b58; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1a2b58;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                                         <div class="alignment" align="center">
                                                            <table class="social-table" width="156px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                               <tr>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/thsleepco/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://x.com/thesleepco_?lang=en" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
                                                                  <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">Please view your My Orders page on thesleepcompany.in for more details on tracking.</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="divider_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                                         <div class="alignment" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                               <tr>
                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span style="word-break: break-word;">&#8202;</span></td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                                <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                   <tr>
                                                      <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                                         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                                                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #95979c;">The Sleep Company © 2024</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                           <tbody>
                              <tr>
                                 <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
                                       <tbody>
                                          <tr>
                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
                                                   <tr>
                                                      <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                         <!--[if vml]>
                                                         <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                                            <![endif]-->
                                                            <!--[if !vml]><!-->
                                                            <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                                               <!--<![endif]-->
                                                               <tr>
                                                                  <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                  <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                               </tr>
                                                            </table>
                                                            </td>
                                                            </tr>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- End -->
            </body>
          </html>`,
        },
        recipients: [
            {
                address: customerEmail,
            },
        ],
     },
     
   } 

   try{
   //  const savedEmailTemplate = await newEmailTemplate.save();
   //  console.log(savedEmailTemplate);
    return EmailTemplate[templateName];
  }catch (error){
    throw new Error (`Failed to save template": ${error.message}`);
  }
    }
}
