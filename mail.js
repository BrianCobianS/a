const nodemailer = require("nodemailer");
const datos= {  
    boleano: '1',
    path: 'C:/Users/brian.cobian/Desktop/IMDesatendida/Fullstackpage/mails/log.txt',
    message: 'The installation was successful, the current controller version is			TASK [installation : Print RML] ************************************************task path: /home/ebossteam/temp/10.89.105.98/playbooks/os4690/roles/installation/tasks/Report_Module_Backup.yml:14[WARNING]: sftp transfer mechanism failed on [10.89.105.98]. UseANSIBLE_DEBUG=1 to see detailed information[WARNING]: scp transfer mechanism failed on [10.89.105.98]. Use ANSIBLE_DEBUG=1to see detailed informationchanged: [10.89.105.98] => {"changed": true, "cmd": ["python", "print_report_module_levels.py"], "delta": "0:00:00.078605", "end": "2022-11-14 17:23:15.214141", "msg": "", "rc": 0, "start": "2022-11-14 17:23:15.135536", "stderr": "", "stderr_lines": [], "stdout": "Evaluating product levels.\n\nProduct = Toshiba SurePOS ACE     8.3.1 \n|---------current level-----------|                                \n|PID = 7501BA1                  |                                \n|SP/Build = A113                  |                                \n|Release = 301                    |                                \n|Base level = A000              |                                \n|Date applied = 11/14/22 17:21    |                                \n|PTF = U000000                    |                                \n|Emergency Fix = EF 0007          |                                \n----------------------------------|                                ", "stdout_lines": ["Evaluating product levels.", "", "Product = Toshiba SurePOS ACE     8.3.1 ", "|---------current level-----------|                                ", "|PID = 7501BA1                    |                                ", "|SP/Build = A113                  |                                ", "|Release = 301                    |                                ", "|Base level = A000                |                                ", "|Date applied = 11/14/22 17:21    |", "|PTF = U000000                    |                                ", "|Emergency Fix = EF 0007          |                                ", "----------------------------------|  "]}META: role_complete for 10.89.105.98META: role_complete for 10.89.105.98META: ran handlersMETA: ran handlersPLAY RECAP *********************************************************************10.89.105.98               : ok=38   changed=23   unreachable=0    failed=0    skipped=4    rescued=0    ignored=0',
    opc: '1',
    fecha: '12712/12',
    ASM: 'accept',
    paquetes: 'ACE,EPS',
    version: 'Morty',
    nivel: '12.ver12',
    email: 'brian.cobian@toshibagcs.com',
    pass: 'm1',
    usr: 'master',
    ip: '12.12.12',

} 

const Enviarmail= async (datos)=>{
	let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'unattendedinstallation@gmail.com', // generated ethereal user
          pass: 'futbizzvawdfzkgn', // generated ethereal password
        },
    });
    const{  ip, usr, pass, email, nivel, version, paquetes, ASM, fecha, opc, message, boleano, path} = datos
    let temp='';
	let result='';
    opc==1 ? temp ='Installation': temp ='Migration'
	boleano==1 ? result ='successful!! :)': result ='Failed :('
    console.log(email)
    const info = await transporter.sendMail({
        from:  "API - Unattended Intallation",
        to: email,
        subject: `Installation controller ${ip} ${result}`,
        text: "Verificacion de recibido",
        html: `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title> Unattended Installation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
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

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		#memu-r0c1m1:checked~.menu-links {
			background-color: transparent !important;
		}

		#memu-r0c1m1:checked~.menu-links a,
		#memu-r0c1m1:checked~.menu-links span {
			color: #ffffff !important;
		}

		@media (max-width:670px) {

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

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
				display: none !important;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-links,
			.menu-checkbox[type=checkbox]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links>a,
			.menu-checkbox[type=checkbox]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.mobile_hide {
				display: none;
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

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.first {
				display: table-footer-group !important;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-4 td.column.first .border,
			.row-4 td.column.last .border {
				padding-left: 0;
				padding-right: 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}

			.row-10 .column-1 .block-2.heading_block h2,
			.row-14 .column-1 .block-2.heading_block h2,
			.row-3 .column-1 .block-2.heading_block h1,
			.row-6 .column-1 .block-2.heading_block h1 {
				font-size: 45px !important;
			}
		}
	</style>
</head>

<body style="background-color: #000000; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7481/labor_bg.png');">
		<tbody>
			<tr>
				<td>
                    <table class="row row-19" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
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
                    <table class="row row-18" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff0400;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
                    <table class="row row-19" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
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
					
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
												<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
													<tbody>
														<tr>
															<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
																			<h1 style="margin: 0; color: #ffffff; font-size: 23px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Hello again ${email}! </span></h1>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
										<tbody>tophello
											<tr>
												<td class="column column-1" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align:center; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
																<p style="margin: 0; color: #ffffff; font-size: 62px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">The installation was ${result}</>
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
																<h2 style="margin: 0; color: #ffffff; font-size: 35px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Installation parameters:</span></h2>
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-right:10px;padding-bottom:10px;padding-left:10px;">
															<div style="color:#d5d5d5;font-size:20px;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-weight:400;line-height:150%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:27px;">                                                                    
																	<ol>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">IP: 		<strong style="color: #ffffff;">${ip} </strong></li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">User: 		<strong style="color: #ffffff;">${usr}</strong></li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">Password: 	<strong style="color: #ffffff;">${pass}</strong> </li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">Type of installation: <strong style="color: #ffffff;">${temp}</strong> </li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">Version: <strong style="color: #ffffff;">${version}</strong> </li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">Level: <strong style="color: #ffffff;">${nivel}</strong> </li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">packages: <strong style="color: #ffffff;">${paquetes}</strong></li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">ASM: <strong style="color: #ffffff;">${ASM}</strong></li>
                                                                    <li style= "margin-block-start: 0em; margin-block-end: 0em">Installation date: <strong style="color: #ffffff;">${fecha} </strong></li>
                                                                    </ol> 
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: center; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-top:50px;padding-right:10px;padding-bottom:10px;padding-center:10px;">
																<h2 style="margin: 0; color: #ffffff; font-size: 45px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Here is more information:</span></h2>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:10px;padding-right:10px;padding-bottom:45px;padding-left:10px;">
																<div style="color:#d5d5d5;font-size:18px;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-weight:400;line-height:150%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:27px;">
																	<p style="margin: 0;">${message}</p>
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="41.666666666666664%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
																<h1 style="margin: 0; color: #ffffff; font-size: 45px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Remember:</span></h1>

                                                            </td>
															
															
														</tr>
													</table>

												</td>
												<td class="column column-2" width="58.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">

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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-right:10px;padding-bottom:50px;padding-left:10px;">
																<p style="color:#d5d5d5;font-size:18px;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-weight:400;line-height:150%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:27px;">If you would like to know more about the installation please do not forget to check the installation information attached in the mail, also remember that you can confirm the installation of your controller through putty. https://www.putty.org/</p>
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


                    <table class="row row-18" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff0400">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
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
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 650px;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
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
	</table><!-- End -->
</body>

</html>
  `,
  attachments: [
	{   // file on disk as an attachment
		filename: `Log-${ip}.txt`,
		path: `${path}` // stream this file
	}]
    })
    console.log("Mensaje enviado: %s", info.messageId)
}
Enviarmail(datos)