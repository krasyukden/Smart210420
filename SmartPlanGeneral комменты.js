"use strict";

class Home

	state
		_address: string
		_devices: []
	behavior
		getAdress(): string
		setAdress(string): void
		ыы
		addDevice(device): void
		getDeviceByName(string): device
		getAllDevices(): [device]
	!1!deleteDeviceByName(string): void
      
      onAllDevices(): void
      offAllDevices(): void
      
   !2!delayOn(name, delay, callback): void
 //!3!delayOn(name, delay): Promise
 