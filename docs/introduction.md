---
title: Introduction
slug: /
---

<figure>
[![Hookup Guide - Thumbnail](/img/banner-hookup_guide.png)](/img/banner-hookup_guide.png)
</figure>



# Introduction
The Feyman (FMI) IM19 attitude module combines MEMS sensor data with GNSS RTK positioning data to provide high-precision attitude measurements. This enables advanced features, like tilt-compensated surveying and robust navigation through brief GNSS outages.




- **Survey-Grade Accuracy:** Delivers roll and pitch measurements accurate to within 0.05 degrees.
- **Tilt Compensation:** No more perfectly vertical survey poles! The IM19 can calculate a virtual digital level point at any tilt angle, revolutionizing field data collection.
- **Sensor Fusion:** Offers a continuous navigation solution (Dead Reckoning) even during brief GNSS signal loss, making it ideal for urban or obstructed environments.

When fed with NMEA **`GGA`**, **`GST`**, and **`RMC`** RTK corrected, GNSS messages at **5Hz**, and a standard **Pulse-Per-Second signal**, the IM19 attitude module will output a proprietary NMEA ASCII `GPFMI` message which contains the compensated position of the tip of your surveying pole, plus the Roll, Pitch and Yaw of the IMU itself.


:::note
The IM19 needs to be fed with GNSS positioning data with a RTK Fixed solution *(RTK Fix)* in order to work correctly. This board will not work with non-RTK GNSS receivers.
:::



## Required Materials
In this guide we'll cover how to setup the IM19 breakout board. To follow along with this tutorial, at a minimum, users will need the following items:

- Computer with an operating system (OS) that is compatible with all the [software installation requirements](software_overview.md#compatible-software)
- USB cables
- RTK GNSS receiver
	- GNSS antenna
- Hookup wires



## Sections
Jump to a specific section of the hookup guide:


<DocCardList
	items={
		[
			{
				type: 'link',
				label: 'Hardware Overview',
				description: 'Overview of the board design, components, and interfaces',
				href: 'hardware_overview',
				customProps: { iconify: 'mdi:integrated-circuit' },
			},
			{
				type: 'link',
				label: 'Hardware Assembly',
				description: 'Instructions on product integration',
				href: 'hardware_assembly',
				customProps: { iconify: 'mdi:crane' },
			},
			{
				type: 'link',
				label: 'Software Overview',
				description: 'A guide on recommended software',
				href: 'category/software',
				customProps: { iconify: 'fa7-solid:computer' },
			},
			{
				type: 'link',
				label: 'Resources',
				description: 'Design files, schematic, datasheets, manuals, software resources, etc.',
				href: 'resources',
				customProps: { iconify: 'mdi:folder-file-outline' },
			},
			{
				type: 'link',
				label: 'Troubleshooting TIps',
				description: 'A compilation of support tips for this product',
				href: 'troubleshoot',
				customProps: { iconify: 'mdi:lightbulb-on' },
			},
		]
	}
/>
