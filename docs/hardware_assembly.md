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



## USB Connector
The USB connection can be utilized for serial communication and configuring the IM19 attitude module. Users only need to connect their IM19 breakout board to a computer, using a USB-C cable.

<figure>
![IM19 breakout board USB connection](/img/hookup_guide/assembly-usb.jpg)
<figcaption>The IM19 breakout board with USB cable attached.</figcaption>
</figure>



## JST Connector
The JST connector on the IM19 board, breaks out the `UART3` port of the IM19 attitude module. In certain circumstances, users want to utilize the JST connector to attach one of our radios or [BlueSMiRF](https://www.sparkfun.com/sparkfun-bluesmirf-v2-jst.html).

Radio Transceivers and Cables


- [SiK Telemetry Radio V3 - 915MHz, 100mW](https://www.sparkfun.com/sik-telemetry-radio-v3-915mhz-100mw.html)
- [SparkFun LoRaSerial Kit - 915MHz (Enclosed)](https://www.sparkfun.com/sparkfun-loraserial-kit-915mhz-enclosed.html)
- [BlueSMiRF - JST](https://www.sparkfun.com/sparkfun-bluesmirf-v2-jst.html)
- [JST-GHR-04V to JST-GHR-06V Cable - 1.25mm pitch](https://www.sparkfun.com/jst-ghr-04v-to-jst-ghr-06v-cable-1-25mm-pitch.html)
- [GHR-04V-S to GHR-06V-S Cable - 100mm](https://www.sparkfun.com/ghr-04v-s-to-ghr-06v-s-cable-100mm.html)



<figure>
![Device connected to the JST connector](/img/hookup_guide/assembly-jst.jpg)
<figcaption>The [Telemetry Radio v3](https://www.sparkfun.com/sik-telemetry-radio-v3-915mhz-100mw.html) connected to the IM19 breakout.</figcaption>
</figure>


:::info
Users can [modify the `VCC` jumper](hardware_overview.md#jumpers) on the back of the board to enable a 5V output on the `VCC` pin.
:::


:::note
When connecting the IM19 breakout board to other products, users should be aware of the pin connections between the devices. The table below, details the pin connections of the locking JST connector on the IM19 breakout board.


<figure>
![JST connector pin layout](/img/hookup_guide/jst-4_pin.png)
<figcaption>The pin layout of the JST connector on the IM19 breakout board.</figcaption>
</figure>


<table>
<tr>
<th>Pin Number</th>
<td>
	**1**<br />
	*(Left Side)*
</td>
<td>**2**</td>
<td>**3**</td>
<td>
    **4**<br />
	*(Right Side)*
</td>
</tr>
<tr>
<th>Label</th>
<td>`VCC`</td>
<td>`TX3`</td>
<td>`RX3`</td>
<td>`GND`</td>
</tr>
<tr>
<th>Function</th>
<td>
	<u>**Voltage Output**</u><br />
    - **Default: 3.3V**
	- 3.3V or 5V
</td>
<td>`UART3` - Receive</td>
<td>`UART3` - Transmit</td>
<td>Ground</td>
</tr>
</table>

:::


::::tip[Baud Rate]
Users will need to configure the baud rate of the attach devices to match the UART port of the IM19 attitude module, which are set to **115200bps**.


:::info
As documented in the [LoRaSerial product manual](https://docs.sparkfun.com/SparkFun_LoRaSerial), the baud rate for these radios are configured by the [`SERIAL_SPEED` parameter](https://docs.sparkfun.com/SparkFun_LoRaSerial/at_commands/#serial-commands). The default configuration is `SERIAL_SPEED`: **57600bps**.
:::

::::



## Breakout Pins
The [PTH](https://en.wikipedia.org/wiki/Through-hole_technology) pins on the IM19 board are broken out into 0.1"-spaced pins on the outer edges of the board.


:::warning
The board's pin layout is similar to some of our GNSS breakout boards and can be stacked using headers. However, users will need to configure the `GNSS_PORT` to the appropriate UART interface.
:::


:::note[New to soldering?]
If you have never soldered before or need a quick refresher, check out our [How to Solder: Through-Hole Soldering](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering) guide.
:::


:::tip
The breakout board also includes a digital switch, to isolate the CH342 and allow users to access the `UART1` and `UART2` ports of the IM19 attitude module through their breakout pins. To activate the digital switch and utilize the UART ports through their breakout pins, users can [close the `CH342 EN` jumper](hardware_overview.md#jumpers) or pull the`CH342 EN` pin `LOW`. This disables the CH342 and disconnects the CH342 from the `UART1` and `UART2` ports of the IM19 attitude module, avoiding any bus contention issues.
:::



### Headers
When selecting headers, be sure you are aware of the functionality you require.

<figure>
![Soldering headers](/img/hookup_guide/assembly-headers.jpg)
<figcaption>Soldering headers to the IM19 breakout board.</figcaption>
</figure>



### Hookup Wires
For a more permanent connection, users can solder wires directly to the board.

<figure>
![Soldering wires](/img/hookup_guide/assembly-wires.jpg)
<figcaption>Soldering wires to the IM19 breakout board.</figcaption>
</figure>
