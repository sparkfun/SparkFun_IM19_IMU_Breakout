---
title: Device Configuration
description: Instructions on the device configuration and utilization
---


## Reset Factory Defaults
Below are the AT-commands to check and restore settings to the factory defaults:


| AT Command                | Description                            |
| :------------------------ | :------------------------------------- |
| `AT+READ_PARA=SYSTEM/ALL` | Read parameters (`SYSTEM` or `ALL`)    |
| `AT+LOAD_DEFAULT`         | Loads default parameters               |
| `AT+FACTORY_PARA_x=X,Y,Z` | Recovery factory calibration parameter |


:::tip[Save & Reset]
Don't forget to save the changes and reset the device:


| AT Command        | Description         |
| :---------------- | :------------------ |
| `AT+SAVE_ALL`     | Save the parameters |
| `AT+SYSTEM_RESET` | System reset        |

:::



## Tilt-Compensation
Below are the AT-commands to configure the tilt-compensation settings:


| AT Command                    | Description                                                                                                                         |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `AT+GNSS_CARD=`               | Set the GNSS RTK receiver type:<ul><li>`HEMI`, `NOVTEL`, `UNICORE`, `OEM`</li></ul>                                                 |
| `AT+GNSS_PORT=PHYSICAL_UARTn` | Set the physical serial port on `UARTn`, for communicating with the GNSS RTK receiver. Save the Settings and restart to take effect |


| AT Command               | Description                                                                                                                         |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `AT+CLUB_VECTOR=X,Y,Z`   | Set the RTK pole vector to map the position to the end of the RTK pole *(units in meters)*                                          |
| `AT+LEVER_ARM=X,Y,Z`     | Set the lever arm *(units in meters)*                                                                                               |
| `AT+LEVER_ARM2=X,Y,Z`    | Set the lever arm, the input value will be automatically adjusted according to the estimated installation angle *(units in meters)* |
| `AT+INSTALL_ANGLE=X,Y,Z` | Set the module installation angle *(units in degrees)*                                                                              |


:::tip[Save & Reset]
Don't forget to save the changes and reset the device:


| AT Command        | Description         |
| :---------------- | :------------------ |
| `AT+SAVE_ALL`     | Save the parameters |
| `AT+SYSTEM_RESET` | System reset        |

:::



## Output Messages
Below are the AT-commands to enable the message outputs of a UART port:


| AT Command                    | Description                                                     |
| :---------------------------- | :-------------------------------------------------------------- |
| `AT+NAVI_OUTPUT=UARTn,ON/OFF` | Binary NAVI positioning output for `UARTn`                      |
| `AT+NASC_OUTPUT=UARTn,ON/OFF` | Ascii type NAVI positioning output for `UARTn`                  |
| `AT+MEMS_OUTPUT=UARTn,ON/OFF` | MEMS raw output for `UARTn`                                     |
| `AT+GNSS_OUTPUT=UARTn,ON/OFF` | GNSS raw output for `UARTn`                                     |
| `AT+OUTPUT_DISABLE=UARTxn`    | Disable the output of all messages over the serial port `UARTn` |
| `AT+THIS_PORT`                | Query the serial port number                                    |


:::tip[Save & Reset]
Don't forget to save the changes with the `AT+SAVE_ALL` AT-command.
:::



## Device



| AT Command                         | Description                                              |
| :--------------------------------- | :------------------------------------------------------- |
| `AT+CHECK_SYNC`                    | Query whether time is synchronized between MEMS and GNSS |
| `AT+CORRECT_HOLDER=ENABLE/DISABLE` | Turn on or off RTK pole length compensation              |


:::tip[Save & Reset]
Don't forget to save the changes with the `AT+SAVE_ALL` AT-command.
:::
