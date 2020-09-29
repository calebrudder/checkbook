# checkbook
This is my answer to the daily challenge number 4 found at dev.to.

I wanted to challenge myself to do this with a closure.

# Challenge: 

You are given a small checkbook to balance that is given to you as a string. Sometimes, this checkbook will be cluttered by non-alphanumeric characters.

The first line shows the original balance. Each other (not blank) line gives information: check number, category, and check amount.

You need to clean the lines first, keeping only letters, digits, dots, and spaces. Next, return the report as a string. On each line of the report, you have to add the new balance. In the last two lines, return the total expenses and average expense. Round your results to two decimal places.

<br>Example Checkbook<br>
1000.00<br>
125 Market 125.45<br>
126 Hardware 34.95<br>
127 Video 7.45<br>
128 Book 14.32<br>
129 Gasoline 16.10<br><br>

Example Solution<br>
Original_Balance: 1000.00<br>
125 Market 125.45 Balance 874.55<br>
126 Hardware 34.95 Balance 839.60<br>
127 Video 7.45 Balance 832.15<br>
128 Book 14.32 Balance 817.83<br>
129 Gasoline 16.10 Balance 801.73<br>
Total expense 198.27<br>
Average expense 39.65<br><br>

Challenge Checkbook<br>
1233.00<br>
125 Hardware;! 24.8?;<br>
123 Flowers 93.5<br>
127 Meat 120.90<br>
120 Picture 34.00<br>
124 Gasoline 11.00<br>
123 Photos;! 71.4?;<br>
122 Picture 93.5<br>
132 Tires;! 19.00,?;<br>
129 Stamps 13.6<br>
129 Fruits{} 17.6<br>
129 Market;! 128.00?;<br>
121 Gasoline;! 13.6?;<br>
