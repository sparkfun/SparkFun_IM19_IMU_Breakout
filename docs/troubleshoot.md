---
title: Troubleshoot
description: A compilation of support tips for this product
---

## SparkFun Forum
::::warning[Technical Support]
If you need technical assistance or more information on a product that is not working as you expected, we recommend heading on over to the [SparkFun Forums](https://community.sparkfun.com). The **Issues** page of the GitHub repository is not where users should seek assistance.


:::info[Account Registration Required]
For your first visit to our forum, you'll need to create a [Forum Account](https://community.sparkfun.com/signup) to post questions.
:::

::::



## Tilt-Compensation



### Configuration Requirements

- Access to the UART interfaces of the IM19 attitude module
	- By default, the `UART1` and `UART3` ports can be used to configure the IM19 attitude module and receive the tilt compensated position


		:::note[Data Protocol]
		The tilt-compensated position is transmitted in a proprietary data format using `FMI*` messages. The output of these messages also needs to be enabled.
		:::


- Access to configure the UART interface and PPS signal that are transmitting from the GNSS receiver to the IM19 attitude module

	::::note[UART Interface]
	For the UART interface of the GNSS receiver that is connected to the IM19 attitude module, users will need to configure the UART port for the following settings:

	- Baudrate: 115200bps
	- Output NMEA Messages: `GPGGA`, `GPRMC`, and `GPGST`
	- Solution Rate: **5Hz**

	<br />


	:::tip
	The IM19 attitude module requires RTK GNSS position data. That is to say, the GNSS receiver must be transmitting position data, while it has an **RTK Fix**.
	:::

	::::


	:::note[PPS Signal]
	The timing of the `PPS` signal from the GNSS receiver should be **1Hz**
	:::

- The location of the **ARC** of the GNSS antenna with respect to the IMU's origin; and the vector between the **APC** and survey point.


	:::info
	For information on the antenna reference point (ARP) and antenna phase center (APC), check out this useful [tutorial by Septentrio](https://customersupport.septentrio.com/s/article/ARP-APC-offsets).
	:::



## AT-Commands

- The AT-commands are case-sensitive double check that all characters are capitalized.
- The AT-commands need to be sent in a single string.
	- It is recommended to utilize a terminal emulator that sends a string of characters, instead of each character as they are typed. For example, the Serial Monitor in the Arduino IDE.
- Verify the baud rate is set to **115200bps**



### Save & Reset
Don't forget to save any parameter changes and reset the device, as necessary:


| AT Command        | Description         |
| :---------------- | :------------------ |
| `AT+SAVE_ALL`     | Save the parameters |
| `AT+SYSTEM_RESET` | System reset        |
