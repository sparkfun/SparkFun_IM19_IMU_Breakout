---
title: Software Overview
description: A guide on recommended software
---


## CH342 USB Driver
The USB drivers for the CH342 USB-to-Serial converter can be downloaded from the [manufacturer's website](https://www.wch-ic.com/search?q=CH342&t=downloads).


- <Icon icon="mdi:microsoft-windows" width="24" height="24" /> **Windows:** [Download Page for <Icon icon="octicon:download-16" width="16" height="16" /> `CH343SER.EXE`](https://www.wch-ic.com/downloads/CH343SER_EXE.html)
- <Icon icon="mdi:apple" width="24" height="24" /> **MacOS:** [Download Page for <Icon icon="octicon:download-16" width="16" height="16" /> `CH341SER_MAC.ZIP`](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)


:::info[Linux]
A USB driver is not required for Linux based operating systems.
:::


Once the USB driver is installed, two virtual `COM` ports will be emulated, which can be used as standard `COM` ports to access UART interfaces of the IM19 attitude module.


- `Channel A`: `UART1` of the IM19 attitude module
- `Channel B`: `UART2` of the IM19 attitude module


:::info[Default Settings]
The UART ports of the IM19 attitude module have the following default configuration:


- Baud Rate: 115200bps
- Data Bits: 8
- Parity: No
- Stop Bits: 1

:::


:::tip
The breakout board also includes a digital switch, to isolate the CH342 and allow users to access these UART ports through their breakout pins. To activate the digital switch and utilize the UART ports through their breakout pins, users can [close the `CH342 EN` jumper](hardware_overview.md#jumpers) or pull the`CH342 EN` pin `LOW`. This disables the CH342 and disconnects the CH342 from the `UART1` and `UART2` ports of the IM19 attitude module, avoiding any bus contention issues.
:::



## AT-Commands
Below is a summary of the AT commands supported by the IM19 attitude module. The AT-commands are case-sensitive and need to be sent in a single string; therefore, when using a terminal emulator, it is recommended to utilize one that sends a string of characters instead of each character as they are typed.


| AT Command | Description |
| :--------- | :---------- |
| `AT+SYSTEM_RESET`                  | System reset |
| `AT+SAVE_ALL`                      | Save the parameters |
| `AT+UPDATE_APP`                    | Update module firmware, see attachment for protocols |
| `AT+UPDATE_BOOT`                   | Update Bootloader，see attachment for protocols |
| `AT+GNSS_CARD=`                    | Set the GNSS RTK receiver type:<ul><li>`HEMI`, `NOVTEL`, `UNICORE`, `OEM`</li></ul> |
| `AT+READ_PARA=SYSTEM/ALL`          | Read parameters (`SYSTEM` or `ALL`) |
| `AT+LOAD_DEFAULT`                  | Loads default parameters |
| `AT+AUTO_FIX=ENABLE/DISABLE`       | Installation angle estimation in tilt measurement applications |
| `AT+CLUB_VECTOR=X,Y,Z`             | Set the RTK pole vector to map the position to the end of the RTK pole *(units in meters)* |
| `AT+NAVI_OUTPUT=UARTn,ON/OFF`      | Binary NAVI positioning output for `UARTn` |
| `AT+NASC_OUTPUT=UARTn,ON/OFF`      | Ascii type NAVI positioning output for `UARTn` |
| `AT+MEMS_OUTPUT=UARTn,ON/OFF`      | MEMS raw output for `UARTn` |
| `AT+GNSS_OUTPUT=UARTn,ON/OFF`      | GNSS raw output for `UARTn` |
| `AT+LEVER_ARM=X,Y,Z`               | Set the lever arm *(units in meters)* |
| `AT+LEVER_ARM2=X,Y,Z`              | Set the lever arm, the input value will be automatically adjusted according to the estimated installation angle *(units in meters)* |
| `AT+CHECK_SYNC`                    | Query whether time is synchronized between MEMS and GNSS |
| `AT+HIGH_RATE=ENABLE/DISABLE`      | High-rate mode setting |
| `AT+ACTIVATE_KEY=KEY`              | Module activation |
| `AT+ALIGN_VEL=1.0`                 | Set the initial alignment speed threshold |
| `AT+VERSION`                       | Query the Firmware version |
| `AT+GNSS_PORT=PHYSICAL_UARTn`      | Set the physical serial port on `UARTn`, for communicating with the GNSS RTK receiver. Save the Settings and restart to take effect |
| `AT+WORK_MODE=X`                   | Set the module working mode |
| `AT+INSTALL_ANGLE=X,Y,Z`           | Set the module installation angle *(units in degrees)* |
| `AT+THIS_PORT`                     | Query the serial port number |
| `AT+FILTER_STOP=ENABLE/DISABLE`    | Causes the filter to enter or exit stop mode |
| `AT+LOOP_BACK=UARTn/NONE`          | `UARTn` enters or exits the loopback mode |
| `AT+FILTER_RESET`                  | Filter Reset |
| `AT+CHECK_CRC=N`                   | The IM19EE firmware CRC is calculated for checking the firmware, where `N` is the firmware size |
| `AT+CORRECT_HOLDER=ENABLE/DISABLE` | Turn on or off RTK pole length compensation |
| `AT+OUTPUT_DISABLE=UARTxn`         | Disable the output of all messages over the serial port `UARTn` |
| `AT+CALIBRATE_MODE2=STEP1/STEP2`   | Factory calibration command |
| `AT+SET_CHECK_LEVEL=LEVELx`        | Set check level of calibration parameter |
| `AT+FACTORY_PARA_x=X,Y,Z`          | Recovery factory calibration parameter |
| `AT+SET_PPS_EDGE=RISING/FALLING`   | Set PPS edge, accept falling pps edge by default |


:::info
For more information, please reference the [IM19 integration manual](/component_documentation/IM19EI_v1.4.1.pdf).
:::



## Compatible Software
Below are some compatible software options for configuring the IM19 attitude module and receiving the tilt-compensated position in its proprietary message format.



### PyGPSClient
As of [v1.5.8](https://github.com/semuconsulting/PyGPSClient/releases/tag/v1.5.8), a widget has been added to the [PyGPSClient](https://github.com/semuconsulting/PyGPSClient) application to configure and utilize the IM19 attitude module.


:::info[Resources]
For additional information, users can refer to the following resources for the PyGPSClient software:


- [GitHub Repository](https://github.com/semuconsulting/PyGPSClient)
- [Installation Instructions](https://github.com/semuconsulting/PyGPSClient?tab=readme-ov-file#installation)
- [PyPI Project](https://pypi.org/project/pygpsclient/)

:::


#### Installation
There are a variety of [installation methods](https://github.com/semuconsulting/PyGPSClient?tab=readme-ov-file#installation) detailed in the GitHub repository's `README.md` file. However, we recommend utilizing the `pip` installation method.


::::info[Installation Commands]
Depending on how Python is installed on the computer, one of the following commands should allow users to install the software.


- ```bash
	python3 -m pip install pygpsclient
	```

- ```bash
	pip install pygpsclient
	```


:::note[System Requirements]
This installation method requires an internet connection. Additionally, users will also need administrative privileges *(or root access `sudo`)* for the installation.
:::

::::



#### Device Connection
Before users can connect to the IM19 breakout board, they will need to specify the settings of the UART port in PyGPSClient. Once configured, users can select the <kbd><Icon icon="material-symbols:usb" width="24" height="24" /></kbd> button and PyGPSClient will automatically attempt to connect to the GNSS module.


- Below, is a list of the default settings for `UART` ports of the IM19. These settings should be selected in the configuration menu.
- For the `Serial Port`, select the port associated with the attached UART interface.


<figure>
![UART Settings in PyGPSClient](/img/hookup_guide/pygpsclient-uart_settings-small.png)
<figcaption>Specify the settings for the UART port in PyGPSClient.</figcaption>
</figure>


:::info[Default Settings]
The UART ports of the IM19 attitude module have the following default configuration:


- Baud Rate: 115200bps
- Data Bits: 8
- Parity: No
- Stop Bits: 1

:::



### Arduino IDE
Most users may already be familiar with the Arduino IDE and its use. However, for those of you who have never heard the name *Arduino* before, feel free to check out the [Arduino website](https://www.arduino.cc/en/Guide/HomePage). To get started with using the Arduino IDE, check out our tutorials below:


- [What is an Arduino?](https://learn.sparkfun.com/tutorials/50)
- [Installing the Arduino IDE](https://learn.sparkfun.com/tutorials/61)
- [Installing an Arduino Library](https://learn.sparkfun.com/tutorials/15)
- [Installing Board Definitions in the Arduino IDE](https://learn.sparkfun.com/tutorials/1265)



#### IM19 IMU Arduino Library
The [SparkFun IM19 Tilt Sensor Arduino Library](https://github.com/sparkfun/SparkFun_IM19_IMU_Arduino_Library) can be installed from the library manager in the Arduino IDE by searching for:

```txt
SparkFun IM19 IMU Arduino Library
```

<figure>
![Library listed in the library manager of the Arduino IDE](/img/hookup_guide/arduino_library.png)
<figcaption>SparkFun IM19 IMU Arduino Library in the library manager of the Arduino IDE.</figcaption>
</figure>



:::info[Manually Download the Arduino Library]
For users who would like to manually download and install the library, the `*.zip` file can be accessed from the [GitHub repository](https://github.com/sparkfun/SparkFun_IM19_IMU_Arduino_Library) or downloaded by clicking the button below.


- <Icon icon="octicon:download-16" width="16" height="16" /> [Download the Arduino Library](https://github.com/sparkfun/SparkFun_IM19_IMU_Arduino_Library/archive/refs/heads/main.zip)

:::
