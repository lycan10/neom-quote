import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"
const Documentation = () => {
  return (
    <div className='doc'>
        <div className='title' style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
        <h1>Quote Update Web Application</h1>
            <div className='doc-link' style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'1rem'}}>
                <AiOutlineArrowLeft />
                <Link to='/' style={{color:'black', textDecoration:'none', marginLeft:'5px'}}><h3 style={{ margin:'0', fontWeight: '300', fontSize:'14px'}}>back to home</h3></Link>
            </div>
        </div>
    <h3>Introduction</h3>
        <p>The "Quote Update" web application is a tool designed to help users manage and update quotes for products. It provides a user-friendly interface for inputting product details, calculating costs and profits, and adding comments. This guide will walk you through the basic functionality of the application.</p>
      
    <h3>Getting Started</h3>  
        <p>1. <span>Access the Application</span>: To begin using the application, you need to access it through a web browser. Enter the URL or click on the provided link to open the application.</p>
        <p>2. <span>Login or Register</span>: Depending on the setup, you may be required to log in using your credentials or register for a new account. Follow the on-screen instructions to complete this step.</p>
    
    <h3>Main Dashboard</h3>
        <p>After logging in, you'll be directed to the main dashboard. Here's what you can do:</p>
        <h5>Update Quote Parameters</h5>
        <p>RFQ Number: Enter the RFQ (Request for Quotation) number.</p>
        <p>General: Fill in details such as markup, withholding tax, and cost of capital.</p>
        <p>Duties & Fees: Input surcharge, CISS, VAT, TLS, and local clearing details.</p>
        <p>Freight: Provide information about insurance, total weight, freight cost, and delivery lead time.</p>
        
        <h5>Quote Pipeline</h5>
        <p>The "Quote Pipeline" section allows you to manage different stages of your quotes.</p>

        <h5>Bid Details Table</h5>
        <p>This table is the core of the application. It allows you to add and manage details for individual products. Each row represents a product, and you can input the following information:</p>
        <ul>
            <li><span>Product Name</span>: The name of the product.</li>
            <li><span>Part No</span>: The product's part number.</li>
            <li><span>Long Text Description</span>: A detailed description of the product.</li>
            <li><span>Mfg Name</span>: The manufacturer's name.</li>
            <li><span>Quantity</span>: The quality of the product.</li>
            <li><span>Weight</span>: The product's weight.</li>
            <li><span>Unit Price CIF</span>: Price including Freight, Insurance, and OEM.</li>
            <li><span>Unit Price Duties</span>: Price including Duties (Landed to Nigeria).</li>
            <li><span>Total Unit Price</span>: The product's weight.</li>
            <li><span>Stat. Uplift</span>: Statistical uplift.</li>
            <li><span>Total Uplift</span>: Total uplift.</li>
        </ul>
            <p>You can also extend the table to input additional details by clicking on the column headers for CIF, Duties, and Total Price.</p>
        
        <h5>Comments</h5>
            <p>You can add comments related to the quote in the "Comments" section. Type your comment in the text area and click "Post a comment." You can't post empty comments.</p>
        
        <h5>Saving and Submitting</h5>
            <p>At the bottom of the page, you'll find buttons for saving and submitting your changes. Click "Save" to save your progress, and "Submit/Approve" to finalize the quote.</p>
    
        <h3>Modals</h3>
        <ul>
            <li><span>Message Sent</span>: After submitting a comment, a modal with a success message will appear.</li>
            <li><span>Quote Updated Successfully</span>: When you submit or approve the quote, you'll see a modal indicating successful submission.</li>
        </ul>
        
        <h3>Conclusion</h3>
            <p>The "Quote Update" web application simplifies the process of managing and updating quotes. Make sure to save your progress as you work on your quotes, and don't forget to submit them when they're ready for approval. Enjoy using the application!</p>
    
    </div>
  )
}

export default Documentation
