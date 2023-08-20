import React, {useState, useEffect} from 'react';
import { AiOutlineClose } from "react-icons/ai"
import {Table, Modal, Button, Tab}from 'react-bootstrap';
import messageSent from '../assets/message.svg'
import done from '../assets/done.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const initialRows = [
  {
    id: 1,
    productName: 'Product 1',
    partNo: 'P001',
    description: 'Description 1',
    migName: 'MIG 1',
    quantity: 1,
    weight: '1kg',
    priceUSD:'$20',
    freightPortion:'23',
    freightPercent:'12%',
    unitFreightPrice:'$12',
    dutyHSCode:'Abc001',
    dutyRate:'0.12%',
    totalDuty:'5%',
    localClearing:'1.2%',
    markUpPercentage:'2%',
    markUp:'$12',
    NCDCharge:'1%',
    WHT:'$12',
    costOfCapital:'$500',
    unitPriceCIF: '$100',
    unitPriceDuties: '$50',
    totalUnitPrice: '$150',
    statUplift: '10%',
    totalUplift: '$15',
  },
];

const summaryData = [
  {
    id:1,
    summary: 'Revenue', 
    EOM: '$5,000.50',
    dutiesAndFees: '$5,000.50',
    freightCost: '$5,000.50',
    WHI: '$5,000.50',
    Markup: '$5,000.50',
    costOfCapital: '$5,000.50',
    extendedPrice: '$5,000.50'
  },
  {
    id:2,
    summary: 'Cost', 
    EOM: '$5,000.50',
    dutiesAndFees: '$5,000.50',
    freightCost: '$5,000.50',
    WHI: '$5,000.50',
    Markup: '$5,000.50',
    costOfCapital: '$5,000.50',
    extendedPrice: '$5,000.50'
  },
  {
    id:3,
    summary: 'Profit', 
    EOM: '$5,000.50',
    dutiesAndFees: '$5,000.50',
    freightCost: '$5,000.50',
    WHI: '$5,000.50',
    Markup: '$5,000.50',
    costOfCapital: '$5,000.50',
    extendedPrice: '$5,000.50'
  },
  {
    id:4,
    summary: 'Profit margin', 
    EOM: '',
    dutiesAndFees: '',
    freightCost: '',
    WHI: '',
    Markup: '',
    costOfCapital: '',
    extendedPrice: '35%'
  },
  {
    id:5,
    summary: 'Profit margin/month', 
    EOM: '',
    dutiesAndFees: '',
    freightCost: '',
    WHI: '',
    Markup: '',
    costOfCapital: '',
    extendedPrice: '35%'
  },
  {
    id:6,
    summary: 'Profit margin/uplift', 
    EOM: '',
    dutiesAndFees: '',
    freightCost: '',
    WHI: '',
    Markup: '',
    costOfCapital: '',
    extendedPrice: '35%'
  },
  {
    id:7,
    summary: 'Total uplift', 
    EOM: '',
    dutiesAndFees: '',
    freightCost: '',
    WHI: '',
    Markup: '',
    costOfCapital: '',
    extendedPrice: '35%'
  },
]

function MainPage() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setIsButtonDisabled(true);
    setComment('');
  
  }

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [comment, setComment] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setComment(newComment);

    // Check if the textarea is empty
    if (newComment.trim() === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const [showCIFExtension, setShowCIFExtension] = useState(false);
  const [showDutiesExtension, setShowDutiesExtension] = useState(false);
  const [showTotalPriceExtension, setShowTotalPriceExtension] = useState(false);

  // Function to toggle extension visibility
  const toggleCIFExtension = () => setShowCIFExtension(!showCIFExtension);
  const toggleDutiesExtension = () => setShowDutiesExtension(!showDutiesExtension);
  const toggleTotalPriceExtension = () => setShowTotalPriceExtension(!showTotalPriceExtension);

  const [rows, setRows] = useState(initialRows);
  const [nextId, setNextId] = useState(initialRows.length + 1);

  const addNewLine = () => {
    const newRow = {
      id: nextId,
      productName: '',
      partNo: '',
      description: '',
      migName: '',
      quantity: '',
      weight: '',
      unitPriceCIF: '',
      unitPriceDuties: '',
      totalUnitPrice: '',
      statUplift: '',
      totalUplift: '',
    };
    setRows([...rows, newRow]);
    setNextId(nextId + 1);
  };

  const handleInputChange = (e, id, key) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [key]: e.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: true, 
    });
  }, [])
  return (
    <div className="App">
      <div className='app-container'>
        <div className='app-header'>
          <h1>Update Quote</h1>
          <AiOutlineClose style={{cursor:'pointer'}}/>
        </div>
        <div className='app-1'>
            <h3>Parameters</h3>
            <div className='app-1-content-main'>
            <div className='app-1-content-container'>
              <div className='app-1-content'>
                <h3 style={{backgroundColor: '#97b3e3'}}>RFQ Number</h3>
                <h3>General</h3>
                <div className='app-1-content-1'>
                  <p>Markup by line item</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Markup by %</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Withholding tax</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Monthly cost of capital (Client)</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Monthly cost of capital (NeomDek)</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>OEM discount</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Payment timing after invoice</p>
                  <input></input>
                </div>

              </div>
              <div className='app-1-content'>
                <input></input>
                <h3>Duties & Fees</h3>
                <div className='app-1-content-1'>
                  <p>Surcharge</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>CISS</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>VAT</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>TLS</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Local Clearing</p>
                  <input></input>
                </div>

              </div>
              <div className='app-1-content'>
                <div className='dummy'></div>
                <h3>Freight</h3>
                <div className='app-1-content-1'>
                  <p>Insurance</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Total weight</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Total freight cost</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Weight approach</p>
                  <input></input>
                </div>
                <div className='app-1-content-1'>
                  <p>Delivery lead time</p>
                  <input></input>
                </div>

              </div>
            
            </div>
            <div className='app-1b'>
            <h3>Quote Pipeline</h3>
          </div>
          </div>
        </div>
        <div className='app-1'>
          <h3>Bid Details</h3>
          <div className='app-1-table'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Part No</th>
            <th>Long Text Description</th>
            <th>MFg Name</th>
            <th>Quantity</th>
            <th>Weight</th>
            {showCIFExtension && (
              <React.Fragment>
                <th>Price <br/> in USD</th>
                <th>Freight <br/> Portion</th>
                <th>Freight <br/>%</th>
                <th>Unit <br/> Freight <br/> Price</th>
              </React.Fragment>
      )}
            <th style={{ backgroundColor: showCIFExtension ? '#97b3e3' : '#f3f3f3', cursor: 'pointer' }}>
            <div onClick={toggleCIFExtension}>
              Unit Price <br /> CIF (Freight, <br /> Insurance, OEM)
            </div>
            </th>
      {showDutiesExtension && (
        <React.Fragment  >
          <th>Duty <br/> HS Code</th>
          <th>Duty <br/> Rate</th>
          <th>Total Duty <br/> (Surcharge <br/> TISS, VAT, TLS)</th>
          <th>Local <br/> Clearing</th>
          <th>Markup <br/> %</th>
          <th>Markup</th>
        </React.Fragment>
      )}
            <th style={{ backgroundColor: showDutiesExtension ? '#97b3e3' : '#f3f3f3', cursor: 'pointer' }}>
            <div onClick={toggleDutiesExtension }>
              Unit Price <br /> Duties (Landed <br /> to Nigeria)
            </div>
            </th>
      {showTotalPriceExtension && (
        <React.Fragment>
          <th>1% NCD <br/> Charge</th>
          <th>WHT</th>
          <th>Cost of <br/> Capital</th>
        </React.Fragment>
      )}
            <th style={{ backgroundColor: showTotalPriceExtension ? '#97b3e3' : '#f3f3f3', cursor: 'pointer' }}>
            <div onClick={toggleTotalPriceExtension }>
              Total Unit <br /> Price (Q + R)
            </div>
            </th>
            <th>Stat. Uplift</th>
            <th>Total Uplift</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type='text'
                  value={row.productName}
                  onChange={(e) => handleInputChange(e, row.id, 'productName')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.partNo}
                  onChange={(e) => handleInputChange(e, row.id, 'partNo')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.description}
                  onChange={(e) => handleInputChange(e, row.id, 'description')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.migName}
                  onChange={(e) => handleInputChange(e, row.id, 'migName')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.quantity}
                  onChange={(e) => handleInputChange(e, row.id, 'quantity')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.weight}
                  onChange={(e) => handleInputChange(e, row.id, 'weight')}
                />
              </td>
              {showCIFExtension && (
                      <>
                        <td  data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.priceUSD}
                            onChange={(e) => handleInputChange(e, row.id, 'priceUSD')}
                          />
                        </td>
                        <td  data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.freightPortion}
                            onChange={(e) => handleInputChange(e, row.id, 'freightPortion')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.freightPercent}
                            onChange={(e) => handleInputChange(e, row.id, 'freightPercent')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.unitFreightPrice}
                            onChange={(e) => handleInputChange(e, row.id, 'unitFreightPrice')}
                          />
                        </td>
                      </>
                    )}
              <td>
                <input
                  type='text'
                  value={row.unitPriceCIF}
                  onChange={(e) => handleInputChange(e, row.id, 'unitPriceCIF')}
                />
              </td>
              {showDutiesExtension && (
                      <>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.dutyHSCode}
                            onChange={(e) => handleInputChange(e, row.id, 'dutyHSCode')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.dutyRate}
                            onChange={(e) => handleInputChange(e, row.id, 'dutyRate')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.totalDuty}
                            onChange={(e) => handleInputChange(e, row.id, 'totalDuty')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.localClearing}
                            onChange={(e) => handleInputChange(e, row.id, 'localClearing')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.markUpPercentage}
                            onChange={(e) => handleInputChange(e, row.id, 'markUpPercentage')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.markUp}
                            onChange={(e) => handleInputChange(e, row.id, 'markUp')}
                          />
                        </td>
                      </>
                    )}
              <td>
                <input
                  type='text'
                  value={row.unitPriceDuties}
                  onChange={(e) => handleInputChange(e, row.id, 'unitPriceDuties')}
                />
              </td>
              {showTotalPriceExtension && (
                      <>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.NCDCharge}
                            onChange={(e) => handleInputChange(e, row.id, 'NCDCharge')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.WHT}
                            onChange={(e) => handleInputChange(e, row.id, 'WHT')}
                          />
                        </td>
                        <td data-aos="fade-left" data-aos-duration='1000'>
                          <input
                            type="text"
                            value={row.costOfCapital}
                            onChange={(e) => handleInputChange(e, row.id, 'costOfCapital')}
                          />
                        </td>
                      </>
                    )}
              <td>
                <input
                  type='text'
                  value={row.totalUnitPrice}
                  onChange={(e) => handleInputChange(e, row.id, 'totalUnitPrice')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.statUplift}
                  onChange={(e) => handleInputChange(e, row.id, 'statUplift')}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.totalUplift}
                  onChange={(e) => handleInputChange(e, row.id, 'totalUplift')}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <button onClick={addNewLine}>+AddLine</button>
      </Table>
    </div>
        </div>
        <div className='app-2'>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{textAlign:'left', width:'200px'}}>Summary</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Extended OEM Cost <br/> (Real Rate)</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Duties & Fees</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Freight Cost</th>
          <th style={{backgroundColor:'#e9f0fd'}}>WHI</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Markup</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Cost of Capital</th>
          <th style={{backgroundColor:'#e9f0fd'}}>Extended Price</th>
        </tr>
      </thead>
      <tbody>
      {
        summaryData.map((row)=>{
          return(
          <tr key={row.id}>
          <td style={{textAlign:'left'}}>{row.summary}</td>
          <td>{row.EOM}</td>
          <td>{row.dutiesAndFees}</td>
          <td>{row.freightCost}</td>
          <td>{row.WHI}</td>
          <td>{row.Markup}</td>
          <td>{row.costOfCapital}</td>
          <td>{row.extendedPrice}</td>
        </tr>
          )
        })
      }
        
      </tbody>
    </Table>
        </div>
        <div className='app-1'>
          <h3>Comments</h3>
          <div className='app-textarea'>
            <textarea 
            value={comment}
            onChange={handleCommentChange}
            rows={4} placeholder='Enter your comment'></textarea>
            <button onClick={handleShow}  disabled={isButtonDisabled}>Post a comment</button>
          </div>
        </div>
        <div className='app-bottom'>
          <button onClick={handleShow1} style={{padding: '0.4rem 2rem'}}>Save</button>
          <button onClick={handleShow1}>Submit/Approve</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <div className='commemt'>
            <img src={messageSent} alt='message-sent'/>
            <h3>Message sent succcessfully</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1} centered>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <div className='commemt'>
            <img src={done} alt='message-sent'/>
            <h3>Quote updated succcessfully</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MainPage;
