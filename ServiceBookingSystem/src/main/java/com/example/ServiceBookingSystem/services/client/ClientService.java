package com.example.ServiceBookingSystem.services.client;

import java.util.List;

import com.example.ServiceBookingSystem.dto.AdDTO;
import com.example.ServiceBookingSystem.dto.AdDetailsForClientDTO;
import com.example.ServiceBookingSystem.dto.ReservationDTO;
import com.example.ServiceBookingSystem.dto.ReviewDTO;

public interface ClientService {
	
	List<AdDTO> getAllAds();
	
	List<AdDTO> searchAdByName(String name);
	
	boolean bookService(ReservationDTO reservationDTO);
	
	AdDetailsForClientDTO getAdDetailsByAdId(Long adId);
	
	List<ReservationDTO> getAllBookingsByUserId(Long userId);
	
	Boolean giveReview(ReviewDTO reviewDTO);

}

