package com.example.ServiceBookingSystem.dto;

import lombok.Data;

@Data
public class AdDetailsForClientDTO {
	
	private AdDTO adDTO;

	public AdDTO getAdDTO() {
		return adDTO;
	}

	public void setAdDTO(AdDTO adDTO) {
		this.adDTO = adDTO;
	}
	
	

}
