Railway Platform Ticket Counter System

Project Overview

The Railway Platform Ticket Counter System is a mini-project developed using 8085 Assembly Language and web technologies.

The project demonstrates basic ticket fare calculation, payment processing, and change calculation.

Technologies Used

- GNU 8085 Simulator
- 8085 Assembly Language
- HTML
- CSS
- JavaScript

Features

- Passenger name input
- Ticket quantity selection
- Automatic fare calculation
- Payment amount entry
- Change calculation
- Remaining payment calculation
- Responsive user interface

Ticket Details

- Price per ticket: ₹25
- Maximum tickets per transaction: 99

How to Run the Web Interface

1. Download or clone the project.
2. Keep Index.html, Style.css, and Script.js in the same folder.
3. Open Index.html in a web browser.
4. Enter passenger details.
5. Enter the number of tickets and payment amount.
6. Click Calculate Fare to view the result.

How to Run the 8085 Program

1. Open GNU 8085 Simulator.
2. Enter the instructions from RailwayTicket.asm.
3. Execute the program.
4. Inspect memory addresses 2053H and 2054H for the calculated fare and change.

Expected Result

For four tickets at ₹25 each and a payment of ₹150:

- Total fare: ₹100
- Change: ₹50

Note

The web interface performs calculations using JavaScript. The 8085 Assembly program independently demonstrates the same basic fare and change calculations using predefined sample values.

This is an educational simulation, not a real railway booking or payment system.
