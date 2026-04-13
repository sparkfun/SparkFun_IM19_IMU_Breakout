---
title: Hardware Assembly
description: Instructions for product integration
---

## Recommended Setup
By default, the `UART2` port is configured to receive the GNSS data required for the tilt-compensation. Whereas the default configuration of the `UART1` and `UART3` ports, the ports have the same functions. They can be connected to the main processor an/or used as a debugging, firmware upgrade, or configuration interface.

- `UART1` - Connect to host device
	- Configuration, message output, and firmware upgrade
- `UART2` - Connect GNSS board
- `UART3` - Connect to host device
	- Configuration, message output, and firmware upgrade


<figure>
![System Integration](/img/hookup_guide/integration-host.png)
<figcaption>System integration of the IM19 breakout board, with the default configuration.</figcaption>
</figure>


:::info
For the UART interface sending the GNSS messages to the IM19 breakout board, users will need to configure the UART port with the following settings:


- Baudrate: 115200bps
- Output NMEA Messages: `GPGGA`, `GPRMC`, and `GPGST`
- Solution Rate: **5Hz**

:::

