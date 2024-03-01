<!DOCTYPE html>
<html lang="en"
      xmlns:th="http://www.thymeleaf.org" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email Template</title>
</head>
<body>
<table width="600" style="font-family: Arial, Helvetica, sans-serif; font-size: 0.875rem; color: rgb(51, 51, 51);">
    <tr>
        <td>
            <div style="background-color: rgb(189, 9, 18); height: 8px; width: 30%; float: left;"></div>
            <div style="background-color: rgb(66, 93, 184); height: 8px; width: 70%; float: left;"></div>
        </td>
    </tr>
    <tr>
        <td style="padding: 32px 48px 0 48px;">
            <div style="float: left; margin-left: 16px;">
                <p style="color:rgb(189, 9, 18); font-size: 16px; font-weight: 600; margin-bottom: 8px; margin-top: 8px;">Abroad Dreams</p>
                <p style="color:rgb(66, 93, 184); font-size: 14px; font-weight: 600; margin-top: 8px;">Coders Brigade</p>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 48px;">
            <div style="margin-top: 4rem; font-weight: 600; margin-bottom: 1.5rem; font-size: 1rem">Hi,</div>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 48px;">
            <div style="margin-bottom: 1.5rem;">Your account has been successfully created. <a href="www.abc.com" style="color: rgb(26, 115, 232)">Click here</a> to login.</div>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 48px;">
            <table style="font-size: 0.75rem; margin-top: 1.5rem;padding: 1rem;width: 100%; background-color: rgb(246, 246, 246);">
                <tr>
                    <td style="vertical-align: top; width: 50%;">
                        <table>
                            <tr>
                                <td>
                                    <div style="font-weight: 600; margin-bottom: 1rem; color: rgb(189 9 18)">Your Account Details</div>
                                </td>
                            </tr>
                            <tr>
                                <td style="color: rgb(153, 153, 153);">
                                    <div style="display: flex">
                                        <div style="margin-right: 0.375rem;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="rgb(153,153,153)">
                                                <path d="M11.8 0C5.2.1-.1 5.5 0 12.2.1 18.8 5.5 24.1 12.2 24c6.6-.1 11.9-5.5 11.8-12.2C23.9 5.2 18.5-.1 11.8 0zm1.4 4c1.2 0 1.6.7 1.6 1.5 0 1-.8 1.9-2.2 1.9-1.2 0-1.7-.6-1.7-1.5 0-.8.7-1.9 2.3-1.9zM10 19.5c-.8 0-1.4-.5-.9-2.7l1-3.9c.2-.6.2-.9 0-.9-.3 0-1.3.4-2 .9l-.4-.7c2-1.7 4.4-2.7 5.4-2.7.8 0 1 1 .6 2.5l-1.1 4.1c-.2.7-.1 1 .1 1 .3 0 1.1-.3 1.9-.9l.5.6c-2.1 1.9-4.2 2.7-5.1 2.7z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <span>Please make sure you change your password during first login</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>Email</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; padding-bottom: 1rem">[[email]]</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding: 1rem 48px 1.5rem 48px">For additional help or information, email us at <a href="#" style="color: rgb(26, 115, 232)">www.infodev.com.np</a> </td>
    </tr>
    <tr>
        <td style="background-color: rgb(66 93 184); padding: 1rem 0;">
            <table style="font-size: 0.75rem; color: rgb(255,255,255); width: 100%; text-align: center">
                <tr>
                    <td style="padding-bottom: 0.5rem">Copyright © 2020. All rights reserved.</td>
                </tr>
                <tr>
                    <td>Canteen management system</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
