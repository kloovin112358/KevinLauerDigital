import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const inputFile = `
    Order ID, Customer ID, Customer Name, Part Number, Part Description, Quantity
    235678, 3523523, , 555-WES ,    , 100
    5325,  3523524,   , 32534XDS, Bracket, 250
    1234567, 3523525,Industrial Solutions, 245-WEX , Cable, 15
    9876543,3523526,  ,  89234-XYZ, Steel Rod, , 30
    654321, 3523527, WestSide Co, 555-WES, Clamp,    45
    345678, , Smith & Co,    89234-XWZ, , Pulley, 55
    234567, 3523528,    Johnson's Tools, 32342-BXY, Bracket 75
    134679,3523529,SouthEnd Industrial, 53523SDX, , 80
    112233, 3523530, , 23432-BXD, Hex Nut, 120
    887766, , ,23542-WXE, , Cable, 60
    776655, 3523532, Industrial Solutions, 32412-AXY, Bolt,  , 5
    665544, 3523533, Smith & Co, 53423-SXW, Pulley, 20
    554433,3523534,  Johnson's Tools, 32412-WAX , , Bolt, 25
    443322, 3523535,  SouthEnd Industrial, , 65342-SDW, Hex Nut, 35
    332211,3523536,WestSide Co,53423-SXW,Clamp,    50
    221100, ,  Industrial Solutions, 65342-WDX, Pulley, 65
    110022,3523537,Smith & Co,23412-SXA,Bracket 70
    999999, 3523538, Johnson's Tools,53412-WDX, Cable, 80
    888888, , SouthEnd Industrial, 65312-XWA, Hex Nut,  90
    777777,3523539,  WestSide Co,65342-XSA,  Clamp,100
    666666,3523540, Industrial Solutions, 53412-XWA, Pulley 110
    555555, , Smith & Co, 65312-XWS, Bolt, 120
    444444,3523541, Johnson's Tools, 53412-WDS, Hex Nut,130
    333333,3523542,SouthEnd Industrial, 65342-XSA, Clamp, 140
    222222, , WestSide Co, 65312-WXA, Pulley,150
    111111,3523543,Industrial Solutions,65312-WDX, Bracket,160
    000000, , Smith & Co, 65312-WDS, Bolt, 170
    555444,3523544, Johnson's Tools,65312-WAX, Hex Nut 180
    444333,3523545, SouthEnd Industrial,65312-WXS, Clamp, 190
`

const PythonScript = `
    import csv
    import re

    def remove_prefix(text, prefix):
        if text.startswith(prefix):
            return text[len(prefix):]
        return text

    def get_chars_up_to_next_number(s):
        result = []
        for char in s:
            if char.isdigit():
                break
            result.append(char)
        return ''.join(result)

    def clean_data(file_path):
        cleaned_data = [["Order ID", 
        "Customer ID", "Customer Name", 
        "Part Number", "Part Description", "Quantity"]]

        with open(file_path, 'r') as file:
            next(file)
            for line in file:
                line = line.strip()
                
                if not line:
                    continue
        
                line_data = []
                
                orderID = (line.split(',', 1)[0]).strip()
                line_data.append(orderID)
                line = line.split(',', 1)[1]
                
                customerID = (line.split(',', 1)[0]).strip()
                if len(customerID) == 7 and customerID.isnumeric():
                    line_data.append(customerID)
                else:
                    line_data.append("")
                line = line.split(',', 1)[1]
                
                customerName = get_chars_up_to_next_number(line)
                line = remove_prefix(line, customerName)
                customerName = customerName.rstrip(' ,')
                customerName = customerName.lstrip(' ,')
                line_data.append(customerName)
                
                partNumber = (line.split(',', 1)[0]).strip()
                line_data.append(partNumber)
                line = line.split(',', 1)[1]
                
                partDescription = get_chars_up_to_next_number(line)
                line = remove_prefix(line, partDescription)
                partDescription = partDescription.rstrip(' ,')
                partDescription = partDescription.lstrip(' ,')
                line_data.append(partDescription)
                
                line = line.strip()
                line_data.append(line)
                
                cleaned_data.append(line_data)
        
        return cleaned_data

    def write_to_csv(cleaned_data, output_file):
        with open(output_file, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile, quoting=csv.QUOTE_MINIMAL)
            writer.writerows(cleaned_data)

    def main():
        input_file = 'ERP_Output.txt'
        output_file = 'ERP_Output_Cleaned.csv'
        
        cleaned_data = clean_data(input_file)
        write_to_csv(cleaned_data, output_file)
        print(f"Data cleaned and written to {output_file}")

    if __name__ == "__main__":
        main()
`

const CSVOutputData = [
    { orderId: "235678", customerId: "3523523", customerName: "", partNumber: "555-WES", partDescription: "", quantity: 100 },
    { orderId: "5325", customerId: "3523524", customerName: "", partNumber: "32534XDS", partDescription: "Bracket", quantity: 250 },
    { orderId: "1234567", customerId: "3523525", customerName: "Industrial Solutions", partNumber: "245-WEX", partDescription: "Cable", quantity: 15 },
    { orderId: "9876543", customerId: "3523526", customerName: "", partNumber: "89234-XYZ", partDescription: "Steel Rod", quantity: 30 },
    { orderId: "654321", customerId: "3523527", customerName: "WestSide Co", partNumber: "555-WES", partDescription: "Clamp", quantity: 45 },
    { orderId: "345678", customerId: "", customerName: "Smith & Co", partNumber: "89234-XWZ", partDescription: "Pulley", quantity: 55 },
    { orderId: "234567", customerId: "3523528", customerName: "Johnson's Tools", partNumber: "32342-BXY", partDescription: "Bracket", quantity: 75 },
    { orderId: "134679", customerId: "3523529", customerName: "SouthEnd Industrial", partNumber: "53523SDX", partDescription: "", quantity: 80 },
    { orderId: "112233", customerId: "3523530", customerName: "", partNumber: "23432-BXD", partDescription: "Hex Nut", quantity: 120 },
    { orderId: "887766", customerId: "", customerName: "", partNumber: "23542-WXE", partDescription: "Cable", quantity: 60 },
    { orderId: "776655", customerId: "3523532", customerName: "Industrial Solutions", partNumber: "32412-AXY", partDescription: "Bolt", quantity: 5 },
    { orderId: "665544", customerId: "3523533", customerName: "Smith & Co", partNumber: "53423-SXW", partDescription: "Pulley", quantity: 20 },
    { orderId: "554433", customerId: "3523534", customerName: "Johnson's Tools", partNumber: "32412-WAX", partDescription: "Bolt", quantity: 25 },
    { orderId: "443322", customerId: "3523535", customerName: "SouthEnd Industrial", partNumber: "65342-SDW", partDescription: "Hex Nut", quantity: 35 },
    { orderId: "332211", customerId: "3523536", customerName: "WestSide Co", partNumber: "53423-SXW", partDescription: "Clamp", quantity: 50 },
    { orderId: "221100", customerId: "", customerName: "Industrial Solutions", partNumber: "65342-WDX", partDescription: "Pulley", quantity: 65 },
    { orderId: "110022", customerId: "3523537", customerName: "Smith & Co", partNumber: "23412-SXA", partDescription: "Bracket", quantity: 70 },
    { orderId: "999999", customerId: "3523538", customerName: "Johnson's Tools", partNumber: "53412-WDX", partDescription: "Cable", quantity: 80 },
    { orderId: "888888", customerId: "", customerName: "SouthEnd Industrial", partNumber: "65312-XWA", partDescription: "Hex Nut", quantity: 90 },
    { orderId: "777777", customerId: "3523539", customerName: "WestSide Co", partNumber: "65342-XSA", partDescription: "Clamp", quantity: 100 },
    { orderId: "666666", customerId: "3523540", customerName: "Industrial Solutions", partNumber: "53412-XWA", partDescription: "Pulley", quantity: 110 },
    { orderId: "555555", customerId: "", customerName: "Smith & Co", partNumber: "65312-XWS", partDescription: "Bolt", quantity: 120 },
    { orderId: "444444", customerId: "3523541", customerName: "Johnson's Tools", partNumber: "53412-WDS", partDescription: "Hex Nut", quantity: 130 },
    { orderId: "333333", customerId: "3523542", customerName: "SouthEnd Industrial", partNumber: "65342-XSA", partDescription: "Clamp", quantity: 140 },
    { orderId: "222222", customerId: "", customerName: "WestSide Co", partNumber: "65312-WXA", partDescription: "Pulley", quantity: 150 },
    { orderId: "111111", customerId: "3523543", customerName: "Industrial Solutions", partNumber: "65312-WDX", partDescription: "Bracket", quantity: 160 },
    { orderId: "000000", customerId: "", customerName: "Smith & Co", partNumber: "65312-WDS", partDescription: "Bolt", quantity: 170 },
    { orderId: "555444", customerId: "3523544", customerName: "Johnson's Tools", partNumber: "65312-WAX", partDescription: "Hex Nut", quantity: 180 },
    { orderId: "444333", customerId: "3523545", customerName: "SouthEnd Industrial", partNumber: "65312-WXS", partDescription: "Clamp", quantity: 190 }
];

function AutomationScriptSample () {

    const [showTXTFileElements, setShowTXTFileElements] = useState(false);
    const handleTXTFileToggle = () => {
        setShowTXTFileElements(!showTXTFileElements);
    };

    const [showPythonElements, setShowPythonElements] = useState(false);
    const handlePythonToggle = () => {
        setShowPythonElements(!showPythonElements);
    };

    const [showCSVOutputElements, setShowCSVOutputElements] = useState(false);
    const handleCSVOutputToggle = () => {
        setShowCSVOutputElements(!showCSVOutputElements);
    };

    return (
        <div className="container-fluid">
            <div>
                <div className="card border border-primary">
                    <div className="card-header text-center fw-bold">
                        Messy .txt file export
                    </div>
                    <div className="card-body">
                        <small className={`hidden-script-elements ${showTXTFileElements ? '' : 'hidden'}`}>
                            {inputFile}
                        </small>
                        <button className="d-block d-xl-none btn btn-link mx-auto" onClick={handleTXTFileToggle}>{showTXTFileElements ? 'Hide details' : 'Show details'}</button>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg mt-2 mt-lg-0">
                    <div className="card border border-primary">
                        <div className="card-header text-center fw-bold">
                            Python script
                        </div>
                        <div className="card-body">
                            <SyntaxHighlighter language="python" style={darcula} className={`hidden-script-elements ${showPythonElements ? '' : 'hidden'}`}>
                                {PythonScript}
                            </SyntaxHighlighter>
                            <button className="d-block d-xl-none btn btn-link mx-auto" onClick={handlePythonToggle}>{showPythonElements ? 'Hide details' : 'Show details'}</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg mt-2 mt-lg-0">
                    <div className="card border border-primary">
                        <div className="card-header text-center fw-bold">
                            CSV output
                        </div>
                        <div className="card-body">
                            <small className={`hidden-inline-script-elements ${showCSVOutputElements ? '' : 'hidden'}`}>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer ID</th>
                                                <th>Customer Name</th>
                                                <th>Part Number</th>
                                                <th>Part Description</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {CSVOutputData.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.orderId}</td>
                                                    <td>{row.customerId}</td>
                                                    <td>{row.customerName}</td>
                                                    <td>{row.partNumber}</td>
                                                    <td>{row.partDescription}</td>
                                                    <td>{row.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </small>
                            <button className="d-block d-xl-none btn btn-link mx-auto" onClick={handleCSVOutputToggle}>{showCSVOutputElements ? 'Hide details' : 'Show details'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutomationScriptSample;
