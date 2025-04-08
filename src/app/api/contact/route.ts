import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Determine the form type
    const isReferral = formData.isReferral === true;
    const isCareerApplication = formData.isCareerApplication === true;
    
    // Set subject and email content based on form type
    let subject = '';
    let htmlContent = '';
    
    if (isCareerApplication) {
      subject = `New Career Application from ${formData.firstName} ${formData.lastName}`;
      htmlContent = `
        <h1>New Career Application</h1>
        <p><strong>Name:</strong> ${formData.firstName || ''} ${formData.lastName || ''}</p>
        <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Position:</strong> ${formData.position || 'Not provided'}</p>
        <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
        <p><strong>Resume:</strong> Applicant submitted a resume file. Please check your system for the file.</p>
      `;
    } else if (isReferral) {
      subject = `New Referral from ${formData.referrerName || 'Website User'}`;
      htmlContent = `
        <h1>New Referral Submission</h1>
        
        <h2>Referrer Information</h2>
        <p><strong>Name:</strong> ${formData.referrerName || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${formData.referrerOrganization || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.referrerEmail || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.referrerPhone || 'Not provided'}</p>
        
        <h2>Participant Information</h2>
        <p><strong>Name:</strong> ${formData.participantName || 'Not provided'}</p>
        <p><strong>Date of Birth:</strong> ${formData.participantDOB || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.participantEmail || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.participantPhone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${formData.participantAddress || 'Not provided'}</p>
        <p><strong>NDIS Number:</strong> ${formData.ndisNumber || 'Not provided'}</p>
        
        <h2>Service Details</h2>
        <p><strong>Service Type:</strong> ${formData.serviceType || 'Not provided'}</p>
        <p><strong>Additional Information:</strong> ${formData.additionalInfo || 'Not provided'}</p>
      `;
    } else {
      subject = `New Contact Form Submission from ${formData.name}`;
      htmlContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not provided'}</p>
        <p><strong>Location:</strong> ${formData.location || 'Not provided'}</p>
        <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
      `;
    }
    
    // Email content
    const mailOptions: {
      from: string | undefined;
      to: string;
      subject: string;
      html: string;
      attachments?: Array<{
        filename: string;
        content: string;
        encoding: string;
      }>;
    } = {
      from: process.env.EMAIL_USER,
      to: 'faysalrulz123@gmail.com',
      subject: subject,
      html: htmlContent,
    };
    
    // Add resume attachment for career applications if available
    if (isCareerApplication && formData.resumeBase64 && formData.resumeFileName) {
      // Extract the actual base64 data (remove the data URL prefix)
      const base64Data = formData.resumeBase64.split(';base64,').pop();
      
      if (base64Data) {
        mailOptions.attachments = [
          {
            filename: formData.resumeFileName,
            content: base64Data,
            encoding: 'base64'
          }
        ];
      }
    }
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 