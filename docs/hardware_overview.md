---
title: Hardware Overview
description: Overview of the board design, components, and interfaces
---

## Board Layout
The SparkFun 9DoF IMU Breakout - IM19 features the following:


<div class="grid">

<div>

<figure>
[![Layout](/img/hookup_guide/layout.png)](/img/hookup_guide/layout.png)
<figcaption>Layout of the major components on the breakout board.</figcaption>
</figure>

</div>


<div>

1. **[USB-C Connector](#usb-c-connector)**
:   The primary inteface for powering and interacting with the board
1. **[IM19 Attitude Module](#im19-attitude-module)**
:   The Feyman IM19 Attitude Module
1. **Header Pins**
:   Exposes pins to [power the board](#power) and breaks out the [interfaces of the IM19 attitude module](#gpio)
1. **[JST Connector](#jst-connector)**
:   Exposes the `UART3` interface of the IM19 attitude module

</div>

</div>



## USB-C Connector
The USB connector is provided to power and interface with the IM19 attitude module. For most users, it will be the primary method for communicating with the IMU.


<figure>
[![USB-C Connector](/img/hookup_guide/usb_connector.png)](/img/hookup_guide/usb_connector.png)
<figcaption>The USB-C connector on the IM19 breakout board.</figcaption>
</figure>



### CH342 Converter
The CH342 serial-to-USB converter allows users to interface with the `UART1` and `UART2` ports of the IM19 attitude module through the USB-C connector. The breakout board also includes a digital switch, to isolate the CH342 and allow users to access these UART ports through their breakout pins. To utilize the CH342, users may need to install a USB driver, which can be downloaded from the [manufacturer website](https://www.wch-ic.com/search?q=CH342&t=downloads). Once the USB driver is installed:

- Two virtual `COM` ports will be emulated, which can be used as standard `COM` ports to access the IM19 attitude module.
	- `Channel A`: `UART1` of the IM19 attitude module
	- `Channel B`: `UART2` of the IM19 attitude module


<figure>
[![CH342](/img/hookup_guide/uart-ch342.png)](/img/hookup_guide/uart-ch342.png)
<figcaption>The interface connections of the CH342 serial-to-USB converter.</figcaption>
</figure>


To activate the digital switch and utilize the UART ports through their breakout pins, users can [close the `CH342 EN` jumper](#jumpers) or pull the`CH342 EN` pin `LOW`. This disables the CH342 and disconnects the CH342 from the `UART1` and `UART2` ports of the IM19 attitude module, avoiding any bus contention issues.


::::tip[USB Drivers]

-   <Icon icon="mdi:microsoft-windows" width="24" height="24" /> **Windows:** [Download Page for <Icon icon="octicon:download-16" width="16" height="16" /> `CH343SER.EXE`](https://www.wch-ic.com/downloads/CH343SER_EXE.html)
-   <Icon icon="mdi:apple" width="24" height="24" /> **MacOS:** [Download Page for <Icon icon="octicon:download-16" width="16" height="16" /> `CH341SER_MAC.ZIP`](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)


:::info[Linux]
A USB driver is not required for Linux based operating systems.
:::

::::


## Power
The IM19 breakout board only requires **3.3V** to power all of the board's components. The simplest method to power the board is through the USB-C connector. Alternatively, the board can also be powered through the other connectors and [PTH](https://en.wikipedia.org/wiki/Through-hole_technology "Plated Through Holes") pins.


<figure>
[![Power connections](/img/hookup_guide/power_connections.png)](/img/hookup_guide/power_connections.png)
<figcaption>IM19 breakout board's power connections.</figcaption>
</figure>


Below, is a general summary of the power circuitry on the board, broken out as [PTH](https://en.wikipedia.org/wiki/Through-hole_technology "Plated Through Holes") pins:


<div class="annotate">

- **`VUSB`** - The voltage from the USB-C connector, usually **5V**
	- Input Voltage Range: 4.4 - 5.5 V
	- Power source for the entire board
		- Powers the 3.3V voltage regulator (RT9080), which can source up to 600mA
		- When enabled, it can also power the [JST connector](#jst-connector) *(see the **[Jumpers](#jumpers)** section)*
- **`VIN`** - Alternate input supply voltage for the board
	- Input Voltage Range: 1.2 - 5.5V (1)
	- Power source for the entire board
		- Powers the 3.3V voltage regulator (RT9080), which can source up to 600mA
		- When enabled, it can also power the [JST connector](#jst-connector) *(see the **[Jumpers](#jumpers)** section)*
- **`3V3`** - Provides a regulated 3.3V from the [RT9080](/component_documentation/RT9080.pdf), using the power supplied from the `VIN` pin or USB-C connector
	- Used to power the IM19 module, `PWR` LED, and the power pin of the [JST connector](#jst-connector)
	- Controlled by the `3V3 EN` pin, which is enabled by default
- **`3V3 EN`** - Enables the voltage output from the [RT9080](/component_documentation/RT9080.pdf), 3.3V voltage regulator
	- Enabled by default *(active `HIGH`)*
- **`RST`** - Used to reset the IM19 attitude module
	- Driving the pin `LOW` for 10ms triggers a restart of the IM19 module
- **`GND`** - The common ground or the 0V reference for the voltage supplies

</div>

1. While the [RT9080](/component_documentation/RT9080.pdf) LDO regulator has an input voltage range of 1.2 - 5.5V, a minimum supply voltage of **3.5V** is recommended for a 3.3V output.


:::tip[JST Connector]
The `VCC` pin of the of the [JST connector](#jst-connector) is designed to operate as a voltage output. An input voltage can be supplied through the connector; however, users should be mindful of any voltage contention issues. Additionally, users can modify the [`VCC` jumper](#jumpers) to change the output voltage level of these pins.
:::

:::info
For more details, users can reference the [schematic](/board_files/schematic.pdf) and the datasheets of the individual components on the board.
:::


## IM19 Attitude Module
The [IM19 attitude module](/component_documentation/IM19EI_v1.4.1.pdf) from [Feyman Inc. (FMI)](http://feymani.com/en/) fuses MEMS IMU sensor data and GNSS RTK positioning to deliver high-precision attitude compensated measurements, with roll and pitch accurate to within 0.05 degrees. This kind of superb accuracy has widespread uses in industrial applications such as tilt RTK surveys (where RTK poles need not be held straight vertical as the IM19 can calculate a virtual digital level at any tilt angle), agriculture machine automation, and dead reckoning.


<iframe width="500" height="281" src="https://global.feymani.com/files/im19.mp4" type="video/mp4" title="IM19 product showcase" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Features:**

- Power: 0.33W
	- Voltage Range: 3.0 to 3.6V
	- Current Consumption: 120 to 140mA
- Data Rate: 100Hz
- IMU Accuracy: &le;1% * D (1&sigma;, vehicle)
- Roll and Pitch: &le;0.02&deg; (1&sigma;)
- Heading/Yaw: &le;0.2&deg; (1&sigma;)
- Initialization: 1s (95%)
- Gyroscope
	- ARW: 0.17&deg;/&radic;(h)
	- Bias Stability: &plusmn;4.5&deg;/h
	- Range: &plusmn;1000&deg;/s
- Accelerometer
	- Speed RW: 0.04m/s/&radic;(h)
	- Bias Stability: &plusmn;0.3mg
	- Range: &plusmn;16g
- Self-calibration Technique


:::info
For more information, please refer to the [IM19 datasheet](/component_documentation/IM19.pdf).
:::



### Tilt-Compensation
In order to provide a tilt-compensated position, the IM19 attitude module requires the Pulse-Per-Second signal; receive NMEA GGA, RMC and GST messages on its `UART2` port, from a GNSS receiver with an RTK Fix; and be configured with information on the location of the GNSS antenna's reference center *(ARC)* and the survey point, with respect to the IMU's origin. Once calibrated, the IM19 will output proprietary `FMI*` messages containing the compensated position and roll, pitch and yaw attitudes.


<figure>
[![GNSS Integration](/img/hookup_guide/integration-gnss.png)](/img/hookup_guide/integration-gnss.png)
<figcaption>A GNSS receiver sending the required data to the IM19 attitude module.</figcaption>
</figure>



#### IMU Position
The measurements below are general guidelines for the position of the IMU inside the IM19 attitude module, with respect to the breakout board. The origin for the IMU is 2.72mm in Y-axis and 5.72mm in X-axis from the center of the IM19 attitude module. The plane of the Z-axis lies in the middle of IM19 attitude module, on the top surface of the module's PCB. In respect to the IM19 attitude module, which has a height of 3.2±0.1mm, the plane is located 1.6mm in towards the bottom/backside of the board from its top surface.


<figure>
[![IMU offset](/img/hookup_guide/im19-origin.png)](/img/hookup_guide/im19-origin.png)
<figcaption>The IMU origin, with respect to the IM19 attitude module and the PCB.</figcaption>
</figure>


<figure>
[![IMU offset height](/img/hookup_guide/im19-height-small.png)](/img/hookup_guide/im19-height.png)
<figcaption>The IMU origin, as viewed from the side of the IM19 IMU breakout board.</figcaption>
</figure>


In reference to the breakout board, the IMU's origin on the X/Y-axes is centered in the middle of the PCB. A reference mark is provided on the bottom of the IM19 IMU breakout board. From the reference mark, the plane of the Z-axis is located 3.2mm towards the top/front of the board. For the most precise measurements, users should also consider the manufacturing tolerances for the board as the position/orientation of the IM19 attitude module may shift in the reflow process and the edges of the PCB may not be precise. The PSB is panelized for production, along the edges with the header pins using a v-score.


<figure>
[![IMU origin marked](/img/hookup_guide/im19-origin_bottom.png)](/img/hookup_guide/im19-origin_bottom.png)
<figcaption>The IMU origin marked on the bottom of the IM19 IMU breakout board.</figcaption>
</figure>



#### Lever Arm and Club Vectors
With the origin point of the IMU in the IM19 attitude module, users can determine the vector to the `LEVER_ARM`. This vector runs from the origin point of the IMU to the `ARP` (antenna reference point) of the GNSS antenna. The `CLUB_VECTOR` runs from the `APC` (antenna phase center) of the GNSS antenna to the surveying marker point. Both the `CLUB_VECTOR` and `LEVER_ARM` vectors need to be configure in the IM19 attitude module before it can be calibrated.


<figure>
[![Vector points](/img/hookup_guide/vector_points.png)](/img/hookup_guide/vector_points.png)
<figcaption>The points for the `CLUB_VECTOR` and `LEVER_ARM` vector. (Source: [Septentrio](https://customersupport.septentrio.com/articles/Knowledge/ARP-APC-offsets))</figcaption>
</figure>



#### Calibration & Initialization
Once the IM19 attitude module has been configured, it must go through an initialization process to calibrate the module. As demonstrated in the videos below, user need to give the IM19 attitude module a vigorous shake to initialize the calibration process. Once initialized, users need to:

1. Shake to initialize calibration
1. Swing the module back and forth *(3-5sec)*
1. Rotate the device 90&deg;
1. Swing the module back and forth *(3-5sec)*
1. Done


<iframe width="500" height="281" src="https://www.youtube.com/embed/IWkgZUISF9M?start=47" title="IM19 Initialization Stability" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="500" height="281" src="https://www.youtube.com/embed/wND8cXVQSXo" title="IM19 Initialization Stability" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



#### Accuracy
When configured and calibrated, the IM19 attitude module can fuses IMU sensor and GNSS RTK positioning data to deliver compensated position. The accuracy, displayed in the table below, should also be considered when implemented.


| Tilt Angle        | Accuracy |
| :---------------: | :------: |
| 0&deg; - 30&deg;  | 1cm      |
| 30&deg; - 60&deg; | 2cm      |


:::tip
It is recommended that the IM19 module is placed in a stable temperature region and avoid convection with the outside air.
:::



### I/O Pins
The headers on the board, breakout the I/O pins of the IM19 attitude module. The [UART interfaces](#uart-interfacess) of the IM19 are also connected to the [CH342 USB-to-serial converter](#ch342-converter) and [JST connector](#jst-connector) on the board.


<figure>
[![I/O pins](/img/hookup_guide/im19-gpio.png)](/img/hookup_guide/im19-gpio.png)
<figcaption>The I/O pins for the IM19 attitude module on breakout board.</figcaption>
</figure>



#### Pin Functions
Below is a summary of these I/O pins and their operation:


- `BOOT` - Start modes
	- `HIGH`: Boot mode
	- `NC` or `LOW`: Normal working mode
	- **Operation:** Pulling the `BOOT` pin `HIGH`, when powering up the module enables boot mode. This is used to update the module's firmware
- `RST` - Hardware reset pin
	- **Operation:** Pulling the `RST` pin `LOW` for 10ms, will reset module
- `GPIO` - Output IO
	- **Function:** Active buzzer can be connected
- UART Interfaces:
	- Baud rate: 115200bps
	- **Operation:** Configuration, message output, and firmware upgrade
	- **Configuration:** See [UART interface section](#uart-interfaces)
		- *Default Setting:*
			- *`UART2` - Connect GNSS board*
			- *`UART1`/`UART3` - Connect to host device*
- `PPS` - Connect to the PPS signal from the GNSS board
	- **Function:** Synchronizes the MEMS IMU sensor data with the GNSS RTK position data
	- **Configuration:** See [PPS signal section](#pps-pin)
		- *Default Setting: Falling edge*



## Header Pins
The headers on the board, breakout the [I/O pins of the IM19 attitude module](#io-pins), the [power pins](#power), [UART interfaces](#uart-interfacess), and `CH342_EN` UART control pin.


<figure>
[![Header pins](/img/hookup_guide/headers.png)](/img/hookup_guide/headers.png)
<figcaption>The header pins on the IM19 breakout board.</figcaption>
</figure>



### UART Interfaces
The three UART interfaces of the IM19 attitude module are broken out to the header pins on the board, the JST connector, and connected to the CH342 USB-to-serial converter. By default, `UART1` and `UART2` interfaces are attached to the [CH342 USB-to-serial converter](#ch342-converter) and are accessed through the [USB connector](#usb-c-connector). To utilize the `UART1` and `UART2` interfaces through their header pins, user need to toggle the `CH342_EN` pin or [close its jumper](#jumpers). This disables the [CH342 USB-to-serial converter](#ch342-converter) and a digital switch disconnects the UART interfaces to avoid any bus contention issues. Whereas, the `UART3` interface can be accessed through either the [JST connector](#jst-connector) or its header pins. The baud rate for the UART ports is not configurable and are set to **115200bps**.


<figure>
[![UART Interfaces](/img/hookup_guide/uart-interface.png)](/img/hookup_guide/uart-interface.png)
<figcaption>The UART interfaces of the IM19 breakout board.</figcaption>
</figure>


:::info[Settings and Configuration]
The UART ports are configured through [AT-commands](#software_overview.md#at-commands), which are summarized below. However, it should be noted that the baud rate of the ports cannot be configured. By default, the baud rate is hard-coded to **115200bps**.

- **Baud Rate:** 115200bps
- **AT-Commands:**
	- `AT+NAVI_OUTPUT=<Port>,<Output>` - Enable the binary NAVI positioning output on the UART port
	- `AT+NASC_OUTPUT=<Port>,<Output>` - Enable the ASCII type NAVI positioning output on the UART port
	- `AT+MEMS_OUTPUT=<Port>,<Output>` - Enable the MEMS raw output on the UART port
	- `AT+GNSS_OUTPUT=<Port>,<Output>` - Enable the GNSS raw output on the UART port
	- `AT+GNSS_PORT=PHYSICAL_<Port>` - Sets the UART port for receiving the GNSS RTK data
		- Save the settings and restart the device to take effect
	- `AT+LOOP_BACK=<Loop>` - UART port enters or exits the loopback mode
	- `AT+OUTPUT_DISABLE=<Port>` - Disables all output messages from the UART port
	- Where the `<values>` above should be:
		- `<Port>` = `UART1`, `UART2`, or `UART3`
		- `<Loop>` = `UART1`, `UART2`, `UART3`, or `NONE`
		- `<Output>` = `ON` or `OFF`

:::


::::note
By default, the `UART2` port is configured to receive the GNSS data required for the tilt-compensation. Whereas the default configuration of the `UART1` and `UART3` ports, the ports have the same functions. They can be connected to the main processor an/or used as a debugging, firmware upgrade, or configuration interface.

- `UART1` - Connect to host device
	- Configuration, message output, and firmware upgrade
- `UART2` - Connect GNSS board
- `UART3` - Connect to host device
	- Configuration, message output, and firmware upgrade


<figure>
[![System Integration](/img/hookup_guide/integration-host.png)](/img/hookup_guide/integration-host.png)
<figcaption>System integration of the IM19 breakout board, with the default configuration.</figcaption>
</figure>


:::info
For the UART interface sending the GNSS messages to the IM19 breakout board, users will need to configure the UART port with the following settings:

- Baudrate: 115200bps
- Output NMEA Messages: `GPGGA`, `GPRMC`, and `GPGST`
- Solution Rate: **5Hz**

:::
::::



### PPS Pin
The `PPS` pin needs to be connected to the PPS signal from the GNSS receiver. It is utilized to synchronizes the MEMS IMU sensor data with the GNSS RTK position data. When connected, the `AT+CHECK_SYNC` AT-command can be used to verify if the IM19 attitude module is synchronized with the GNSS RTK position data.


<figure>
[![PPS pin](/img/hookup_guide/pps.png)](/img/hookup_guide/pps.png)
<figcaption>The `PPS` pin on the IM19 breakout board.</figcaption>
</figure>


:::info
The `AT+SET_PPS_EDGE` AT-command configures the edge detection parameter for the PPS signal. By default, the IM19 attitude module is configured to detect the falling-edge of the PPS signal.
:::



### Boot/RST Pins
The `BOOT` and `RST` pins are, respectively, used to update or reset the IM19 attitude module.

- The `BOOT` pin can be toggled `HIGH`, when powering up the IM19 breakout board. This enables boot mode to update the IM19 attitude module's firmware through the UART interface.
- The `RST` pin can be pulled `LOW` for 10ms to IM19 attitude module.


<figure>
[![Boot and reset pins](/img/hookup_guide/boot_reset.png)](/img/hookup_guide/boot_reset.png)
<figcaption>The `BOOT` and `RST` pins on the IM19 breakout board.</figcaption>
</figure>



### GPIO Pin
The `GPIO` pin is an ouput pin; its suggested use is an audio indicator, with a connected buzzer.


<figure>
[![GPIO pin](/img/hookup_guide/gpio.png)](/img/hookup_guide/gpio.png)
<figcaption>The `GPIO` pin on the IM19 breakout board.</figcaption>
</figure>



## JST Connector
The JST-GH connector is used to access the [`UART3` interface](#uart-interfaces). Its pin layout is labeled on the board and listed in the diagram below. The power supply for the `VCC` pin can be configured using the [`VCC` jumper](#jumpers) on the bottom of the board. By default, the jumper is configured to supply **3.3V** to the JST connector.


<figure>
[![JST connector](/img/hookup_guide/jst_connector.png)](/img/hookup_guide/jst_connector.png)
<figcaption>The JST-GH connector on the IM19 breakout board.</figcaption>
</figure>


:::note
When connecting the IM19 breakout board to other products, users should be aware of the pin connections between the devices. The table below, details the pin connections of the locking JST connector on the IM19 breakout board.


<figure>
[![JST connector pin layout](/img/hookup_guide/jst-4_pin.png)](/img/hookup_guide/jst-4_pin.png)
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
	<u>**Voltage Output**</u>
    <ul>
    <li>**Default: 3.3V**</li>
	<li>3.3V or 5V</li>
    </ul>
</td>
<td>`UART3` - Receive</td>
<td>`UART3` - Transmit</td>
<td>Ground</td>
</tr>
</table>

:::


:::tip[Baud Rate]
Users will need to configure the baud rate of the attach devices to match the UART port of the IM19 attitude module, which are set to **115200bps**.
:::



## Jumpers

:::note[Never modified a jumper before?]
Check out our <a href="https://learn.sparkfun.com/tutorials/664">Jumper Pads and PCB Traces tutorial</a> for a quick introduction!
:::

There are five jumpers on these board that can be used to easily modify the hardware connections.


<figure>
[![Jumpers](/img/hookup_guide/jumpers.png)](/img/hookup_guide/jumpers.png)
<figcaption>The jumpers on the bottom of the BlueSMiRF v2.</figcaption>
</figure>


- **`SHLD`** - This jumper can be cut to disconnect the shield of the USB-C connector from the board's ground plane.
- **`PWR`** - This jumper can be cut to remove power from the red, power LED.
- **`MEAS`** - This jumper can be cut to to measure the current coming into the board from the USB connector or `VIN` pin.
- **`VCC`** - This jumper can be modified to configure/disconnect the `VCC` pin of the [4-pin locking JST connector](#jst-connector) to/from `3V3` or `5V` power.
	- By default, the jumper is configured to supply 3.3V.
- **`CH342_EN`** - This jumper can be closed to disable the CH342 and disconnect it from the `UART1` and `UART2` ports of the IM19 attitude module. 
	- Allows the breakout pins to be utilized; avoiding bus contention issues.
